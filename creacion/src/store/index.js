import { createStore } from 'vuex'
import CustomUserView from '@/Modulos/Usuario/store/module-template/index'
export default createStore({
  state: {

    courses:[
      {id:1,type:'Design', price:4.99, description:'You will touch the principles of the design for good practices', nombre:' Intermedio Diseño', nivel:2,temas:[
        {tema:1, titulo:'Principles of design'},
        {tema:2, titulo: 'Good practices'}
      ]},
      {id:2, type:'Design', price:6.99, description:'Introduction of the design', nombre:'Introduction design ', nivel:1, temas:[
        {tema:1, titulo:'New metodologies'},
        {tema:2, titulo: 'Common mistakes'},
        {tema:3, titulo:'Practicum'}
      ]}
      ,
      {id:3 ,type:'Programacion', price:2, description:'Prove your programming knowledge', nombre:'Advance Programming', nivel:3,temas:[
        {tema:1, titulo:'Global exam'},
        
      ]},

      {id:4,type:'Design', price:1, description:'Intermidiate design principles patterns', nombre:' Patterns of design', nivel:2,temas:[
        {tema:1, titulo:'Design'},
        {tema:2, titulo: 'Good practices'},
        {tema:3, titulo: 'Bad practices'},{tema:4, titulo: 'Patterns'},{tema:5, titulo: 'Examen'}
      ]},
      {id:5,type:'Programacion', price:7, description:'Last programming exam', nombre:' Advanced programming exam', nivel:3,temas:[
        {tema:1, titulo:'Examen'},
        
      ]},
      {id:6,type:'Design', price:2.99, description:'Principle of design level 1', nombre:' Colors', nivel:1,temas:[
        {tema:1, titulo:'Colors in design'},
        {tema:2, titulo: 'Good practices'}
      ]}

    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    CustomUserView
  }
})
