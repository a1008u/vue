<template>
    <div>
      <child3 :message="message"></child3>
      <hr />
    </div>
</template>
<script>
import child3 from './child3.vue';
export default {
    components: {
      child3
    },
    data() {
      return {
        message: 'Hello Vue!!'
      }
    }
}
</script>