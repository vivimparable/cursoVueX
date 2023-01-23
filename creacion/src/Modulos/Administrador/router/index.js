import store from '@/store/index'
import AdminContent from '@/Modulos/Administrador/layout/PortafoliosLayout.vue';
import contentSpecificado from '@/Modulos/Administrador/views/CreateNewContent.vue'
 
export default {
    name: 'AdminContent',
    component: AdminContent,
    beforeEnter:(to,from,next)=>{
      const VariableAdmin = store.state.AdminC.logeoAdministrador
        if(VariableAdmin==false){
          console.log('Acceso denegado')
           next({
            name:'NoAccess'
          });
        }else{
          console.log( 'Acceso concedido')
           next();
        }
  
    },children:[
        
      {
          path:':id',
          name:'contentSpecificado',
          component:contentSpecificado,
          props:(route)=>{
              return{
                  id:route.params.id
              }
          }
         
      }
      
  ]
    
   
    

    
}