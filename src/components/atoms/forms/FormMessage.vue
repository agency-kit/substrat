<script setup>
    defineProps(['name'])
</script>

<template>
    <label class="message">
        <slot/>
        <textarea :name="name"/>
    </label>
</template>


<style>
@layer block {
    .message {
        width: 100%;
    }
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