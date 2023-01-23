<template>
  <main>
    <div class="p-5 bg-dark global mt-5">
        
        <div class="row">
            <div class="col">
               <h1>Check the ful courses</h1>
               
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nam hic beatae nobis tempora, distinctio molestiae nemo voluptatum veniam officiis dignissimos fugit rem, ratione deleniti, deserunt repellat quam quaerat repellendus optio? Sequi perferendis doloremque ratione. Repellendus ipsa dicta fuga praesentium optio eaque, officia vitae provident cum dignissimos, dolorem, architecto blanditiis.</p>             
               <button @click="ToCourses()" class=" btn btn-light ">Click</button>

            </div>

        </div>
    </div>
  </main>
</template>

<script scooped>
export default {
methods:{
    ToCourses(){
        this.$router.push({name:'CoursesOn'})
    }
}
}
</script>

<style lang="scss" scoped>

@import '@/Sass/Style.scss';
h1{
    font-size: 3rem;
}

.global{
    @include radiusBorder(100rem);
    @media only screen and (max-width: 975px) {
        @include radiusBorder(0rem);
    }
}
 

</style>