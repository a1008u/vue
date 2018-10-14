<template>
  <div>
    <!-- iroiro -->
    <p>{{ parentData }}</p>
    <child-component :data="parentData" v-on:onUpdate="onUpdate"></child-component>
    <hr />
  </div>
</template>
 
 
<script>
import Vue from "vue"
import childComponent from "./child5.vue"
export default Vue.extend({
  components: {
    childComponent,
  },
  data() {
    return {
      parentData: 0,
    }
  },
  methods: {
    onUpdate(data) {
      this.parentData = data
    },
  },
})
</script>
