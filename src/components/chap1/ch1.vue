<template>
  <div>
    <hr />
    <ol>
      <li class='text-left' v-for="item in list" v-bind:key="item.id">{{ item }}</li>
    </ol>

    <hr />
    <button type="button" class='button-right' v-on:click="handleClick">Click(v-onでのclick)</button>
    <button type="button" @click="handleClick">Click(@clickでのclick))</button>

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

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}
/* opacity:0から1へのフェードイン＆フェードアウト */
.v-enter, .v-leave-to {
  opacity: 0;
}

.text-left{
  text-align: left;
}

/* buttonデコ */
button {
    display: inline-block;
    padding: 0.3em 1em;
    text-decoration: none;
    color: #67c5ff;
    border: solid 2px #67c5ff;
    border-radius: 3px;
    transition: .4s;
}

button:hover {
    background: #67c5ff;
    color: white;
}

.button-right {
  margin-right: 30px
}

</style>
