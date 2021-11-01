<template>
  <select :value="currentValue" @change="(e) => handleChange(e)">
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
</template>

<script>
export default {
    name: 'CustomSelect',
    props: ['options', 'currentValue', 'handleChange'],
}
</script>

<style>

</style>