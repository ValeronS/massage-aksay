<template>
  <div class='card'>
    <div class='grid'>
      <img v-for='(item, idx) in card' :src='item.src' :alt='item.alt' :key='idx'
           :class='{ img: true, second: idx === 1 }'>
    </div>
  </div>
</template>

<script setup>
const { imgSrc } = defineProps({
  card: {
    type: Array,
    required: true,
  },
});

</script>

<style lang='less' scoped>
.card {
  max-width: @break_xxl;
  margin: 20px auto 0 auto;


  .grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;

    @media (min-width: @break_md) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .img {
    //height: 450px;
    width: 340px;

    @media (min-width: @break_lg) {
      //height: 550px;
    }
  }

  .second {
    margin-top: 20px;

    @media (min-width: @break_lg) {
      padding-top: 0;
    }

  }

  .hr {
    margin: 20px auto 12px;
  }
}
</style>