const fs = require('fs');
const util = require('util');
const path = require('path');
const { Router } = require('express');
const router = Router();
const Image = require('../models/Image');

/**
 * Upload
 */
router.post('/images', async (req, res) => {
    const readdir = util.promisify(fs.readdir);
    const imageFile = req.files.imageFile;
    const name = imageFile.name;

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
router.get('/images', async (req, res) => {
    const dir = './public/uploadedImages';
    const readdir = util.promisify(fs.readdir);

    // create directory if it isn't exist
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    // const files = await readdir(dir);
    // const images = files.map(fileName => ({
    //     path: path.join('./uploadedImages', fileName),
    //     name: fileName
    // }));

    const images = await Image.find();
    res.status(200);
    res.json({ images, count: images.length });
});

/**
 * Remove an image
 */
router.post('/images/:imgId/remove', async (req, res) => {
    try {
        const imgId = req.params.imgId;
        const { name } = req.body;
        const unlink = util.promisify(fs.unlink);
        const message = `${name} with id ${imgId} was deleted`;

        await unlink(`./public/uploadedImages/${name}`);
        await Image.findByIdAndRemove(imgId);

        res.status(200);
        res.json({ status: 'OK', message });
    } catch (error) {
        res.status(500);
        res.json({ status: 'Error', error });
    }
});

module.exports = router;
