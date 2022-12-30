<script setup>
    defineProps(['name'])
</script>

<template>
    <label>
        <slot/>
        <input type="text" :name="name"/>
    </label>
</template>


<style>
label {
    display: flex;
    flex-direction: column;
}
</style>