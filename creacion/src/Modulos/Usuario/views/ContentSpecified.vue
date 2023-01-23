<template>
  <main>
      <div class="container">

        <div class="row">

          <div class="col-12 col-lg-6">
              <h1>{{ GetCourse.nombre }}</h1>
              <p>Nivel: {{ GetCourse.nivel }}</p>
              <hr>
              <p>{{ GetCourse.descripcion }} </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione id molestias minima nisi illum atque rem recusandae culpa itaque beatae dolorum, sed commodi obcaecati at cumque pariatur officia tempore quod consectetur quia perferendis? Optio, ipsa possimus nobis officia nesciunt, quod nulla veritatis ratione praesentium deleniti ullam! Eum accusamus, assumenda suscipit corrupti ipsam excepturi provident blanditiis maiores nihil atque porro consequuntur recusandae hic aperiam quibusdam fuga sapiente! Beatae exercitationem dolore, tempore deleniti ratione quia quaerat laborum vel quisquam eos minus. Recusandae blanditiis quod maxime est sed at repudiandae, dolorum reprehenderit. Sequi quas enim dolores quae nesciunt voluptatibus ullam officiis veniam voluptate!</p>
          </div>

          <div class="col-12 col-lg-5">
              <img src="@/assets/logo.png" alt="">
          </div>
        </div>


        <div class="acordion">
          <div v-for="(i,index) of GetCourse.temas" :key="index" class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" :id="`flush-heading${index+1}`" >
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#flush-collapse${index+1}`" aria-expanded="false" :aria-controls="`flush-collapse${index+1}`">
                 Tema: {{ i.tema }}. {{ i.titulo }}
                </button>
              </h2>
              <div :id="`flush-collapse${index+1}`" class="accordion-collapse collapse" :aria-labelledby="`flush-heading${index+1}`" data-bs-parent="#accordionFlushExample">
                <p> Descripcion: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate deleniti, cum veniam ab quam distinctio dolorem sapiente. Sapiente officiis, odio architecto iste, eligendi assumenda maxime quis veritatis quibusdam, nemo laboriosam.
                </p>
                <button @click="FullCourse(i.titulo)" class="btn btn-outline-dark">Click to watch full subject</button>
              </div>
            </div>
          </div>
        </div>

      </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props:{
    id:{
      type:Number,
      required:true
    }
  },
  computed:{
    ...mapGetters('CustomUserView',['IdCourse']),
    GetCourse(){

      return this.IdCourse(this.id)

    }
  },methods:{
    FullCourse(titulo){
      
      this.$router.push({name:'fullsubject',params:{tema:titulo}})

    }
  }
}
</script>

<style lang="scss" scoped>

main{
  margin-top: 15rem;
  .acordion {
    button{
        font-size: 2rem;
        border: solid 0.1rem rgb(158, 158, 158);
        margin-bottom: 1rem;
    }
    
  }
}
</style>