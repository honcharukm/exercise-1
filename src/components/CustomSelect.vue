<template>
  <select :value="currentValue" @change="(e) => handleChange(e)" class="select">
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
</template>

<script>
export default {
    name: 'CustomSelect',
    props: ['options', 'currentValue', 'handleChange'],
}
</script>

<style lang="scss">
  .select {
    border: 1px solid black;
    padding: 7px 5px;
    margin: 0 5px;
    min-width: 20px;
    text-align: center;
  }
</style>