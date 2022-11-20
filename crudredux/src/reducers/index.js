import { combineReducers } from 'redux';
import { alertaReducer } from './alertaReducers';
import { productosReducer }from './productosReducer';
 

export default combineReducers ({

    productos: productosReducer,
    alerta: alertaReducer

});