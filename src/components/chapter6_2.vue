<template>
  <div>
    <transition>
      <div v-show="show2">
        トランジションさせたい要素です
      </div>
    </transition>
    <p><button v-on:click="show2=!show2">切り替え</button></p>
    <hr />
  </div>
</template>
 
 
<script>
import Vue from "vue"
export default Vue.extend({
  data() {
    return {
      show2: true
    }
  }
})
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s, transform 1s;
}
/* 表示するときは左から */
.v-enter {
  opacity: 0;
  transform: translateX(-10px);
}
/* 消えるときは下へ */
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
