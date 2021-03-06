import repairShop from '../../models/repairShopsModels'

const findAllRepairShops = function (req, res) {
  const page = req.query.page || undefined;
  const limit = req.query.limit || undefined;

  repairShop.findAll(page, limit, function (err, repairShop) {
    console.log("arieved");
    if (err) res.send(err);
    console.log("res", repairShop);
    res.send(repairShop);
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
    res.status(406).send({
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

const updateRepairShop = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(406).send({
      error: true,
      message: "Provide all mandatory fields.",
    });
  } else {
    repairShop.update(
      req.params.id,
      new repairShop(req.body),
      function (err, oficina) {
        if (err) res.send(err);
        res.json({ error: false, status: 200, message: "Successfully updated!!" });
      }
    );
  }
};

const deleteRepairShop = function (req, res) {
  repairShop.delete(req.params.id, function (err, oficina) {
    if (err) res.status(500).send({
      error: true,
      message: "Bad Request.",
    });
    res.json({ error: false, status: 200, message: "Successfully Removed." });
  });
};

export {
  findAllRepairShops,
  findRepairShopById,
  createRepairShop,
  updateRepairShop,
  deleteRepairShop
}