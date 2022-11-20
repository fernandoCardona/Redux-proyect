import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

//muestra una alerta 
export const mostrarAlerta = ( alerta ) => {
    return ( dispatch ) => {
        dispatch( crearAlerta( alerta ) )
    }
}
const crearAlerta = ( alerta ) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

//oculta una alerta 
export const ocultarAlertaAction = () => {
    return ( dispatch ) => {
        dispatch( ocultarAlerta() );
    }
};
const ocultarAlerta = ( alerta ) => ({
    type: OCULTAR_ALERTA,
    payload: null
})