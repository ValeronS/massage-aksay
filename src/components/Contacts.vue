<template>
  <div class="contact">
    <h3 class="pt-8 title">Записаться</h3>
    <div class="d-flex align-items-c just-c-s-a flex-wrap">
      <h3 class="chip d-flex align-items-c just-c-c mt-4">
        <PhoneIcon />
        <a href="tel:+79381637099" class="pl-6">8-938-163-70-99</a>
      </h3>
      <h3
        v-for="icon in messengerIcons"
        class="chip d-flex align-items-c just-c-c mt-3"
      >
        <img :src="icon.src" :alt="icon.alt" class="img" />
        <a :href="icon.href" class="pl-6">{{ icon.text }}</a>
      </h3>
    </div>
  </div>
</template>

<script setup>
import PhoneIcon from '@/assets/img/PhoneIcon.vue';
import { messengerIcons } from '@/constants';
</script>

<style lang="less" scoped>
.contact {
  .title {
    font-weight: 500;
    text-align: center;
  }

  .chip {
    background-color: white;
    padding: 7px;
    border-radius: 50px;
  }

  .img {
    width: 30px;
    height: 30px;
  }
}
</style>
