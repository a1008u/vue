<template>
  <div>
    <div id="app">
      <article>
        <input v-model.number="budget"> 円以下に絞り込む
        <input v-model.number="limit"> 件を表示
        <button @click="orderM">切り替え</button>
      </article>

      <p>{{ matched.length }} 件中 {{ limited.length }} 件を表示中</p>

      <ul>
        <!-- v-forでは最終結果、算出プロパティのlimitedを使用する -->
        <li v-for="item in limited" v-bind:key="item.id">
          {{ item.name }} {{ item.price }}円
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data () {
    return {
      order: false,
      budget: 300,
      limit: 2,
      list: [
        { id: 1, name: 'りんご', price: 100 },
        { id: 2, name: 'ばなな', price: 200 },
        { id: 3, name: 'いちご', price: 400 },
        { id: 4, name: 'おれんじ', price: 300 },
        { id: 5, name: 'めろん', price: 500 }
      ]
    }
  },
  computed: {
    matched() {
      return this.list.filter(el => {
        return el.price <= this.budget
      }, this)
    },
    limited() {
      return this.matched.slice(0, this.limit)
    },
    sorted() {
      return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
    }
  },
  methods: {
    orderM(){
      this.order = !this.order 
    }
  }
}
</script>

<style scoped>
button{
    display: inline-block;
    padding: 7px 20px;
	border-radius: 25px;
    text-decoration: none;
    color: #FFF;
    background-image: -webkit-linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    background-image: linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
    transition: .4s;
}

button:hover {
    background-image: -webkit-linear-gradient(45deg, #FFC107 0%, #f76a35 100%);
    background-image: linear-gradient(45deg, #FFC107 0%, #f76a35 100%);
}
</style>
