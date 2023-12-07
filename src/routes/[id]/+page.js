// params hace referencia a los parámetros de la ruta (id)
export function load({ params }){
    return {
        id: params.id,
    }
}