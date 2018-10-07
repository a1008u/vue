<template>
  <div class="app8">
    <h1>{{ message }}</h1>
    <EditForm/>
  </div>
</template>
<script>
import store from './store'
// 子コンポーネントを読み込む
import EditForm from './EditForm'
export default {
  name: 'app8',
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