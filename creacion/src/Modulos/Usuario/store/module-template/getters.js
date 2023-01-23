 export const IdCourse= (state, secondState, thirdState ) => (id) =>{
  
   return thirdState.courses.find(a=>a.id == id)
 }

 export const IdTema= (state, secondState, thirdState ) => (tema)=>{
    
      for(let i = 0; i<=thirdState.courses.length;i++){
        if(thirdState.courses[i].temas.filter(a => a.titulo == tema).length>0){
          console.log(thirdState.courses[i].temas.find(a => a.titulo == tema))
          return thirdState.courses[i].temas.find(a => a.titulo == tema)
        } 
      }
}
  
  

   
   