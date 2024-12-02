const joi = require('joi')
const productSchema = joi.object({
    name:joi.string().required(),
    description:joi.string().required(),
    price:joi.number().required(),
    quantity:joi.number().required(),
    category:joi.string().required(),
})

function validateProductData(data){
    return productSchema.validate(data);
}

module.exports = validateProductData