<template>
  <div id="app">
    <WowzaPlayerBug1 />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import WowzaPlayerBug1 from "./components/WowzaPlayerBug1";

export default {
  name: "App",
  components: {
    WowzaPlayerBug1
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
