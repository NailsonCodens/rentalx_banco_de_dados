import { Router } from "express";

import { categoryRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const routers = Router();

routers.use("/categories", categoryRoutes);
routers.use("/specifications", specificationsRoutes);

export default routers;
