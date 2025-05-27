import { create } from "zustand";

export const useProductoStore = create((set) => ({
  productos: [],
  setProductos: (productos) => set({ productos }),
  createProducto: async (nuevoProducto) => {
    if (!nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.imagen) {
      return { success: false, message: "Todos los campos son obligatorios" };
    }
    const res = await fetch("/api/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoProducto),
    });
    const data = await res.json();
    set((state) => ({ productos: [...state.productos, data.data] 
    
    }));
    return {
      success: true,
      message: "Producto creado exitosamente",
    };
  },
}));
