<template>
    <div>
      <child4 v-on:childs-event="parentsMethod"></child4>
      <hr />
    </div>
</template>

<script>
import child4 from './child4.vue';
export default {
    components: {
      child4
    },
    methods: {
      parentsMethod: function () {
        alert('イベントをキャッチ！ ')
      }
    }
}
</script>