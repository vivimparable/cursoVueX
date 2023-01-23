export default {
    name:'fullsubject',
    component:()=> import('../views/FullSubject.vue'),
    props:(route)=>{
        return{
            tema:route.params.tema
        }
    }
    
}