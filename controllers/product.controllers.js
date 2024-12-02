const productSchema = require("../models/product.Schema");

const ProductAdd = async(req,res)=>{
    try {
        let {name,description,price,quantity,category,supplier} =req.body;
        if(req.user.role == 'supplier'){
            if(!name || !description || !price || !quantity){
                res.status(400).json({success:false,message:'All Filed Required."'})
            }

            let obj = new productSchema({
                name,description,price,quantity,category,supplier:req.user._id
            })

            await obj.save()
            res.status(201).json({success:true,message:"Product Add SuccessFully..",Data:obj})
        }else{
            res.status(400).json({success:false,message:'Unauthorized - No Token Provided And Only Add Supplier.'})
        }
    } catch (error) {
        console.log('Error in ProductAdd Controller :- ',error.message);    
        res.status(500).json({success:false,message:'Internal Error',error:error})
    }
}

const ProductGet = async(req,res) =>{
    try {
        let data = await productSchema.find();
        res.status(201).json({success:true,message:"Product Get..",Product:data})
    } catch (error) {
        console.log('Error in ProductGet Controller :- ',error.message);
        res.status(500).json({success:false,message:'Internal Error',error:error})
    }
}

const ProductUpdate =async(req,res)=>{
    let {id} = req.params;
    let {name,description,price,quantity,category,supplier} =req.body;

    try {
        let Data = await productSchema.findById(id)
        if(!Data){
            res.status(404).json({success:false,message:'Not Data Found...'})
        }

        if(req.user.role == 'supplier'){
            let EditProduct = await productSchema.findByIdAndUpdate(id,{
                name,description,price,quantity,category,supplier:req.user._id
            });
            await EditProduct.save()
            res.status(201).json({success:true,Data:{
                ...EditProduct._doc,
            }})
        }else{
            res.status(400).json({success:false,message:'Unauthorized - No Token Provided And Only Update Product by Supplier.'})
        }

    } catch (error) {
        console.log('Error in ProductUpdate Controller :- ',error.message);
        res.status(500).json({success:false,message:'Internal Error',error:error})
    }
}

const ProductDelete = async(req,res)=>{
    let {id} = req.params
    try {
        let Data = await productSchema.findById(id)
        if(!Data){
            res.status(404).json({success:false,message:'Not Data Found...'})
        }

        if(req.user.role == 'supplier'){
            let deleteProduct = await productSchema.findByIdAndDelete(id);
            res.status(201).json({success:true,message:"Product Delete...",Product:deleteProduct})
        }else{
            res.status(400).json({success:false,message:'Unauthorized - No Token Provided And Only Delete Product by Supplier.'})
        }
    } catch (error) {
        console.log('Error in ProductDelete Controller :- ',error.message);
        res.status(500).json({success:false,message:'Internal Error',error:error})
    }
}

const ProductExport =async(req,res)=>{
    try {
        
    } catch (error) {
        console.log('Error in ProductDelete Controller :- ',error.message);
        res.status(500).json({success:false,message:'Internal Error',error:error})
    }
}

module.exports = {ProductAdd, ProductGet, ProductUpdate,ProductDelete}