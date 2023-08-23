<template>
  <div>
    <v-data-table :headers="headers" :items="users" item-value="name" class="elevation-1" height="calc(100vh - 150px)">
      <template #[`item.flats`]="{ item }">
        <v-avatar color="grey">
          <v-img alt="Avatar" width="40" :src="item.props.title.flags.png" />
        </v-avatar>
      </template>
      <template #[`item.nativeName`]="{ item }">
        {{ item.value.nativeName[Object.keys(item.value.nativeName)[0]]?.common }}
      </template>
    </v-data-table>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/userStore';
const { users } = storeToRefs(useUserStore())
import { useApi } from '~/composable/userApi'
const endpoint = useApi('all')
async function fetch() {
  const response = await endpoint.get('?fields=name,flags,cca2,cca3,altSpellings,idd')
  users.value = response._data
}
onMounted(fetch)

const headers = computed(() => [
  {
    title: 'flats',
    sortable: false,
    key: 'flats',
    width: '50'
  },
  {
    title: 'name',
    sortable: false,
    key: 'name.common'
  },
  {
    title: 'cca2',
    key: 'cca2',
  },
  {
    title: 'cca3',
    key: 'cca3',
  },
  {
    title: 'Native country name',
    key: 'nativeName',
    width: '250'
  },
  {
    title: 'Alternative country name',
    key: 'altSpellings',
    width: '400'
  },
  {
    title: 'Idd',
    key: 'idd.root',
  }
])
</script>
