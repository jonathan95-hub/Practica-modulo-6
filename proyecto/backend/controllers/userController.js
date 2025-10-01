const userModel = require("../models/userModels")

const addToFav = async (req, res) => {
    try {
        const{idDonuts} = req.params
        const {userId} = req.body
        if(!userId){
            return res.status(200).send({status: 'Failed', message: "User not found"})
        }
        
        const user = await userModel.findById(userId)
        if (!user) {
      res.status(404).send({ status: 'Failed', message: "User not found" });
    }
        const includes = user.favoritesDonuts.some(f => f.toString() === idDonuts)
        if(includes){
          return  res.status(200).send({status: "Success", message: "The donut is already included in favorites"}) 
        }
        user.favoritesDonuts.push(idDonuts)
        await user.save()
        res.status(200).send({user, status: 'Success', message: 'Donut added in favorites'})
    } catch (error) {
          res.status(500).send({ status: "Failed", error: error.message });
    }
}

const deleteToFav = async (req, res) => {
       try {
        const{idDonuts} = req.params
        const {userId} = req.body
        if(!userId){
            return res.status(200).send({status: 'Success', message: "User not found"})
        }
        const user = await userModel.findById(userId)
        const includes = await user.favoritesDonuts.includes(idDonuts)
        if(!includes){
            res.status(200).send({status: "Success", message: "Donut not found"})
        }
        user.favoritesDonuts = user.favoritesDonuts.filter((id) => id.toString() !== idDonuts)
        user.save()
        res.status(200).send({user, status: 'Success', message: 'Donut deleted in favorites'})
    } catch (error) {
          res.status(500).send({ status: "Failed", error: error.message });
    }
}


module.exports = {addToFav, deleteToFav}