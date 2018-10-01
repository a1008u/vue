<template>
  <div>
    <hr />
    <ol>
      <li v-for="item in list">{{ item }}</li>
    </ol>

    <hr />
    <button type="button" v-on:click="handleClick">Click</button>
    <button type="button" @click="handleClick">Clickと同じ</button>

    <hr />
    <input v-model="message">
    <p>{{ message }}</p>

    <hr />
    <button type="button" @click="show=!show">切り替え</button>
    <p v-if="show">Hello Vue.js!</p>

    <hr />
    <button v-on:click="show2=!show2">切り替え</button>
    <transition>
      <p v-if="show2">Hello Vue.js!</p>
    </transition>

  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello Vue.js!'
      , list: ['りんご', 'ばなな', 'いちご']
      , show: true
      , show2: true
    }
  },
  methods:{
    handleClick: (event) => {
      alert(event.target) // [object HTMLButtonElement]
    }
  }
}
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}
/* opacity:0から1へのフェードイン＆フェードアウト */
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
