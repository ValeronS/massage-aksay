<template>
  <header>
    <img alt="Logo" class="logo" src="@/assets/img/Logo.png" width="125" height="125" />

    <div class="wrapper">
      <Navbar msg="Массаж у Самвела" />
    </div>
  </header>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
header {
  position: fixed;
  line-height: 1.5;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    padding: 20px;
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  header .wrapper {
    width: 100%;
  }
}</style>