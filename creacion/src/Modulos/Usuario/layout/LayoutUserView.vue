<template>
        <headerUser/> 
        <TypeCourses/>
        <CAction/>
</template>
<script>
    import headerUser from '@/Modulos/Usuario/components/headerCursesLayout.vue'
    import TypeCourses from '@/Modulos/Usuario/components/TypeCourses.vue'
    import CAction from '@/Modulos/Usuario/components/CallAction.vue'

    export default {
    name:'LayoutUserView',
    components:{
        headerUser,
        TypeCourses,
        CAction
     
        
         
    }
}
</script>

<style scoped>

</style>