const express=require('express')
const router=express.Router()
const controller=require('../controller/controller')

router.get("/showALLFile",controller.showFile)
router.post('/createFile',controller.createFile)

module.exports=router