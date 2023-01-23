<template>
    <div>
        <h1 class="text-center ">Parte de Administrador</h1>
    </div>
    <div class="container-fluid">
    <h4 class="fw-light">Projectos subidos</h4>
    <hr>
        <button class="m-1 m-lg-0 ms-0 m-lg-1 btn btn-outline-success" @click="this.$router.push({name:'contentSpecificado',params:{id:'new'}})
        ">Crear uno nuevo</button>
        <div class="row ">
            <div class="row col-lg-3 main-content">
                <div @click="ContentGet(i.id)" class="mt-2  col-12 button-get-info  "  v-for="i in contenidoPortafolio" :key="i">
                        <p class="p-2">Nombre del projecto:</p>
                        <hr>
                        <h5 class="p-2">{{i.name}}</h5>     
                </div>
            </div>
             <div class=" second-content col-12 col-lg-9  align-items-center">
                    <div class="col-12 ">
                        <router-view  />
                    </div>
             </div>
        </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
 

 export default {
   data(){
    return{
        contenido:[],
         
    }
   },computed:{
    ...mapState(['contenidoPortafolio'])
   },created(){
    console.log(this.contenidoPortafolio)
   },methods:{
       ContentGet(id){
        this.$route.push({name:'contentSpecificado',params:{id:id}})
        this.showContent=true;
       }
    }
}
</script>

<style scoped lang="scss">
.main-content{
    height: calc(90vh - 10rem);
    overflow-y: scroll;
    overflow-x: hidden;
  
}
.second-content{
        height: calc(100vh - 10rem);
}

button{
    width: 100%;
    text-align: center;
   
}
 .button-get-info{
    cursor: pointer;
    background-color: #c8daee;
    border-radius: 0.1rem;
    padding: 0.5rem;
    height: auto;
    &:hover{
        transition: 0.1s;
       background-color: white;
       border: solid 0.1rem #c8daee
    }
 }

</style>