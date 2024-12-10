const productSchema = require("../models/product.Schema");

const checkStock = (req,res)=>{
    try {
        setTimeout(async() => {
            let data = await productSchema.find();
           let lowdata=data.filter(item => item.quantity < 60 );
        if(lowdata.length > 0){
            console.log('Low Stock....');
            lowdata.forEach(i=>{
                console.log(`${i.name} (ID: ${i._id} is below the threshold! Remaing: ${i.quantity})`)
            })
        }
        }, 100);
    } catch (error) {
        console.log('Error in checkStock utils :- ',error.message);
    }
}

module.exports = checkStock