// importamos Router de express
import { Router } from "express";
// importamos nuestra instancia de Prisma
import { prisma } from "../db.js";

// Creamos Router
const router = Router();

// creamos una ruta /products que nos regrese todas los productos de nuesta DB
router.get('/products', async (req, res) => {
                           // Esto es prisma code
    const products = await prisma.product.findMany()
    // Respondemos con un json(productos)
    res.json(products);
})

// Esta es la ruta para crear un producto
router.post('/products', async (req,res)=>{
    const newProduct = await prisma.product.create({
        data: req.body,
    })
    res.json(newProduct);
})

// Esta es la ruta para buscar solo 1 item de la db
router.get('/products/:id', async (req,res)=>{
    const productFound = await prisma.product.findFirst({
        where:{
            id: parseInt(req.params.id),
        },
        // esto es para enlazarlos
        // include:{
        //     category: true,
        // }
    })
    // Manejamos el error
    if (!productFound)
        return res.status(404).json({error: "Product not found"})

    res.json(productFound);
})

// Esta es la ruta para eliminar un producto (lo mismo que buscar solo 1, pero cambiamos la peticion a .delete)
router.delete('/products/:id', async (req,res)=>{
    const productDeleted = await prisma.product.delete({
        where:{
            id: parseInt(req.params.id),
        }
    })
    if (!productDeleted)
        return res.status(404).json({error: "Product not found"})
    
    res.json(productDeleted);
})

// Esta es la ruta para actualizar un objeto de la DB
router.put('/products/:id', async (req,res)=>{
    const productUpdated =  await prisma.product.update({
        where:{
            id: parseInt(req.params.id),
        },
        data: req.body,
    })
    if (!productUpdated)
        return res.status(404).json({error: "Product not found"})

    return res.json(productUpdated);
})

// Exportamos el router
export default router;