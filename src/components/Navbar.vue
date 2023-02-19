<template>
  <div class="greetings">
    <h3 d-flex align-items-c just-c-c>
      <PhoneIcon/>
      <a href="tel:+79381637099" class="pl-2">8-938-163-70-99</a>
    </h3>
  </div>
</template>

<script setup>
import PhoneIcon from '@/assets/img/PhoneIcon.vue'
</script>

<style scoped lang="less">
.greetings {
  display: flex;
  align-items: center;


  h3 {
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    @media (max-width: @break_xl) {
      text-align: center;
      margin-left: 16px;
      font-size: 1rem;
      justify-content: center;
    }
    @media (max-width: @break_md) {
      margin-left: 0;
    }
  }
}
</style>
