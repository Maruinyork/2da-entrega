import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js"

class CarritosDaoArchivo extends ContenedorArchivo {

    constructor(rutaDir) {
        super(`${rutaDir}/carritos.json`)
    }
    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }

    async getAllProductsFromCart(id) {
        try {
            return await super.findById(id).populate('productos').select({products: 1, _id:0});
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async saveProductToCart(id, obj) {
        try {
            const cart = await super.findById(id)
            cart.products.push(obj.productId);
            cart.save();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteProductFromCart(id, productId) {
        try {
            const cart = await super.findById(id);
            cart.products.remove(productId);
            cart.save();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

export default CarritosDaoArchivo