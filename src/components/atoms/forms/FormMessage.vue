<script setup>
    defineProps(['name'])
</script>

<template>
    <label>
        <slot/>
        <textarea :name="name"/>
    </label>
</template>


<style>
@layer block {
    label {
        display: flex;
        flex-direction: column;
    }
    textarea {
        resize: vertical;
        min-height: 3rem;
        max-height: 50vh;
        margin-left: 0;
    }
}
</style>