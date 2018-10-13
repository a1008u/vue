<template>
  <div class="child">
    <h2>子コンポーネント</h2>
    <input type="checkbox" value="A" v-model="choice">A
    <input type="checkbox" value="B" v-model="choice">B
    <input type="checkbox" value="C" v-model="choice">C
    <input type="text" v-model="text">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
        choice: [],
      }
    },
    updated() {
      this.$emit('input', {
        choice: this.choice,
        text: this.text,
      })
    },
    mounted() {
      this.choice = this.value.choice
      this.text   = this.value.text
    },
    props: {
      value: {
        type: Object,
        required: true,
      },
    },
  }
</script>
