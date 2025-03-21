import { Router } from "express";
import V1_router from "./v1/api_v1";

const router = Router();

router.use("/v1", V1_router)

export default router;