import * as fs from "fs";
import * as util from "util";
import { Router } from "express";
import Image from "../models/Image";
import { UploadedFile } from "express-fileupload";

const router = Router();

/**
 * Upload
 */
router.post("/images", async (req, res) => {
  if (!req.files) {
    res.status(500);
    return res.json("File wasn't attached");
  }

  const imageFile = req.files.imageFile as UploadedFile;
  const name = imageFile.name;

  // don't save an image if it's already created
  const isImageExist = await Image.exists({ name });
  if (isImageExist) {
    res.status(200);
    return res.json({
      message: `File ${name} is already included!`,
      alreadyExist: true
    });
  }

  const path = `assets/${name}`;
  imageFile.mv(`./public/${path}`, async (err: Error) => {
    if (err) return res.status(500).send(err);

    const image = new Image({
      name,
      path
    });

    await image.save();

    res.status(200);
    res.json(image);
  });
});

/**
 * Retrieve all images
 */
router.get("/images", async (req, res) => {
  const dir = "./public/assets";
  const exists = fs.existsSync(dir);

  // create directory if it doesn't exist
  !exists && fs.mkdirSync(dir);

  const images = await Image.find();
  res.status(200);
  res.json({ images, count: images.length, stat: exists });
});

/**
 * Remove an image
 */
router.post("/images/:imgId/remove", async (req, res) => {
  try {
    const imgId = req.params.imgId;
    const { img } = req.body;
    const unlink = util.promisify(fs.unlink);
    const message = `${img.name} with id ${imgId} was deleted`;

    console.log("REMOVE_IMAGE_ID", imgId);
    await Image.findByIdAndRemove(imgId);
    await unlink(`./public/assets/${img.name}`);

    res.status(200);
    res.json({ status: "OK", message });
  } catch (error) {
    res.status(500);
    res.json({ status: "Error", error });
  }
});

export default router;
