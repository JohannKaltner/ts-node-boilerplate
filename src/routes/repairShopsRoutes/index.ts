import express from "express";
import {
  findAllRepairShops,
  findRepairShopById,
  createRepairShop,
  updateRepairShop,
  deleteRepairShop
} from "../../controllers/repairShopsControllers/";
import { authenticateToken } from "../../middlewares/auth";

const repairShopRouter = express.Router();

repairShopRouter.get("/", authenticateToken, findAllRepairShops);

repairShopRouter.get("/:id", authenticateToken, findRepairShopById);

repairShopRouter.post("/", createRepairShop);

repairShopRouter.put("/:id", updateRepairShop);

repairShopRouter.delete("/:id", deleteRepairShop);

export default repairShopRouter;