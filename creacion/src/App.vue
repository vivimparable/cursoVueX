<template>

  <header>
    <NavBar/>
  </header>  
  
  <router-view />
  <footerNav/>
  
  

</template>
<script>
 import NavBar from '@/components/NavBar.vue'
 import footerNav from '@/components/footerNav.vue'

export default{
components:{
  NavBar,
  footerNav
}  
}
</script>
<style lang="scss">
//Global css//
*,
*::before,
*::after {margin: 0;
    padding: 0;
    box-sizing: inherit;
}  

html {
    font-size: 62.5%;
    box-sizing: border-box;
}
//Gloobal font Sizes//
ul{
  font-size: 1.5rem;
}
h1{
    font-size: 4rem;
}
p{
  font-size: 1.5rem;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
//revisar//
nav {
  padding: 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #165234;
    transition-duration: 1s;
    transition-property:  color;
    &:hover{
      
      color: #0ba84d; ;
       
    }
    //Add active Links
  }
}

.margin-fixed-navbar{
margin-top: 40rem;
}
</style>
