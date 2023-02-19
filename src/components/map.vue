<template>
  <div class='map-content'>
    <h2 class='pt-8 pb-8 text-c'>Расположение</h2>

    <iframe class='map '
      src='https://yandex.ru/map-widget/v1/?um=constructor%3A27b2e59478eb7231886e15442af82022495724b55711ddd45061c5478dfa2469&amp;source=constructor'
      width='100%' height='360' frameborder='0'></iframe>
  </div>
</template>

<script setup>

</script>

<style lang='less' scoped>
.map-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  .map {
    max-width: @break_xxl;
    border-radius: 5px;

    @media (min-width: @break_lg) {
      height: 500px;
      width: 80%;
    }
  }
}
</style>