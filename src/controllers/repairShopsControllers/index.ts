import repairShop from '../../models/repairShopsModels'

const findAllRepairShops = function (req, res) {
  repairShop.findAll(function (err, oficina) {
    console.log("arieved");
    if (err) res.send(err);
    console.log("res", oficina);
    res.send(oficina);
  });
}

const findRepairShopById = function (req, res) {
  repairShop.findById(req.params.id, function (err, oficina) {
    if (err) res.send(err);
    res.send(oficina);
  });
};

const createRepairShop = function (req, res) {
  const currentRepairShop = new repairShop(req.body);

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Provide all mandatory fields.",
    });
  } else {
    repairShop.create(currentRepairShop, function (err, oficina) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Successfully submitted!!",
        data: oficina,
      });
    });
  }
};

export default {
  findAllRepairShops,
  findRepairShopById,
  createRepairShop
}