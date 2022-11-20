import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTOS_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTOS_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types';

import Swal from 'sweetalert2';
//import { useDispatch } from 'react-redux';
import clienteAxios from '../config/axios';





//CREAR NUEVOS PRODUCTOS  
export const crearNuevoProductoAction = ( producto ) => {
    
  return async ( dispatch ) => {
     
    dispatch( agregarProducto() );

    try {
        //inseertar en la base de datos
        await clienteAxios.post( '/productos', producto );
        //si todo sale bien actualiza el state
        dispatch( agregarProductoExito( producto ) );
        //Alerta d success
        Swal.fire(
            'Correcto', 
            'El producto se agregó correctamente',
            'success'
        );
    } catch (error) {
        console.log(error);
        // Si hay un error cambiar el state del
        dispatch( agregarProductoError( true ) );
        //Alerta error
        Swal.fire({
            icon: 'Correcto', 
            title:'Hubo un error',
            text: 'Hubo un error intentalo de nuevo'
        });
    }
  }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});
const agregarProductoExito = ( producto ) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});
const agregarProductoError = ( estado ) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});


//FUNCION DESCARGA PRODUCTOS DE LA BASE DE DATOS 
export const obtenerProductosAction = () => {
    return async ( dispatch ) => {
        dispatch( descargarProductos() );

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch( descargaProductosExitosa( respuesta.data ) )
        } catch (error) {
            dispatch( descargaProductosError() );
        }
    }
};
const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});
const descargaProductosExitosa = ( productos ) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});
const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
}) 


//FUNCION ELIMINA PRODUCTO
export const borrarProductoAction = ( id ) => {
    return async ( dispatch ) =>{
        dispatch( obtenerProductosEliminar (  id ) );

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch( eliminarProductoExito() );
            //Si se elimina
            Swal.fire(
                'Eliminado!',
                'El producto se elimino correctamente.',
                'success'
            )
        } catch (error) {
            dispatch( eliminarProductoError() );
        }
    }
};
const obtenerProductosEliminar = ( id ) => ({
    type: OBTENER_PRODUCTOS_ELIMINAR,
    payload: id
});
const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
});
const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});

//FUNCION EDITAR PRODUCTO
export const obtenerProductoEditar = ( producto ) => {
    return ( dispatch ) => {
        dispatch( obtenerProductoEditarAction( producto ) );
    }
}
const obtenerProductoEditarAction = ( producto ) => ({
    type: OBTENER_PRODUCTOS_EDITAR,
    payload: producto
});
export const editarProductoAction = ( producto ) => {
    return async( dispatch ) => {
        dispatch( editarProducto() );
        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);
             
            dispatch( editarProductoExito( producto ) );
        } catch (error) {
             
        }
    }
}
const editarProducto = ( producto ) => ({
    type: COMENZAR_EDICION_PRODUCTO
});
const editarProductoExito = ( producto ) => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
});
const editarProductoError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
});