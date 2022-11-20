import React, { Fragment, useEffect } from 'react';
import { obtenerProductosAction } from '../actions/productoAction';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { Producto } from './Producto';

export const Productos = () => {
    //Usamos usDispatch para devolvernos una funcion
    const dispatch = useDispatch();

    useEffect(() => {
        //consultar la API
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();

    }, [dispatch]);
    
    //Obtener el state 
    const productos = useSelector( state => state.productos.productos );
    const error = useSelector( state => state.productos.error );
    const cargando = useSelector( state => state.productos.loading );

    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>
            {
               error 
               ? <p className="font-weight-bold alert alert-danger text-center mt-4">
                    Hubo un error
               </p>
               :null
            }
            {
                cargando
                ? <p className="text-center mt-4">
                Cargando...
                </p>
                : null
            }

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                    productos.length === 0
                    ? 'No hay productos' 
                    : (
                        productos.map(( 
                            producto => <Producto key={producto.id} producto={producto}/> 
                        )) 
                    )
                }
                </tbody>
            </table>
        </Fragment>
    )
} 
