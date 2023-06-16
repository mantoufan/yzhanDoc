<script setup lang="ts">
const confirm = () => console.log('confirm!!!')
</script>

<template>
  <YButton type="primary" size="small" block></YButton>
  <YButton type="primary" size="medium" @click="confirm"></YButton>
  <YButton type="primary" size="large" disabled @click="confirm"></YButton>
</template>

<style scoped></style>
