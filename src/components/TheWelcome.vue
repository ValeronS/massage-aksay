<template>
  <div class="content">
    <div class="background1"></div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="less">
.content {
  top: 120px;
}

.background1 {
  background: url('@/assets/img/background1.jpg') no-repeat center bottom;
  background-size: cover;
  height: 800px;
  opacity: 0.7;
  width: 100%;
  @media (max-width: @break_sm) {
    background-size: contain;
    height: 260px;
  }
}

</style>