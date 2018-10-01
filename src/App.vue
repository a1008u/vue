<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld/>

    <h2>capter1</h2>
    <c1_1/>
    
    <h2>capter2</h2>
    <h3>capter2_1</h3>
    <c2_1/>

    <h3>capter2_2</h3>
    <c2_2/>

    <h3>capter3_1</h3>
    <c3_1/>

    <h3>capter3_2</h3>
    <c3_2/>

    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import c1_1 from "./components/chapter1_1";
import c2_1 from "./components/chapter2_1";
import c2_2 from "./components/chapter2_2";
import c3_1 from "./components/chapter3_1";
import c3_2 from "./components/chapter3_2";

export default {
  name: "App",
  components: {
    HelloWorld
    ,c1_1
    ,c2_1
    ,c2_2
    ,c3_1
    ,c3_2
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
