<template>
  <header>
    <div class="main ">

        <div class="row align-items-center">
            <div class="col-12 col-lg-4">
                <h1>Number of courses:</h1>
            </div>

            <div class="img-fluid col-12 col-lg-4">
                <img src="@/assets/logo.png" alt="">
            </div>

            <div class="col-12 col-lg-4">
                <h1>{{ this.courses.length }}</h1>
            </div>

        </div>

    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {

    computed:{
        ...mapState(['courses'])
    }
}
</script>

<style lang="scss" scooped>
header{
      .main{
        margin-top: 10rem;
      }  
      
    
    img{
        width: 50%;
    }

}
</style>