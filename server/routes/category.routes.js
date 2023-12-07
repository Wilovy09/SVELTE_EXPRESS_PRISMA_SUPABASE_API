// Importamos express
import { Router } from "express";
// importamos nuesta instancia de Prisma
import { prisma } from "../db.js";

// Creamos el router
const router = Router();

router.get('/category', async(req, res) => {
    const categories = await prisma.category.findMany({
        include: {
            products: true,
        }
    })
    res.json(categories);
})

// Exportamos el router
export default router;