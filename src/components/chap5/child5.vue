<template>
  <div>
    <button @click="handleClick">更新</button>
  </div>
</template>
 
 
<script>
import Vue from "vue"
 
/**
 * 呼び出し元でonUpdate(data: number) を実装すること
 * @example
 * <child-component :data="parentData" v-on:onUpdate="onUpdate"></child-component>
 */
export default Vue.extend({
  props: {
    data: String,
  },
  data() {
    return {
      updateData: 1,
    }
  },
  methods: {
    /** 親コンポーネントのonUpdate呼び出し */
    handleClick() {
      if (this.$listeners["onUpdate"]) {
        this.$emit("onUpdate", this.updateData)
      } else {
        console.log("呼び出し側でonUpdateが実装されていません")
        debugger
      }
    },
  },
})
</script>