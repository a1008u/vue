<template>
<div>
  <router-link to="/home">home</router-link>
  <br>

  <router-link to="/ch1">ch1</router-link>
  <br>

  <ch2/>
  <ch3/>
  <ch4/>
  <ch5/>
  <ch6/>
  <ch8/>

</div>
</template>

<script>
import ch2 from "../components/chap2/ch2";
import ch3 from "../components/chap3/ch3";
import ch4 from "../components/chap4/ch4";
import ch5 from "../components/chap5/ch5";
import ch6 from "../components/chap6/ch6";
import ch8 from "../components/chap8/ch8";

export default {
  name: "use",
  components: {
    ch2,
    ch3,
    ch4,
    ch5,
    ch6,
    ch8
  }
};
</script>