import express from "express";
import {
  findAllRepairShops,
  findRepairShopById,
  createRepairShop,
  updateRepairShop,
  deleteRepairShop
} from "../../controllers/repairShopsControllers/";

const repairShopRouter = express.Router();

repairShopRouter.get("/listarTodos", findAllRepairShops);

repairShopRouter.get("/:id", findRepairShopById);

repairShopRouter.post("/", createRepairShop);

repairShopRouter.put("/:id", updateRepairShop);

repairShopRouter.delete("/:id", deleteRepairShop);

export default repairShopRouter;