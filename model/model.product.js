module.exports = (sequelize, Sequelize)=>{
    const tbl_product = sequelize.define('tbl_product',{
        product_id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        product_title : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        product_description : {
            type : Sequelize.STRING,
            allowNull : false
        },
        product_imageURL : {
            type : Sequelize.STRING,
            allowNull : true,
        },
        product_price : {
            type : Sequelize.INTEGER,
            allowNull : false
        },
        created_at : {
            type : Sequelize.DATE,
            allowNull : false,
            defaultValue : Sequelize.fn('now')
        },
        updated_at : {
            type : Sequelize.DATE,
            allowNull : false,
            defaultValue : Sequelize.fn('now')
        }
    },{
        timestamps : false
    });
    return tbl_product;
}