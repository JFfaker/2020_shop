<template>
  <div id="app">
       <router-view/> 
       <FoterMniu  v-show="$route.meta.showFoter"/>
  </div>
</template>

<script>

import FoterMniu from './components/FoterMniu/FoterMniu.vue';

export default {
  name: 'App',
  components:{
    FoterMniu
  }
}
</script>

<style scoped>
#app{
    width:100%;
    height:100%;
    background:#f5f5f5;
}

</style>
