const fs = require("fs");
const util = require("util");
const path = require("path");
const { Router } = require("express");
const router = Router();
const Image = require("../models/Image");

router.post("/images", async (req, res) => {
  const readdir = util.promisify(fs.readdir);
  const imageFile = req.files.imageFile;
  const name = imageFile.name;
  console.log("File name: " + name);

  const files = await readdir(`./public/uploadedImages`);
  if (files && files.includes(name)) {
    console.log(`File ${name} is already included!`);
    res.status(200);
    res.json({
      message: `File ${name} is already included!`,
      alreadyExist: true
    });
  }

  const path = `./public/uploadedImages/${name}`;
  imageFile.mv(path, async err => {
    if (err) {
      return res.status(500).send(err);
    }

    const image = new Image({
      name,
      path
    });

    await image.save();

    res.status(200);
    res.json(image);
  });
});

router.get("/images", async (req, res) => {
  console.log("GET");
  const dir = "./public/uploadedImages";
  const readdir = util.promisify(fs.readdir);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const files = await readdir(dir);
  const images = files.map(fileName => ({
    path: path.join("./uploadedImages", fileName),
    name: fileName
  }));

  res.status(200);
  res.json({ images, count: files.length });
});

router.post("/images/remove", async (req, res) => {
  const { name } = req.body;
  const unlink = util.promisify(fs.unlink);

  try {
    const message = `${name} was deleted`;
    await unlink(`./public/uploadedImages/${name}`);
    console.log(message);
    res.status(200);
    res.json({ status: "OK", message });
  } catch (error) {
    res.status(500);
    res.json({ status: "Error", error });
  }
});

module.exports = router;
