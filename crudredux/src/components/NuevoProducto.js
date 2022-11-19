import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoAction';

export const NuevoProducto = ( { history } ) => {
    //CREAMOS EL state del formulario nuevo producto
    const [ nombre, guardarNombre ] = useState('');
    const [ precio, guardarPrecio ] = useState(0);
    const [ id, guardarId ] = useState('');

    //Usamos usDispatch para devolvernos una funcion
    const dispatch = useDispatch();

    //acceder al state del store 
    const cargando = useSelector( state => state.productos.loading );
    const error = useSelector( state => state.productos.error );

     
    //Atraves de dispatch llamamos a la funcion de action 
    const agregarProducto = ( producto ) => {
        dispatch( crearNuevoProductoAction( producto ) );
    };

    //cuando el usuario hace Submit
    const handleNuevoProducto = (e) => {
        e.preventDefault();
        //Validar Formulario 
            if ( nombre.trim() === '' || precio <= 0 ) {
                return;
            }
        //Si no hay errores

        //crear nuevo producto 
        agregarProducto({
            id,
            nombre,
            precio
        });

        //redireccionamos al componente principal 
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>
                        <form onSubmit={ handleNuevoProducto }>
                            <div className="form-group">
                                <label>Id del Producto</label>
                                <input 
                                    type="number" 
                                    placeholder="id del Producto"
                                    className="form-control"
                                    name="id"
                                    value={ id }
                                    onChange={ e => guardarId( e.target.value ) }
                                />
                            </div>
                            <div className="form-group">
                                <label>Nombre del Producto</label>
                                <input 
                                    type="text" 
                                    placeholder="Nombre del Producto"
                                    className="form-control"
                                    name="nombre"
                                    value={ nombre }
                                    onChange={ e => guardarNombre( e.target.value ) }
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input 
                                    type="number" 
                                    placeholder="Precio del Producto"
                                    className="form-control"
                                    name="precio"
                                    value={ precio }
                                    onChange={ e => guardarPrecio( Number(e.target.value) ) }
                                />
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Agregar
                            </button>
                        </form>
                        {
                            cargando ? <p>Cargando...</p> : null
                        }
                        {
                            error 
                                ? 
                                <p 
                                    className="alert alert-danger p2 mt-4 text-center">
                                    Ha Habido un error
                                </p> 
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
