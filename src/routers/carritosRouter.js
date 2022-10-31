import { Router } from 'express';
import {carritosDao}  from '../daos/index.js'

const carritosRouter = Router()

carritosRouter.get('/', async (req, res) => {
    const productos = await carritosDao.listar()
    res.json(productos)
})

carritosRouter.get('/:id', async (req, res) => {
    const productos = await carritosDao.listarById(req.params.id);
    res.json(productos)
})

carritosRouter.post('/', async (req, res) => {
    const prodAgregado = await carritosDao.agregar(req.body); //Asi agrega en mongoose y en postman
    res.json(prodAgregado)
})

carritosRouter.put('/:id', async (req, res) => {
    const prodActualizado = await carritosDao.actualizar(req.body);
    res.json(prodActualizado)
})

carritosRouter.delete('/:id', async (req, res) => {
    const prodEliminado = await carritosDao.borrar(req.params.id);
    res.json(prodEliminado)
})

export { carritosRouter }