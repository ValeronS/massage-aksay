<template>
  <TheHeader/>

  <main>
    <TheWelcome/>
    <About v-for="(item, idx) in textsAbout" :img-src="images[idx]" :text="item" :key="idx + 1"/>
    <h2 class="pt-8 text-c">Услуги и цены</h2>
    <MassageCard v-for="(item, idx) in massageCards" :card="item" :key="idx + 1"/>
    <h2 class="pt-8 text-c">Дипломы и сертификаты</h2>
    <Certificate v-for="(item, idx) in certificates" :card="item" :key="idx + 1"/>
    <Map/>
  </main>

</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheWelcome from '@/components/TheWelcome.vue'
import About from "@/components/About.vue";
import MassageCard from "@/components/MassageCard.vue";
import Certificate from "@/components/Certificate.vue";
import Map from "@/components/map.vue";
import { textsAbout, images, massageCards, certificates } from "@/constants"
</script>

<style scoped>

</style>
