<template>
  <nav v-if="this.$route.path != '/'" class="fixed-top  shadow-lg navbar bg-dark navbar-expand-lg navbar-dark ">
  <div class="container-fluid">
    <a class="navbar-brand " @click="pushPage('LayoutUserView')">
        <img src='@/assets/logo.png' alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav   mb-2 mb-lg-0">
        
        <li>
          <a @click="pushPage('CoursesOn')" >Current Courses</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>
export default {
components:{
    
},methods:{
    pushPage(name){
        this.$router.push({name:name})
    }
}
}
</script>

<style lang="scss" scoped>
 nav{
  a{
    cursor: pointer;
  }
    button{
        width: 5rem;
        height: 5rem;
        span{
            width: 3rem;
        }
    }
    img{
        width: 7rem;
        cursor: pointer;
    }
 }
</style>