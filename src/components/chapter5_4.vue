<template>
    <div>
        <child4 @:panretMessage="messageLog"></child4>
        <hr />
    </div>
</template>
<script>
import Child4 from './child4.vue';
export default {
    components: {
        Child4
    },
    methods: {
        messageLog() {
            console.log("parent");
        }
    }
}
</script>