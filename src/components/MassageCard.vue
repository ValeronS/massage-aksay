<template>
  <div class='card'>
    <div class='grid'>
      <img :src='card.img.src' :alt='card.img.alt' class='img'>
      <div class='desc'>
        <h3 class='pt-8 title'>{{ card.title }}</h3>
        <p class='pt-8' v-for='(p, idx) in card.text' :key='idx'>{{ p }}</p>
        <p class='pt-8 font-w-5'>Длительность: {{ card.duration }} минут</p>
        <p class='pt-8 font-w-5'>Стоимость: {{ card.price }} рублей</p>
      </div>
    </div>
    <hr v-if='!card.last' class='hr w-80' />
  </div>
</template>

<script setup>
const { imgSrc } = defineProps({
  card: {
    type: Object,
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
    //grid-template-rows: 0.5fr 0.75fr;
    justify-items: center;
    align-items: center;

    @media (min-width: @break_md) {
      grid-template-columns: 1fr 1fr;
      //grid-template-rows: 1fr;
    }
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

  .title {
    font-weight: 500;
    text-align: center;
  }

  .hr {
    margin: 20px auto 12px;
  }
}
</style>