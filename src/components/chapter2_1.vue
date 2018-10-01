<template>
  <div>
    <hr />
    <p>{{ message.value }}</p>
    <p>{{ message.value.length }}</p>
    <p>{{ list[2] }}</p>
    <p>{{ list[num] }}</p>

    <!-- countプロパティを表示する -->
    <p>{{ count }}回クリックしたよ！ </p>
    <button v-on:click="increment">カウントを増やす</button>

    <!-- クラスとスタイルのデータバインディング -->
    <p v-bind:class="{ child: isChild, 'is-active': isActive }" class="item">
      動的なクラス
    </p>
    <p v-bind:style="{ color: textColor, backgroundColor: bgColor }" class="item">
      動的なスタイル
    </p>
    <button @click="active">isActiveを切り替える</button>

    <!-- SVGのデータバインディング　-->
    <div id="app">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="100" cy="75" v-bind:r="radius" fill="lightpink" />
      </svg>
      <input type="range" min="0" max="100" v-model.number="radius">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: {value: 'Hello Vue.js!'}
      , list: ['りんご', 'ばなな', 'いちご']
      , num: 1
      , count: 0

      , isChild: true
      , isActive: true
      , textColor: 'red'
      , bgColor: 'lightgray'

      , radius: 50
    }
  },
  methods:{
    increment() {
      this.count += 1
    },
    active(){
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}

.item {
  padding: 4px 8px;
  transition: background-color 0.4s;
}
.is-active {
  background: #ffeaea;
}
</style>
