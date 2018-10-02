<template>
  <div class="parent">
    <h1>親コンポーネント</h1>
    {{ data }}
    <child v-model="data"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          choice: ['A', 'B'],
          text: '初期値',
          message: 'Hello Vue!!'
        }
      }
    },
    components: {
      child: require('./child')
    }
  }
</script>