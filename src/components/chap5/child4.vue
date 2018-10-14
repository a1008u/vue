<template>
  <div>
    <button @:click="handleClick">子サイドでイベント発火</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick: function () {
      this.$emit('childs-event')
    }
  }
}
</script>