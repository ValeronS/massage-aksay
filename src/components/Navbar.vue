<template>
  <div class="greetings">
    <contacts />
  </div>
</template>

<script setup>
import PhoneIcon from '@/assets/img/PhoneIcon.vue';
import Contacts from '@/components/Contacts.vue';
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
