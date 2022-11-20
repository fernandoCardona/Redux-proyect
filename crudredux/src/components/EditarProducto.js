import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editarProductoAction } from '../actions/productoAction';


export const EditarProducto = () => {
    //Nuevo state de producto  
    const [ producto, guardarProducto ] = useState({
        id: '',
        nombre: '',
        precio: ''
    });

    const history = useHistory();
    //Usamos usDispatch para devolvernos una funcion
    const dispatch = useDispatch();

    //Acceder al state del producto en el store
    const productoEditar = useSelector( state => state.productos.productoEditar );

    useEffect(() => {
        
            guardarProducto( productoEditar );
         
    }, [productoEditar]);

    //Leer los datos del formulario
    const onChangeFormulario = (e) => {
        e.preventDefault();
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value 
        });
    }
    
       
    const {  nombre, precio, id  } = producto;

    const submitEditarProducto = (e) => {
        e.preventDefault();
        dispatch( editarProductoAction(producto) );
        // redireccionamos al home
        history.push('/');
    } 
   
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>
                        <form onSubmit={ submitEditarProducto }>
                            <div className="form-group">
                                <label>Id del Producto</label>
                                <input 
                                    type="number" 
                                    placeholder="id del Producto"
                                    className="form-control"
                                    name="id"
                                    value={id}
                                    onChange={ onChangeFormulario }
                                />
                            </div>

                            <div className="form-group">
                                <label>Nombre del Producto</label>
                                <input 
                                    type="text" 
                                    placeholder="Nombre del Producto"
                                    className="form-control"
                                    name="nombre"
                                    value={nombre}
                                    onChange={ onChangeFormulario }
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input 
                                    type="number" 
                                    placeholder="Precio del Producto"
                                    className="form-control"
                                    name="precio"
                                    value={precio}
                                    onChange={ onChangeFormulario }
                                />
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
