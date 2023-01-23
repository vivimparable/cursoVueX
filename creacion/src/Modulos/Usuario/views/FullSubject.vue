<template>
  <section>

   
  <div class="bg-danger">
      
     <h1> Tema {{ GetCourse.tema }}: {{ GetCourse.titulo }}</h1> 

   
  </div>
  <div class="main-content">
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat tempore atque unde assumenda veritatis ipsam possimus saepe laborum repudiandae ducimus magni numquam enim voluptate quidem minus ut at sed, nostrum animi mollitia repellendus ratione sit. Voluptas eveniet labore blanditiis a officiis? Dolorum, cum molestias. Expedita mollitia quidem neque ab asperiores aperiam enim. Vero repellat molestiae quisquam consectetur tempora fuga quo blanditiis. Doloremque asperiores quis odio quidem magni! Dolorem quod unde consequatur sunt at consequuntur mollitia obcaecati aspernatur quisquam aut reiciendis est minus quis voluptates numquam beatae eos velit eveniet iste esse minima, dolorum ut officia cupiditate? Delectus nulla vitae autem reiciendis eum dicta dolores obcaecati explicabo neque, provident nesciunt consequatur sapiente repellat aperiam qui exercitationem a illo dolorem modi adipisci ex dignissimos, voluptate repudiandae necessitatibus. Repellat eveniet accusamus exercitationem autem temporibus possimus, ipsum corrupti aliquam voluptate dolor nulla quam molestiae expedita dignissimos eos inventore, officiis aut nam suscipit ea nobis, vitae culpa perspiciatis. Laborum maiores amet sunt facilis saepe, quibusdam, ipsa illum eos ab repellat voluptatibus tempore, similique in? Ut sunt, quo perspiciatis commodi eum totam architecto saepe aspernatur dolor similique cupiditate reiciendis tempora nobis pariatur sed reprehenderit rerum dolorem temporibus aperiam error voluptas non vitae fugit? Quaerat minima cumque atque deserunt nam iure? Perspiciatis, corporis accusamus praesentium voluptatem magnam cum sed, nostrum quae nemo harum ut similique. Maxime qui iusto veniam magni itaque nemo aut blanditiis reiciendis. Nihil beatae sit suscipit rem enim a impedit, excepturi necessitatibus quo sunt explicabo unde illo mollitia, eaque ipsam laudantium illum id incidunt maiores omnis officiis? Rerum minima ex laboriosam libero dignissimos cumque beatae. Doloremque earum quos iusto ab quam quas sunt repellat itaque possimus! A quam nostrum et voluptatum laborum in voluptate inventore aliquam. Alias laudantium, sint odit tempora reprehenderit fuga molestiae assumenda, adipisci consectetur eum sit similique voluptate qui amet nam, perferendis dignissimos. Magni corporis accusantium tenetur omnis velit eaque officiis autem blanditiis! Optio a vitae facilis nam deserunt consequatur enim, assumenda delectus quos vero odit natus. Fuga totam, hic fugiat impedit repudiandae commodi corporis at incidunt iure quod officia minima magni omnis odio itaque dolores rerum cumque repellendus. Aut dolorum eaque nam quos repellat. Nesciunt ratione quaerat ipsa unde, doloribus iusto necessitatibus? Eaque quos omnis repellat est quia voluptatibus consectetur iure corrupti eos. Soluta, explicabo eveniet consectetur numquam corrupti temporibus doloremque architecto laudantium, nesciunt quod vero nam quo quis facere itaque modi quidem sapiente recusandae qui laboriosam pariatur saepe? Temporibus officia voluptas minus maxime consequatur totam iure. Dolor nemo sequi voluptates, accusamus accusantium ut vero. Id ab dolorem nisi atque odit, magni, eaque dolore numquam nemo exercitationem rerum veniam architecto expedita dolores inventore voluptatibus placeat odio quod sed minus tempore quas unde consectetur! Non molestias, placeat aut eveniet, cum similique error eos voluptatem, fugit ipsa earum quia aliquam minima dolor! Error, molestiae consectetur mollitia ad ex quam, quae dicta sequi earum omnis inventore ipsum deleniti ut. Aliquam, quidem voluptas minima, id, et consequuntur dolor facere ex quae expedita suscipit tenetur ab iure nihil dicta eveniet sunt reprehenderit. Perferendis, enim.</p>
    
  </div>
</section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props:{
    tema:{
      type:String,
      required:true
    }
  },computed:{
    ...mapGetters('CustomUserView',['IdTema']),
    
    GetCourse(){
      
      return this.IdTema(this.tema)
    }
  }
}
</script>

<style lang="scss" scooped>
section{
  margin-top:10rem;
  .main-content{
    margin: auto;
    width: 50%;
    @media (max-width: 976px) {
      width: 95%;
  }
   
  }
}
</style>


 