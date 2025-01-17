const ClothModel = require("../models/chlothesModel");


const GetAllData = async (req, res) => {
    try {
        const data = await ClothModel.find({});
        console.log("data",data);
        res.status(200).json({data:data,message:"Succes"})
    } catch (error) {
        res.status(404).json({message:"Not Found"})
    }
}
const GetDataById = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await ClothModel.findById(id);
        res.status(200).json({data:data,message:"Succes"})
    } catch (error) {
        res.status(404).json({message:"Not Found"})
    }
}
const DeleteDataById = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await ClothModel.findByIdAndDelete(id);
        res.status(200).json({data:data,message:"Sucesfully deleted"})
    } catch (error) {
        res.status(404).json({message:"Not Found"})
    }
  
}
const AddData = async (req, res) => {

    try {
        const data = ClothModel({...req.body});
        await data.save();
        res.status(201).json({data:data,message:"Succesfully Added"})
    } catch (error) {
        res.status(400).json({message:"Bad Request"})
    }
  
}

module.exports = {
    GetAllData,
    AddData,
    GetDataById,
    DeleteDataById,
}