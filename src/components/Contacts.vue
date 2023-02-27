<template>
  <div class="contact">
    <div class="d-flex align-items-c just-c-s-a flex-wrap">
      <h5 class="chip d-flex align-items-c just-c-c mt-4 mr-1">
        <PhoneIcon />
        <a href="tel:+79381637099" class="pl-6">8-938-163-70-99</a>
      </h5>
      <h5
        v-for="icon in messengerIcons"
        class="chip d-flex align-items-c just-c-c mt-3 mr-1"
      >
        <img :src="icon.src" :alt="icon.alt" class="img" />
        <a :href="icon.href" class="pl-6">{{ icon.text }}</a>
      </h5>
    </div>
  </div>
</template>

<script setup>
import PhoneIcon from '@/assets/img/PhoneIcon.vue';
import { messengerIcons } from '@/constants';
</script>

<style lang="less" scoped>
.contact {
  .chip {
    background-color: white;
    padding: 5px;
    border-radius: 50px;
  }

  .img {
    width: 20px;
    height: 20px;
  }
}
</style>
