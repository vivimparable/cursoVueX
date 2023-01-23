<template>
<section>
<div class="card mb-5" >
    <div class=" row g-0">
        <div class=" card__img--one col-md-4">
            <img src="@/assets/programacion.jpg"   class="img-fluid rounded-start" alt="Programming">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Programming</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
  </div>
</div>

<div class="card   ms-auto" >
    <div class=" row g-0">
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Web Design</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>

        <div class=" card__img--two col-md-4">
            <img src="@/assets/diseño.jpg"   class="img-fluid rounded-start" alt="Design">
        </div>
  </div>
</div>




  </section>
</template>

<script>
export default {
    methods:{
    
}
}
</script>

<style lang="scss">


.card{
max-width: 120rem;

&-body{
    h5{
        font-size: 3rem;
    }
    p{
        font-size: 1.5rem;
    }
    button{
        font-size: 1.5rem;
    }
}
}

</style>