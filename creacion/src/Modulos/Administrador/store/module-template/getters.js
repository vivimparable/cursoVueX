export const entryfullentryID = (state, rootState, thirdState ) => (id) =>{
    

    return   thirdState.contenidoPortafolio.find(a => a.id==id)

 } 
 