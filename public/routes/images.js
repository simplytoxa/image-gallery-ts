const fs = require("fs");
const path = require("path");
const { Router } = require("express");
const router = Router();
const Image = require("../models/Image");

router.post("/images", (req, res) => {
  let imageFile = req.files.imageFile;
  const name = imageFile.name;
  console.log("File name: " + name);

  fs.readdir(`./public/uploadedImages`, (err, files) => {
    if (files && !files.includes(name)) {
      console.log("NAME:::::", name);
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
        res.json({ file: `uploadedImages/${name}` });
      });
    } else {
      console.log(`File ${name} is already included!`);
      res.status(200);
      res.json({
        message: `File ${name} is already included!`,
        alreadyExist: true
      });
    }
  });
});

router.get("/images", (req, res) => {
  console.log("GET");
  const dir = "./public/uploadedImages";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.readdir(dir, (err, files) => {
    const images = files.map(fileName => {
      return {
        path: path.join("./uploadedImages", fileName),
        name: fileName
      };
    });

    res.status(200);
    res.json({ images, count: files.length });
  });
});

router.post("/remove", (req, res) => {
  const { name } = req.body;

  fs.unlink(`./public/uploadedImages/${name}`, err => {
    if (err) throw err;

    const message = `${name} was deleted`;
    console.log(message);
    res.status(200);
    res.json({ status: "OK", message });
  });
});

module.exports = router;
