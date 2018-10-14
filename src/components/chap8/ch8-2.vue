<template>
  <div>
    <h1>{{ message }}</h1>
    <EditForm/>
  </div>
</template>
<script>
import store from '@/store'
import EditForm from './EditForm'
export default {
  components: {
    EditForm
  },
  computed: {
    // ローカルの message とストアの message を同期
    message() {
      return store.getters.message
    }
  }
}
</script>