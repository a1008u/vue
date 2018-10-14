<template>
  <circle cx="80" cy="75" r="50" v-bind:fill="fill"/>
</template>
 
 
<script>
export default ({
  name: "ch6_8_1",
  props: {
    fill: String
  }
})
</script>
