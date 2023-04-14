require('../../_mongoose/connection')
var router = require('express').Router()
const fs = require('fs')

router.get('/download/:matric_number/:file', (req, res) => {
    var dir = `projects/${req.params.matric_number}/`
    fs.readdir(dir, (error, files) => {
        if (error) throw error

        res.download(dir + '/' + files.filter(f => f.includes(req.params.file)).pop())
    })
    
})

module.exports = router