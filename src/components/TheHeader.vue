<template>
  <header>
    <div class="d-flex align-items-c">
      <img alt="Logo" class="logo" src="@/assets/img/Logo.png"/>
      <h1 class="orange">Массаж у Самвела</h1>
    </div>
    <Navbar/>
  </header>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped lang="less">
header {
  max-width: @break_xxl;
  margin: 0 auto;
  line-height: 1.5;
  width: 100%;
  background-color: var(--vt-c-white-soft);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: @break_lg) {
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 3px;
    padding-bottom: 5px;
  }
  //@media (prefers-color-scheme: dark) {
  //  background-color: var(--vt-c-black);
  //}
}

.logo {
  margin-right: 16px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  @media (max-width: @break_xl) {
    height: 50px;
    width: 50px;
  }
}

h1 {
  font-weight: 500;
  font-size: 2.5rem;
  white-space: nowrap;
  @media (max-width: @break_xl) {
    font-size: 2rem;
  }
  @media (max-width: @break_lg) {
    font-size: 1.5rem;
  }
}
</style>