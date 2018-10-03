<template>
  <div>
    <transition>
      <div v-show="show">
        トランジションさせたい要素
      </div>
    </transition>
    <p><button v-on:click="show=!show">切り替え</button></p>
    <hr />
  </div>
</template>
 
 
<script>
import Vue from "vue"
export default Vue.extend({
  data() {
    return {
      show: true
    }
  }
})
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}
/* 見えなくなるときの透明度 */
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
