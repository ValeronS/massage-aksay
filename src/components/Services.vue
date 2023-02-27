<template>
  <div class="services">
    <h2 class="mt-4 mb-12 pt-8 text-c">Услуги и цены</h2>
    <div class="mb-12 pl-2 pr-2 d-flex align-items-c flex-d-column">
      <table class="table">
        <tr>
          <th>Вид массажа</th>
          <th>Длительность</th>
          <th>Стоимость</th>
        </tr>
        <tr v-for="(row, idx) in prices" :key="idx">
          <td
            :rowspan="prices[idx]?.name === prices[idx + 1]?.name ? 2 : 1"
            v-if="prices[idx]?.name !== prices[idx - 1]?.name"
          >
            {{ row.name }}
          </td>
          <td class="text-c">{{ row.duration }} мин</td>
          <td class="text-c">{{ row.price }}₽</td>
        </tr>
      </table>
    </div>
    <MassageCard
      v-for="(item, idx) in massageCards"
      :card="item"
      :key="idx + 1"
    />
  </div>
</template>

<script setup>
import MassageCard from '@/components/MassageCard.vue';
import { prices, massageCards } from '@/constants';
</script>

<style lang="less" scoped>
.services {
  .table {
    border-collapse: collapse;
    border: 3px solid @borderColor;

    th {
      font-weight: 500;
    }

    th,
    th,
    td {
      border: 2px solid @borderColor;
      padding: 3px;
    }

    tr:nth-child(odd) {
      background-color: #fff;
    }
  }
}
</style>
