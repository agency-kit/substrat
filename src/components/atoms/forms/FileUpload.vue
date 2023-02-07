<script setup>
    defineProps(['name'])
</script>

<template>
    <label>
        <slot/>
        <input type="file" :name="name"/>
    </label>
</template>


<style scoped>
label {
    display: flex;
    flex-direction: column;
}
input {
    margin-left: 0;
}
</style>