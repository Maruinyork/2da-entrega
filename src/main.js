import { productosDao } from './daos/index.js'
import app from './server.js'

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on('error', (error) => console.log(`Error en servidor ${error}`))

//Información hardcodeada para probar que funciona (funciona e intercambia info entre mongo y la memoria)
// await productosDao.agregar({ id:4, title: 'YVES SAINT LAURENT', description: 'EDP Loreal Mon Paris x 90 Ml', price: 250 })
// console.log(await productosDao.listar())
// await productosDao.agregar({ id:3, title: 'Flower By Kenzo', description: 'EDP Kenzo Flower By x 50 ml', price: 200})
// console.log(await productosDao.listar())
// await productosDao.agregar({ id:2, title: 'NINA RICCI', description: 'EDP Nina Ricci By Nina x 50 ml', price: 200})
// console.log(await productosDao.listar())
// await productosDao.agregar({ id:1, title: 'GIVENCHY', description: 'EDP Givenchy x 50 ml', price: 210})
// console.log(await productosDao.listar())

