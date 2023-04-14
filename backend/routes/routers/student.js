require('dotenv').config()
var router = require('express').Router()
const { studentModel } = require('../../_mongoose/models')
const multer = require('multer')
var path = require('path')
const fs = require('fs')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        var dir = process.env.UPLOADS_DIR + '/' + req.body.matricNumber
        fs.mkdirSync(dir, { recursive: true })
        cb(null, dir)
    },
    filename: (req, file, cb) => {
        switch(path.extname(file.originalname)) {
            case '.doc':
            case '.docx':
                cb(null, `project_documentation_${req.body.matricNumber}${path.extname(file.originalname)}`)
                break;
            case '.zip':
            case '.rar':
                cb(null, `project_implementation_${req.body.matricNumber}${path.extname(file.originalname)}`)
        }
    }
})

var upload = multer({ storage })

router.get('/:status?', (req, res) => {
    studentModel.find(req.params.status? { approved: Boolean(parseInt(req.params.status)) } : {},
    (error, document) => {
        if(error) throw error

        if(document) res.json(document)
    })
})

router.post('/upload', upload.array('files', process.env.UPLOAD_MAX), (req, res) => {

    studentModel.create(req.body, (error, document) => {
        try {
            if(error) throw error
        } catch (error) {
            if(error.code == 11000) return res.status(409).send('Student already submitted')
        }
        
        res.send('repo-success')
    })
})

module.exports = router