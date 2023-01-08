<template>
  <div class='about'>
    <img :src='imgSrc.src' :alt='imgSrc.alt' class='img'>
    <div class='desc'>
      <p class='pt-8' v-for='(p, idx) in text' :key='idx'>{{ p }}</p>
    </div>
  </div>
</template>

<script setup>
const { imgSrc } = defineProps({
  imgSrc: {
    type: Object,
    required: true,
  },
  text: {
    type: Array,
    required: true,
  },
});

</script>

<style lang='less' scoped>
.about {
  max-width: @break_xxl;
  margin: 20px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.75fr;
  justify-items: center;
  align-items: center;

  @media (min-width: @break_md) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  .img {
    height: 450px;

    @media (min-width: @break_lg) {
      height: 550px;
    }
  }

  .desc {
    padding: 0 20px;
    font-weight: 300;

    @media (min-width: @break_md) {
      padding: 0 40px;
    }
  }
}
</style>