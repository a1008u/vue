<template>
  <div>
    <hr />
    <button v-on:click="handleClick">クリック</button>
    
    <input v-bind:value="message" @change="handleInput">

    <div @click.right="handler">example</div>
    <div @click.right.prevent="handler">example</div>


    <div @click="handler('div1')">
      div1
      <a href="#top" @click.stop="handler('div2')">div2</a>
    </div>

    <div @click="handler('div1')">
      div1
      <a href="#top" @click.prevent="handler('div2')">div2</a>
    </div>

    <div @click.capture="handler('div1')">
      div1
      <div @click="handler('div2')">
        div2
        <div @click="handler('div3')">div3</div>
      </div>
    </div>

    <!-- コンポーネントをクリックするとハンドラが呼び出される -->
    <my-component @click.native="handler"></my-component>
    <!-- コンポーネントをクリックしてもハンドラは呼び出されない -->
    <my-component @click="handler"></my-component>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello Vue.js'
    }
  },
  methods: {
    handleClick() {
      alert('クリックしたよ')
    },
    handleInput(event) {
      this.message = event.target.value
    },
    handler(comment) {
      console.log(comment)
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
</style>
