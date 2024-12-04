const {Router} = require('express');
const { ProductAdd, ProductGet, ProductUpdate, ProductDelete, ProductExport, ProductImport } = require('../controllers/product.controllers');
const multer = require('multer')
const upload = multer({dest:'uplods/'})
const ProductRouter = Router()

ProductRouter.get('/show',ProductGet)
ProductRouter.get('/export/:id',ProductExport)

ProductRouter.post('/create',ProductAdd)
ProductRouter.post('/import',upload.single('file'),ProductImport)

ProductRouter.patch('/update/:id',ProductUpdate)
ProductRouter.delete('/delete/:id',ProductDelete)

module.exports = ProductRouter