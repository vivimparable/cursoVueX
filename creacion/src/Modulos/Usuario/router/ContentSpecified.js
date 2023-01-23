export default {
    name:'cursoEspecificado',
    component:()=> import('../views/ContentSpecified.vue'),
    props:(route)=>{
        return{
            id:route.params.id
        }
    }
    
}