const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//ACTUALIZAR - UPDATE
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            },
            { new: true }
            );
            res.status(200).json(updatedUser);

        } catch (err) {
          res.status(500).json(err);
        }

    } else{
        res.status(401).json("Solo puedes actualizar tu propia cuenta!");
    }
  
});

// ELIMINAR - DELETE

router.delete("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){
       
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("El usuario se ha eliminado");

        } catch (err) {
          res.status(500).json(err);
        }

    } else{
        res.status(401).json("Solo puedes eliminar tu propia cuenta!");
    }
  
});


module.exports = router;