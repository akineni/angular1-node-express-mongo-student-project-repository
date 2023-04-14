var router = require('express').Router()
const { studentModel } = require('../../_mongoose/models')
const fs = require('fs')
var async = require('async')

router.put('/approve/:status', (req, res) => {

    if(req.params.status == 0) {
        async.waterfall([
            cb => {
                studentModel.deleteOne(req.body, error => { cb(error) })
            },
            cb => {
                fs.rmdir(`projects/${req.body.matricNumber}`, { recursive: true }, error => { cb(error) })
            }
        ], error => { 
            if (error) throw error
    
            res.send('repo-success')
         })
        
    }else{
        studentModel.updateOne(req.body, 
            { $set: {approved: req.params.status} }, (error, document) => {
            if(error) throw error
            
            res.send('repo-success')
        })
    }

    
})

module.exports = router