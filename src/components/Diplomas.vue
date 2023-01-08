<template>
  <div>
    <h2 class='pt-20 text-c'>Дипломы и сертификаты</h2>
    <Certificate v-for='(item, idx) in certificates' :card='item' :key='idx + 1' />
  </div>
</template>

<script setup>

import Certificate from '@/components/Certificate.vue';
import { certificates } from '@/constants';
</script>

<style lang='scss' scoped>

</style>