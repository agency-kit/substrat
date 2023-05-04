<script setup>
    defineProps(['name', 'required'])
</script>

<template>
  <label>
    <slot/>
    <input type="file" :name="name" :required="required"/>
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