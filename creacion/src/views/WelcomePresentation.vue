<template>
  <div class="background">

  
  <div class=" container">
    <div class="row background-home align-items-end">
      <div class="">
          <h3>Welcome to my page of courses </h3>
          <img src="@/assets/logo.png" alt="">
          <p class="background__flicker">Xavier's Code <span>/></span> </p>
          <p>This project is about an online platform of courses  where you'll find two types of targets: users and admins.</p>
            <p>Thanks for stopping by and don't have any fear to start clicking. This is just a simple project and its given to you all the freedom to do whatever you like to do. If you like this small project, please, consider to contact me since I am openly looking for a new position as a front-end devoloper.

            </p>          
        
       </div>

        <div>
            <button @click="ToMainPage()" class="btn btn-dark text-light w-75">Click to view the current courses</button>
        </div>
         <div>
          <p>If you liked this project you can go to my linkedin profile to see more projects like this <a target="_blank" href="https://www.linkedin.com/in/javier-garcia-urruchi-5b14a4192/">click</a></p>
        </div>

    </div>
    
 </div>
 
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'WelcomePresentation',
  components: {
 
  },methods:{
    ToMainPage(){
      this.$router.push({name:'LayoutUserView'})     

    }
  }
}
</script>

<style lang="scss"  scoped>

@import '@/Sass/Style.scss';

//MainStyles//
.background-home{
  overflow: hidden;
  height: 100vh;  
}


//background Image//
.background{
	background: linear-gradient(-45deg, #52eecc, #3ce775, #23a6d5, #339780);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
  @include BackgroundAnimation;

}

//sizes//
h3{
  font-size: 5rem; 
}
p{
font-size: 1.7rem;
}
button{
  font-size: 2.2rem;
}



//AnimationFlicker//
.background__flicker{
    font-size: 3rem;
    color: green;
    animation: flicker 2s infinite;
    @include flicker;
    span{
      font-size: 4rem;
      color: rgb(30, 70, 14);
    }
}

</style>