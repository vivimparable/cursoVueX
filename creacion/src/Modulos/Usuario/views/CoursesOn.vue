<template>
  <main class="container">

        <form action="" class="row">
            <div class="col">
                <label for="">From easy to hard level</label>
                <input v-model="Dificult" type="checkbox">
            </div>

            <div class="col">
                <label for="">Graphic design</label>
                <input v-model="Graphyc" type="checkbox">
            </div>


            <div class="col">
                <label for="">Programming</label>
                <input v-model="Programming" type="checkbox">
            </div>
        </form>
    
<div class="row">
    <div class="col-12 col-lg-4 mt-5" v-for="i in this.Filters" :key="i">
        <div class="card" >
            <div class="card-body">
                <h3 class="card-title">{{ i.name }}</h3>
                <p class="card-text">
                    {{ i.description }}
                </p>

                <p class="text-success">
                    {{ i.price }}€
                </p>

                <hr>

                <p class="text-success" v-if="i.nivel==1">Level: easy.</p>
                <p class="text-warning" v-if="i.nivel==2">Level: intermediate.</p>
                <p class="text-danger" v-if="i.nivel==3">Level: advance.</p>

                <button @click="EspecificoContent(i.id)" class="btn btn-primary">Click for more</button>

            </div>
        </div>
    </div>
</div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
name:'CoursesOn',
data(){
    return{
        Dificult:false,
        Graphyc:false,
        Programming:false
    }
},
computed:{
    ...mapState(['courses']),
    Filters(){
        if(this.Graphyc){
            return this.courses.filter(a => a.type == 'Design')
        }else if(this.Programming){
            
            return this.courses.filter(a => a.type == 'Programacion')
        }else{
            return this.courses
        }

    }  
},methods:{
    EspecificoContent(id){
        this.$router.push({name:'cursoEspecificado', params:{id:id}})
    }
},watch:{
    Dificult(value){
        if(value){
            this.Programming=false;
            this.Graphyc=false;
            return this.courses.sort((a,b)=>a.nivel-b.nivel)
        }else if(!value){
            return this.courses;
        }
    },Graphyc(val){
        if(val){
            this.Programming=false
        }
    },Programming(val){
        if(val){
            this.Graphyc=false
        }
    }
}
}
</script>

<style lang="scss" scoped>

 
main{
    margin-top: 10rem;
    form{
        margin-bottom: 4rem;
        font-size: 2rem;
    }
}
</style>