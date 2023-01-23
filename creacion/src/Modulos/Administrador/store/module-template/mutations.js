 
 export const setlogeoAdministrador = (state, NewBoolean ) =>{
      state.logeoAdministrador = NewBoolean;
       
 }

 export const addentry=(state,rootState,thirdstate)=> (playload)=>{
    thirdstate.contenidoPortafolio.push(playload)
 }


 export const  deleteEntry =(state,rootState,thirdstate) => (playload)=>{
   thirdstate.contenidoPortafolio = thirdstate.contenidoPortafolio.filter( e => e.id != playload)
 }



 export const updateEntry =(state,rootState,thirdstate) => (playload)=>{
   const indice= thirdstate.contenidoPortafolio.map(e=> e.id).indexOf(playload.id)
   thirdstate.contenidoPortafolio[indice]=playload
 }