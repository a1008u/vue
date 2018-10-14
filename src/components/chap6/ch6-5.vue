<template>
  <div>
    <p><button v-on:click="count++">切り替え</button></p>
    <transition>
      <div v-bind:key="count">{{ count }}</div>
    </transition>
  </div>
</template>
 
 
<script>
import Vue from "vue"
export default Vue.extend({
  data() {
    return {
      count: 0
    }
  }
})
</script>

<style scoped>

div {
  text-align: left
}

.v-enter-active {
  transition: opacity 1s;
}
/* 微妙に時間をずらして文字色の濃度を調整してます */
.v-leave-active {
  transition: opacity 0.8s ease 0.2s;
  position: absolute;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
