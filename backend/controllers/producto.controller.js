import Producto from "../models/producto.model.js";

export const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find({});
        res.status(200).json({ success: true, data: productos });
    } catch (error) {
        console.error("Error al obtener los productos:", error.message);
        res.status(500).json({ success: false, message: "Error del servidor" });
    }
};

export const createProducto = async (req, res) => {
    const producto = req.body;

    if (!producto.nombre || !producto.precio || !producto.imagen) {
        return res.status(400).json({ success: false, message: "Por Favor provea todos los campos" });
    }

    const nuevoProducto = new Producto (producto);

    try {
        await nuevoProducto.save();
        res.status(201).json({ success: true, data: nuevoProducto });
    } catch (error) {
        console.error("Error al crear el producto:", error.message);
        res.status(500).json({ success: false, message: "Error del servidor" });
    }
};

export const updateProducto = async (req, res) => {
    const { id } = req.params;
    const producto = req.body;
 
    if(!mongoose.Types.ObjectId.isValid(id)) {
         return res.status(404).json({ success: false, message: "Id de Producto Invalido" }); 
    }
 
    try {
        const actualizadoProducto= await Producto.findByIdAndUpdate(id, producto, {new: true});
        res.status(200).json({ success: true, data: actualizadoProducto });
     } catch (error) {
         res.status(500).json({ success: false, message: "Error del servidor" });    
     }
};


export const deleteProducto = async (req, res) => {
    const { id } = req.params;

    try {
        await Producto.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Producto eliminado" });
    } catch (error) {
        console.error("Error al eliminar el producto:", error.message);
        res.status(404).json({ success: false, message: "Producto no encontrado" });
    }
};