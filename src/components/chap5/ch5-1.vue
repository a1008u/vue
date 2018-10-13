<template>
  <div class="parent">
    <h1>親コンポーネント</h1>
    {{ data }}
    <child1 v-model="data"/>
        <hr />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          choice: ['A', 'B'],
          text: '初期値'
        }
      }
    },
    components: {
      child1: require('./child1')
    }
  }
</script>