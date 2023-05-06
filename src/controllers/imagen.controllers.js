const imagenCTRL = {};
const sharp = require('sharp')

imagenCTRL.postImage = async(req,res)=>{
    const {path,originalname} = req.file;
    console.log(path)
    sharp(path)
        .resize(500)
        .toFile(`public/images/${originalname}`,(err,info)=>{
        if (err) {
            console.error(err);
            res.status(500).send(err.message);
        }else{
            console.log(info);
            res.json({ success: true });
        }
    })
};

module.exports = imagenCTRL;