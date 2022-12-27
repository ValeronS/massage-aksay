<template>
  <div class="greetings">
    <h3>
      <div>
        <a href="" target="_blank" rel="noopener">О компании</a> |
        <a href="" target="_blank" rel="noopener">Услуги</a> |
        <a href="" target="_blank" rel="noopener">Контакты</a>
      </div>
      <span class="divider">|</span>
      <div>
        <PhoneIcon/>
        <a href="tel:+79381637099" class="pl-2">8-938-163-70-99</a>
      </div>
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
}

h3 {
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  @media (max-width: @break_xl) {
      text-align: center;
      margin-left: 16px;
  }
  @media (max-width: @break_lg) {
      font-size: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
}

.divider {
  padding: 0 5px 0 5px;
  @media (max-width: @break_md) {
      display: none
  }
}
</style>
