<template>
  <TheHeader />

  <main>
    <TheWelcome />
    <About v-for='(item, idx) in textsAbout' :img-src='images[idx]' :text='item' :key='idx + 1' />

    <Services />

    <Diplomas />
    <Map />
  </main>

</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheWelcome from '@/components/TheWelcome.vue';
import About from '@/components/About.vue';
import Services from '@/components/Services.vue';
import Diplomas from '@/components/Diplomas.vue';
import Map from '@/components/map.vue';
import { textsAbout, images } from '@/constants';
</script>

<style scoped>

</style>
