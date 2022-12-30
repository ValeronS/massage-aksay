<template>
  <TheHeader/>

  <main>
    <TheWelcome/>
    <About v-for="(item, idx) in textsAbout" :img-src="images[idx]" :text="item" :key="idx + 1"/>
    <MassageCard v-for="(item, idx) in massageCards" :card="item" :key="idx + 1"/>
  </main>

</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheWelcome from '@/components/TheWelcome.vue'
import About from "@/components/About.vue";
import MassageCard from "@/components/MassageCard.vue";
import { textsAbout, images, massageCards } from "@/constants"
</script>

<style scoped>

</style>
