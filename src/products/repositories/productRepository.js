const database = require('../../../db');
const Product = require('../dtos/product');

const getProducts = async (req, res) => {
    await database.sync();
    await Product.findAll().then((products) => {
        res.status(200).json(products);
    }).catch((error) => {
        res.status(500).json(error);
    });
}

const getProductById = async (req, res) => {
    await database.sync();
    await Product.findByPk(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(500).json(error);
    })
}

const createProduct = async (req, res) => {
    await database.sync();
    await Product.create({
        name: req.body.name,
        description: req.body.description
    }).then((result) => {
        res.status(201).json(result);
    }).catch((error) => {
        res.status(500).json(error);
    })
}

const updateProduct = async (req, res) => {
    await database.sync();
    await Product.update({
        name: req.body.name,
        description: req.body.description
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(500).json(error);
    })
}

const deleteProduct = async (req, res) => {
    await database.sync();
    await Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        Product.findAll().then((products) => {
            res.status(200).json(products);
        });
    }).catch((error) => {
        res.status(500).json(error);
    })
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}