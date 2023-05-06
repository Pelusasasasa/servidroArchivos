const {Router} = require('express');
const multer = require('multer')
const router = Router();

const { postImage } = require('../controllers/imagen.controllers')

const upload = multer({dest: 'uploads/'});

router.route('/')
    .post(upload.single('image'),postImage)

module.exports = router