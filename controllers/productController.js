const Product = require('../models/product');

module.exports = {
    index: async (req,res) => {
        
        try {
            const products = await Product.find({state: true});
            res.status(200).json({error: null, data: products})

        } catch (err) {
            res.status(400).json(err)
        }
    },
    search: async (req,res) => {

        try {
            const {nameID} = req.params;

            const products = await Product.find();
            const filter = products.filter(el => {
                if(el.name.toLowerCase().includes(nameID.toLowerCase())) {
                    return el;
                }
            });

            console.log('------ productos encontrados ------');
            res.status(200).json({
                error: null,
                data: filter
            });
            
        } catch (err) {
            res.status(400).json(err)
        }
    },
    create: async (req,res) => {

        try {
            const {name, price, description} = req.body;

            const product = new Product({ 
                name,
                price,
                description,
            });

            const productDB = await product.save(); 

            console.log('------ producto creado ------');
            res.status(200).json({
                error: null,
                data: productDB
            });
    
        } catch (err) {
            res.status(400).json(err)
        }
    },
    update: async (req,res) => {

        try {
            const {id} = req.params;
            const {_id, ...rest} = req.body;
            await Product.findByIdAndUpdate(id, rest); 

            const product = await Product.findById(id); 
            console.log('----- producto actualizado -----');
            res.status(200).json(product); 
            
        } catch (err) {
            res.status(400).json(err);
        }
    },
    remove: async (req,res) => {

        try {
            const {id} = req.params;
            await Product.findByIdAndUpdate(id, {state: false}); // cambio su estado a false

            const product = await Product.findById(id);
            console.log('----- producto eliminado -----');
            res.status(200).json(product);
        } catch (err) {
            res.status(400).json(err);
        }
    }
    
}