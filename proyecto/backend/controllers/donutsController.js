const donutsModel = require("../models/donutsModels");

const createDonuts = async (req, res) => {
  try {
    console.log("REQ.BODY:", req.body)
    const donut = req.body;
    const createDonut = await donutsModel.create(donut);
    res
      .status(200)
      .send({ createDonut, status: "Success", message: "Create Donut" });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const getDonuts = async (req, res) => {
  try {
    const allDonuts = await donutsModel.aggregate([
      {
        $project: {
          name: 1,
          type: 1,
          price: 1,
          image: 1,
          likes: {
            $size: { $ifNull: [ "$likes", []]}},
        },
      },
    ]);
    if (allDonuts.length === 0) {
     return res
        .status(200)
        .send({ status: "Success", message: "No donuts available" });
    }
    res.status(200).send({
         allDonuts, 
        status: "Success",
        message: 'all donuts available'});
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

 const editDonuts = async (req, res) => {
    try {
    const idDonuts = req.params.idDonuts
    const newDonut = req.body
    const edit = await donutsModel.findByIdAndUpdate(idDonuts, newDonut, {new: true})
    if(!idDonuts || !newDonut){
        return res.status()
    }
    res.status(200).send({status: 'Success', message: 'Donut update', edit})
    } catch (error) {
        
    }
 
 }
 

 const deleteDonuts  = async (req, res) => {
    try {
          const idDonuts = req.params.idDonuts
        const donut = await donutsModel.findByIdAndDelete(idDonuts)
    if(!donut){
        return res.status(200).send({status: 'Failed', message: 'Donut not found'})
    }
    res.status(200).send({status: 'Success', message: 'The donuts been successfully deleted'})
    } catch (error) {
         res.status(500).send({ status: "Failed", error: error.message });
    }
  
 }
module.exports = { createDonuts, getDonuts,  editDonuts, deleteDonuts };
