import React from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

//REDUX
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoAction';

    
export const Producto = ( { producto } ) => {
    const { nombre, precio, id} = producto;

    const dispatch = useDispatch();
    const history = useHistory(); //habilitar history para redireccion.
 
    //Confirmar Eliminar Product
    const confirmarEliminarProducto = ( id ) => {
        //Preguntar al usuario 
        Swal.fire({

                title: '¿Estas seguro?',
                text: "Un producto eliminado no se puede reuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminar!',
                cancelButtonText: 'Cancelar'

            }).then((result) => {
                if (result.isConfirmed) {
                    //Pasarlo al Action con dispatch y mandar ejecutar la funcion "borrarProductoAction"
                    dispatch ( borrarProductoAction( id ) );

                }
            })     
    }

    // Funcion que redirige de forma programada
    const redireccionarEdicion = ( producto ) => {
        dispatch( obtenerProductoEditar( producto ) );
        history.push(`productos/editar/${producto.id}`);
    }




    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>
                <span className="font-weigth-bold">{precio}€</span>
            </td>
            <td className="acciones">
                <button type="button" onClick={ () => redireccionarEdicion( producto ) } className="btn btn-primary mr-2">
                    Editar
                </button>
                <button 
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto( id ) }
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
