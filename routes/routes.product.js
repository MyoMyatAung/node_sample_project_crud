module.exports = (app)=>{
    const productController = require('../controller/controller.product');

    //Get All Products
    app.get('/product/get_all_products',productController.getAllProduct);

    //Get Selected Product
    app.get('/product/get_product/:id',productController.getSelectProduct);

    //Create Product
    app.post('/product/add_product',productController.addProduct);

    //Update Product
    app.put('/product/update_product/:id',productController.updateProduct);

    //Delete Product
    app.delete('/product/delete_product/:id',productController.deleteProduct);
}