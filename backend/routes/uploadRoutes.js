import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    console.log(file)
    cb(null, 'upload/')
  },
  filename(req, file, cb) {
    console.log(file)
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  },
})

function checkFileType(file, cb) {
  console.log(file)
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)
  console.log(file)
  if (extname && mimetype) {
    console.log(file)
    return cb(null, true)
  } else {
    console.log(file)
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    console.log(file)
    checkFileType(file, cb)
  },
})

router.post('/', upload.array('imgCollection', 6), (req, res) => {
  console.log('req', req)
  const reqFiles = [];
  const url = req.protocol + '://' + req.get('host')
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + '/upload/' + req.files[i].filename)
  }
  console.log()
  res.send(reqFiles)
})

export default router
