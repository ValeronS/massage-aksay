<script setup>
import PhoneIcon from '@/assets/img/PhoneIcon.vue'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="orange">{{ msg }}</h1>
    <h3>
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">О компании</a> |
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Услуги</a> |
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Контакты</a> |
      <PhoneIcon/>
      <a href="tel:+79381637099" class="pl-2">8-938-163-70-99</a>
    </h3>
  </div>
</template>

<style scoped>
.greetings {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.phoneIcon {
}
h1 {
  font-weight: 500;
  font-size: 2.5rem;
  /*top: -10px;*/
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}
</style>
