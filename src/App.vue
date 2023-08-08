<template>
  <h2>Component Events</h2>
    <div style="transform: scale(0.6);">
      <vueCard 
        :name=name
        :text=description
        :image=image
        :link=link
        :linktext=linktxt
        :isButton="true"
        :action=action
      />
    </div>
  
</template>

<script>
  
  import vueCard from './components/vueCard.vue'
  export default {
    name: 'App',

    components: {
      vueCard,
    },
    data(){
      return {
        name: 'Jimmy',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ipsum quo veritatis quaerat magnam placeat vel qui minus ullam maxime!',
        image: require('./assets/images/img.jpg'),
        link: 'https://www.google.com',
        linktxt: 'Read more',
      }
    },
    methods: {
      action(){
        console.log("action");
      }
    }
    
  }
</script>

<style>
*{
  background: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
