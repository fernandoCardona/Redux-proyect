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


//Cada Reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
    pruductoEliminar: null,
    pruductoEditar: null 
}

export const productosReducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        //AGREGAR NUEVOS PRODUCTOS 
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [ ...state.productos, action.payload ] 
            }      
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload    
            }
        //DESCARGA PRODUCTOS
        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: action.payload,
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload                
            }
        case DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload    
            }
        //ELIMINA PRODUCTO
        case OBTENER_PRODUCTOS_ELIMINAR:
            return {
                ...state,
                loading: false,
                pruductoEliminar: action.payload    
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                productos: state.productos.filter(
                    producto => producto.id !== state.pruductoEliminar
                ),
                pruductoliminar: null   
            }
        case PRODUCTO_ELIMINADO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload    
            }
        //EDITAR PRODUCTO
        case OBTENER_PRODUCTOS_EDITAR:
            return {
                ...state,
                loading: false,
                productoEditar: action.payload    
            }

        case PRODUCTO_EDITADO_EXITO:
                return {
                    ...state,
                    pruductoEditar: null,
                    productos: state.productos.map(
                    producto => producto.id === action.payload.id
                    ? producto = action.payload
                    : producto
                  ),
                   
            }
        case PRODUCTO_EDITADO_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.payload    
             }

        default:
            return state;
    }
}
