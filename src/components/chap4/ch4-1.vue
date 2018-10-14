<template>
  <div>
    <hr />
    <p>{{ width }} の半分は {{ halfWidth }}</p>

    <p>X: {{ halfPoint.x }}</p>
    <p>Y: {{ halfPoint.y }}</p>

    <h3>width</h3>
    <input v-model.number="width"> {{ width }}
    <input v-model.number="halfWidth2"> {{ halfWidth2 }}

    <h3>Height</h3>
    <input v-model.number="height"> {{ height }}
    <input v-model.number="halfHeight"> {{ halfHeight }}

    <p>算出プロパティ</p>
    <ol>
      <!-- 同じ結果（キャッシュから取得） -->
      <li>{{ computedData }}</li>
      <li>{{ computedData }}</li>
    </ol>
    <p>メソッド</p>
    <ol>
      <li>{{ methodsData() }}</li>
      <li>{{ methodsData() }}</li>
    </ol>


  </div>
</template>

<script>
export default {
  data () {
    return {
      width: 800, 
      height: 800
    }
  },
  computed: {
    halfWidth() {
      return this.width / 2
    },
    halfHeight() {
      return this.height / 2
    },
    halfPoint() {
      return {
        x: this.halfWidth,
        y: this.halfHeight
      }
    },
    halfWidth2: {
      get() {
        return this.width / 2
      },
      set(val) {
        this.width = val * 2
      }
    },
    computedData() { return Math.random() }
  },
  methods: {
    methodsData() { return Math.random() }
  }
}
</script>

<style scoped>
p, 
li{
  text-align: left;
}
</style>
