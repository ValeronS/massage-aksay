<template>
  <div class="about">
    <img src="@/assets/img/portrait.jpg" alt="portrait" class="portrait">
    <div class="desc">
      <p>Массаж — одна из мануальных техник, совокупность приёмов механического и рефлекторного воздействия на ткани и
        органы в виде растирания, давления, вибрации, проводимых непосредственно на поверхности тела человека как
        руками, так и специальными аппаратами через воздушную, водную или иную среду с целью достижения лечебного или
        иного эффекта.</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.about {
  max-width: @break_xxl;
  margin: 20px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.75fr;
  justify-items: center;
  align-items: center;

  @media (min-width: @break_md) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  .portrait {
    height: 350px;

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