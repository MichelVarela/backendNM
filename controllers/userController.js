const User = require('../models/user');

module.exports = {
    index: async (req,res) => {

        try {
            const users = await User.find({state: true}); // buscamos todos los users que se encuentran en el model User con su state en true
            res.status(200).json({data: users});

        } catch (err) {
            res.status(400).json(err)
        }
        
    },
    create: async (req,res) => {

        try {

            const {name, email, password} = req.body;

            const user = new User({ // creamos un new User con los datos que vienen por req.body
                name,
                email,
                password
            });

            const userDB = await user.save(); // guardamos el new User creado

            console.log('------ usuario creado ------');
            res.status(200).json({
                error: null,
                data: userDB
            });
    
        } catch (err) {
            res.status(400).json(err)
        }
    },
    update: async (req,res) => {
        
        try {
            const {id} = req.params;
            const {_id, ...rest} = req.body; // excepto el id, toda la info que ingresemos por rest parameter se actualizara
            await User.findByIdAndUpdate(id, rest); // buscamos el user mediante el id que ingresamos por params

            const user = await User.findById(id); // busco el user update
            console.log('----- usuario actualizado -----');
            res.status(200).json(user); // muestro el user update
            
        } catch (err) {
            res.status(400).json(err);
        }
    },
    remove: async (req,res) => {

        try {
            const {id} = req.params;
            await User.findByIdAndUpdate(id, {state: false}); // cambio su estado a false

            const user = await User.findById(id);
            console.log('----- usuario eliminado -----');
            res.status(200).json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    }
}