<template>
  <div>
    <v-data-table 
      :headers="headers" 
      :items="users" 
      item-value="name" 
      class="elevation-1" 
      height="calc(100vh - 150px)"
    />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/userStore';
const { users } = storeToRefs(useUserStore())
const { fetch } = useUserStore();
onMounted(fetch)

const headers = computed(() => [
  {
    title: 'Title',
    sortable: false,
    key: 'title'
  },
  { 
    title: 'Descripiton', 
    key: 'body',
  }
])
</script>
