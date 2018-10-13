<template>
    <div>
        <child3 :message3="message3"></child3>
            <hr />
    </div>
</template>
<script>
import Child3 from './child3.vue';
export default {
    components: {
        Child3
    },
    data() {
        return {
            message3: 'Hello Vue!!'
        }
    }
}
</script>