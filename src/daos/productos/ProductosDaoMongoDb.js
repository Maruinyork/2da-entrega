import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class ProductosDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('productos', {
            id: { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String},
            thumbnail:{ type: String},
            price: { type: Number, required: true },
        })
    }
}

export default ProductosDaoMongoDb