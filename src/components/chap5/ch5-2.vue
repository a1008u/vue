<template>
    <div>
      <child2 message2="Hello Vue!!"></child2>
      <hr />
    </div>
</template>

<script>
import child2 from './child2.vue';
export default {
    components: {
        child2
    }
}
</script>