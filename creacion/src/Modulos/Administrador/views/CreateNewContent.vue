<template>


    <div v-if="this.id!='new'" class="m-4">
        <div v-if="this.ActuMSG" class="w-75 m-auto mb-3 alert alert-success" role="alert">
            <p>{{ActuMSG}}</p>
        </div>
        <div class="d-flex justify-content-lg-end justify-content-between  ">
            <button class="btn btn-danger p-1" @click="Delete">Eliminar entrada</button>
            <button @click="Actualizar" class="btn btn-warning ms-2 p-1">Guardar entrada</button>
        </div>

        <br>
        <input v-model="getter.name"  type="text"  > 
        <textarea v-model="getter.descripcion" class=""   > 
        </textarea>
        <input v-model="getter.git" class="mt-1" type="text"  >
        <br>
         <div class="mb-3">
            <label for="formFile" class="form-label">Escoge una imagen. 
                <a v-if="this.getter.img" :href="this.getter.img">Imagen</a>
                <p v-else>No hay imagen</p>
            </label>
            <input @change="onSelectImage" class="form-control" type="file" id="formFile">
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Escoge un video: </label>
            <input @change="onSelectVideo" class="form-control" type="file" id="formFile">
        </div>
        <div>
            
        </div>
    </div>


    <div v-else class="m-4">
        <input placeholder="Nombre del repositorio"  type="text" v-model="Name" >

        <textarea placeholder="Descripcion del repositorio" class="mt-1"  v-model="Descripcion"   > 
        </textarea>
        <input placeholder="Url al repositorio" class="mt-1" type="text" v-model="GitHub"  >
        <div class="mb-3">
            <label for="formFile" class="form-label">Escoge una imagen:</label>
            <input @change="onSelectImage" class="form-control" type="file" id="formFile">
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Escoge un video: </label>
            <input @change="onSelectVideo" class="form-control" type="file" id="formFile">
        </div>
        <br>
            <button @click="nuevaEntrada" class="btn btn-success w-100 mt-3"> 
                <Icon  />
            </button>
    </div>
</template>
<script>
import Icon from '@/Modulos/Administrador/components/buttonFab.vue'
import { mapActions, mapGetters } from 'vuex'
import uploadImage from '../helpers/uploadImage'
import uploadVideo from '../helpers/uploadVideo'

export default {
    components:{
        Icon
    },
    data(){
        return{
            GitHub:'',
            Descripcion:'',
            Name:'',
            ActuMSG:'',
            imagen:null,
            video:null
        }
    },
    props:{
        id:{
            required:true,
            type:String
            
        }
    },computed:{
        ...mapGetters('AdminC',['entryfullentryID']),
        
        getter(){ 
            return this.entryfullentryID(this.id)
        }
    },methods:{
        ...mapActions('AdminC',['AñadirEntrada','QuitarEntrada','Editarentrada']),
        ...mapActions(['getEntredasFireBase']),

        async nuevaEntrada(){

           const picture =  await uploadImage(this.imagen)
           const vid =  await uploadVideo(this.video)
           

           const entrada={
            git:this.GitHub,
            name:this.Name,
            descripcion:this.Descripcion,
            img:picture,
            video:vid
            }

            const id = await this.AñadirEntrada(entrada)

            this.$router.push({name:'contentSpecificado',params:{id:id}})
            
            this.GitHub="";
            this.Name="";
            this.Descripcion="";

        },async Actualizar(){

           const picture =  await uploadImage(this.imagen)
           
           const vid =  await uploadVideo(this.video)

            const entrada={

            id:this.id,
            git:this.getter.git,
            name:this.getter.name,
            descripcion:this.getter.descripcion,
            img: picture ? picture : this.getter.img,
            video:vid ? vid : this.getter.video

            }
            await this.Editarentrada(entrada)
            this.getEntredasFireBase()
            this.ActuMSG="Se ha actualizado";

            setTimeout(() => {
                this.ActuMSG="";
            }, 3000);
            
            

        },async Delete(){

            await this.QuitarEntrada(this.id);

            const id='new';
            this.$router.push({name:'contentSpecificado',params:{id:id}});
        }, onSelectImage(event){

            const fileTarget = event.target.files[0]
            if(!fileTarget ){
                return;
            }
            const fr = new FileReader()
            fr.onload =()=> this.imagen = fr.result
            fr.readAsDataURL( fileTarget )


        },onSelectVideo(event){
            const fileTarget = event.target.files[0]
            if(!fileTarget){
                return;
            }
            const fr = new FileReader()
            fr.onload =()=> this.video = fr.result
            fr.readAsDataURL( fileTarget )


        }
    },watch:{
        id(){
            this.getEntredasFireBase();
        }
    }
}
</script>

<style scoped>
textarea{
    
   width: 100%;
   height: 28vh;

}

</style>