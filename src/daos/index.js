import { TIPO_PERSISTENCIA } from '../config.js'
import mongoose from 'mongoose'


// mongoose.connect('mongodb://localhost/ecommerce', {
//   serverSelectionTimeoutMS: 5000,
// })
console.log('🆗 Conectados a MongoDB')

let productosDao
let carritosDao

switch (TIPO_PERSISTENCIA) {
  case 'mongodb':
    const { default: ProductosDaoMongoDb } = await import('./productos/ProductosDaoMongoDb.js')
    const { default: CarritosDaoMongoDb } = await import('./carritos/CarritosDaoMongoDb.js')
   
    productosDao = new ProductosDaoMongoDb()
    carritosDao = new CarritosDaoMongoDb()
    break

  case 'firebase':
      const { default: ProductosDaoFirebase } = await import('./productos/ProductosDaoFirebase.js')
      const { default: CarritosDaoFirebase } = await import('./carritos/CarritosDaoFirebase.js')
      productosDao = new ProductosDaoFirebase()
      carritosDao = new CarritosDaoFirebase()
    break

    case 'json':
    const { default: ProductosDaoArchivo } = await import('./productos/ProductosDaoArchivo.js')
    const productosArchivo = new ProductosDaoArchivo('productos', './productos.json')
    await productosArchivo.inicializar()
    productosDao = productosArchivo
    

    const { default: CarritosDaoArchivo } = await import('./carritos/CarritosDaoArchivo.js')
    carritosDao = new CarritosDaoArchivo()
    break
  
    default:
    const { default: ProductosDaoMem } = await import('./productos/ProductosDaoMem.js')
    productosDao = new ProductosDaoMem('productos')
    const { default: CarritosDaoMem } = await import('./carritos/CarritosDaoMem.js')
    carritosDao = new CarritosDaoMem()
}

export {productosDao, carritosDao}
