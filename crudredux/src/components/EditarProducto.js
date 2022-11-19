import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const EditarProducto = () => {
    //Usamos usDispatch para devolvernos una funcion
    const dispatch = useDispatch();

    //Acceder al state del producto en el store
    const producto = useSelector( state => state.productos.pruductoEditar );
    if(!producto) return null
    const { nombre, precio, id } = producto;

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>
                        <form action="">
                            <div className="form-group">
                                <label>Id del Producto</label>
                                <input 
                                    type="number" 
                                    placeholder="id del Producto"
                                    className="form-control"
                                    name="id"
                                    value={ id }
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
