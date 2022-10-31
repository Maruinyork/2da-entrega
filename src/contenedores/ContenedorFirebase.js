import admin from 'firebase-admin'
import config from '../config.js'


admin.initializeApp({
    credential: admin.credential.cert(config.firebase.path)
});
console.log('Base Firebase conectada!')


const db = admin.firestore()
const productos = db.collection('productos')
let producto= '';

//*******Este modo de agregar los productos es precario, pero funciona ********/
//Agregar el producto
// producto = await productos.add({ title: 'Cherry', description: 'EDT cher parfum 50ml',price: 100, thumbnail: 'url' });
// console.log('producto insertado')

//Listar los productos
const snapshot = await productos.get();
snapshot.forEach(doc => {
    console.log({ id: doc.id, ...doc.data() })
})

//Modificar el producto 
await productos.doc(producto.id).update({ title: 'Olympia' });
console.log("El producto ha sido actualizado");


//Eliminar el producto seleccionado
await productos.doc(producto.id).delete();
console.log("El producto ha sido borrado exitosamente");

//****************************************************************/
// class ContenedorFirebase {
//     constructor(nombreColeccion) {
//                 this.query = db.collection(nombreColeccion);
//     }

//     async listar(id) {
//         try {
//             if (id) {
//                 const data = this.query.doc(id)
//                 const element = await data.get()
                
//                 if (element.data().title) {
//                     return {
//                         title: element.data().title,
//                         price: element.data().price,
//                         thumbnail: element.data().thumbnail,
//                         description: element.data().description,
//                         stock: element.data().stock,
//                         timestamp: element.data().timestamp,
//                         id: element.id
//                     }

//                 }
//             }else{
//                 const data = await this.query.get()
//                 const elements = data.docs

//                 return elements.map((doc) => (doc.data()))

//             }

//         } catch (error) {
//             return error
//         }
// 	    }

        
//         async actualizar(id, nuevoElem) {

//             Object.keys(nuevoElem).forEach( (e) => {
//                 if (nuevoElem[e] === undefined) {
//                     element[e] = null;
//                 }
//             })
    
//             try {
//                 const doc = this.query.doc(id)
//                 await doc.update(nuevoElem)
                
//             } catch (error) {
//                 console.log(error)
//             }
            
//         }

//     async listarAll() {

//     }

//     async guardar(nuevoElem) {

//     }


//     async borrar(id) {
//         const element = this.query.doc(id)
//         return element.delete()
// 	}

//     async borrarAll() {
//         try {
//             const docs = await this.listarAll()
//             const ids = docs.map(d => d.id)
//             const promesas = ids.map(id => this.borrar(id))
//             const resultados = await Promise.allSettled(promesas)
//             const errores = resultados.filter(r => r.status == 'rejected')
//             if (errores.length > 0) {
//                 throw new Error('no se borró todo. volver a intentarlo')
//             }
//         } catch (error) {
//             throw new Error(`Error al borrar: ${error}`)
//         }
//     }

//     async desconectar() {
//     }

//     async add(element) {
//             let id= '1'
//             const doc= query.doc(`${id}`)
//             await doc.create({
//                 title: 'Calvin Klein',
//                 description: 'EDT parfum 50ml',
//                 price: 100,
//                 thumbnail: 'url'
//             })
//         } catch(error){
//             console.log(error)
//         }
// }

// export default ContenedorFirebase