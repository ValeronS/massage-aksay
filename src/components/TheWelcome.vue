<template>
  <div class="content">
    <div class="background">
      <div class="back-dark" />
      <div class="description">
        <div class="title">Студия профессионального массажа в городе Аксай</div>
        <div class="subtitle">
          Наши эмоции и чувства — ключ к здоровой жизни
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.content {
  .background {
    background: url('@/assets/img/background1.jpg') no-repeat center center;
    background-size: cover;
    width: 100%;
    padding: 200px 0 50px 0;

    @media (max-width: @break_sm) {
      padding: 100px 0 10px 0;
    }
  }

  .back-dark {
    left: 0;
    top: 0;
    background: black;
    opacity: 0.5;
    width: 100%;
    position: absolute;
    height: 100%;
  }

  .description {
    max-width: @break_xxl;
    margin: 0 auto;
    padding: 0 40px;

    @media (max-width: @break_sm) {
      padding: 0 30px;
    }
  }

  .title {
    color: @primary-color;
    font-size: 2.5rem;

    @media (max-width: @break_xl) {
      font-size: 2rem;
    }
    @media (max-width: @break_lg) {
      font-size: 1.7rem;
    }
    @media (max-width: @break_md) {
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }

  .subtitle {
    color: @primary-color;
    font-size: 2rem;

    @media (max-width: @break_xl) {
      font-size: 1.7rem;
    }
    @media (max-width: @break_lg) {
      font-size: 1.5rem;
    }
    @media (max-width: @break_md) {
      font-size: 1rem;
      line-height: 1.2rem;
      padding-top: 5px;
    }
  }
}
</style>
