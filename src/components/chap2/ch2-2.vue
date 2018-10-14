<template>
  <div>
    <hr />
    名前
    <input v-model="name">
    <button @click="doAdd" class='button-left'>モンスターを追加</button>

    <ul>
      <li v-for="(item, index) in list"
        v-bind:key="item.id"
        v-bind:class="{ tuyoi: item.hp > 300 }"
        v-if="item.hp">
        ID.{{ item.id }} {{ item.name }} HP.{{ item.hp }}
        <span v-if="item.hp < 50">瀕死！</span>
        <span v-if="item.hp > 300">つよい！</span>
        <button v-on:click="doAttack(index)"  class='button-left'>攻撃する</button>
        <button @click="doRemove(index)"  class='button-left'>モンスターを削除</button>
      </li>
    </ul>

    <button @click="handleClick">カウントアップ</button>
    <button @click="show=!show" class='button-left'>表示/非表示</button>
    <br />
    <span ref="count" v-if="show">0</span>

    <div id="ch2_2" v-cloak>
      {{ message }}
    </div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      message:"今日は台風",
      list: [
          { id: 1, name: 'スライム', hp: 100 },
          { id: 2, name: 'ゴブリン', hp: 200 },
          { id: 3, name: 'ドラゴン', hp: 500 }
      ],
      show: true
    }
  },
  methods:{
    doAdd() {
      let max = this.list.reduce((a, b) => {
        return a > b.id ? a : b.id
      }, 0)
      this.list.push({
        id: max + 1, 
        name: this.name, 
        hp: 500
      })
    },
    doRemove(index) {
      this.list.splice(index, 1)
    },
    doAttack(index) {
      this.list[index].hp -= 10 // HPを減らす
    },
    handleClick() {
      let count = this.$refs.count
      if (count) {
        count.innerText = parseInt(count.innerText, 10) + 1
      }
    }
  }
}
</script>

<style scoped>
.tuyoi {
  background: #ffeaea;
}

@keyframes cloak-in {
  0% {
    opacity: 0;
  }
}
#ch2_2 {
  animation: cloak-in 1s;
}
#ch2_2[v-cloak] {
  opacity: 0;
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

.button-left {
  margin-left: 30px
}

</style>
