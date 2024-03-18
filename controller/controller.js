const model =require('../model/model')

const showFile = async (req,res)=>{
    try {
        const allFile=await model.find({}).limit(40);
        res.json({allFile})
    } catch (error) {
        console.log(error)
    }
}
const createFile = async (req,res)=>{
    try {
        const {
            end_year,
            intensity,
            sector,
            topic,
            insight,
            url,
            region,
            start_year,
            impact,
            added,
            published,
            country,
            relevance,
            pestle,
            source,
            title,
            likelihood
        }=req.body
        const newFile=new model({
            end_year,
            intensity,
            sector,
            topic,
            insight,
            url,
            region,
            start_year,
            impact,
            added,
            published,
            country,
            relevance,
            pestle,
            source,
            title,
            likelihood
        })
        await newFile.save()
        res.json({message:"Job created successfully"})
    } catch (error) {
        console.log(error)
    }
}
module.exports={showFile,createFile}