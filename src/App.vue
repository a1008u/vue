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

    <h2>capter4</h2>
    <h3>capter4_1</h3>
    <c4_1/>

    <h3>capter4_2</h3>
    <c4_2/>

    <h2>capter5</h2>
    <h3>capter5_1</h3>
    <c5_1/>

    <h3>capter5_2</h3>
    <c5_2/>

    <h3>capter5_3</h3>
    <c5_3/>

    <h3>capter5_4</h3>
    <c5_4/>

    <h3>capter5_5</h3>
    <c5_5/>

    <h2>capter6</h2>
    <h3>capter6_1</h3>
    <c6_1/>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import c1_1 from "./components/chapter1_1";
import c2_1 from "./components/chapter2_1";
import c2_2 from "./components/chapter2_2";
import c3_1 from "./components/chapter3_1";
import c3_2 from "./components/chapter3_2";
import c4_1 from "./components/chapter4_1";
import c4_2 from "./components/chapter4_2";
import c5_1 from "./components/chapter5_1";
import c5_2 from "./components/chapter5_2";
import c5_3 from "./components/chapter5_3";
import c5_4 from "./components/chapter5_4";
import c5_5 from "./components/chapter5_5";
import c6_1 from "./components/chapter6_1";

export default {
  name: "App",
  components: {
    HelloWorld
    ,c1_1
    ,c2_1
    ,c2_2
    ,c3_1
    ,c3_2
    ,c4_1
    ,c4_2
    ,c5_1
    ,c5_2
    ,c5_3
    ,c5_4
    ,c5_5
    ,c6_1
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
