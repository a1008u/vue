<template>
  <div>
    <p><button v-on:click="show4=!show4">切り替え</button></p>
    <transition>
      <div v-if="show4" key="a">TRUE</div>
      <div v-else key="b">FALSE</div>
    </transition>
  </div>
</template>
 
 
<script>
import Vue from "vue"
export default Vue.extend({
  data() {
    return {
      show4: true
    }
  }
})
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
