<template>
    <v-list nav dense>
      <v-list-item>
        <v-list-item-content>
          <v-toolbar-title class="d-flex justify-center font-weight-bold">Hospital care system</v-toolbar-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
  
      <template v-for="(item, i) in items">
        <v-divider v-if="item.divider" :key="i" />
        <template v-if="item.canView">
          <v-list-group v-if="item.items" v-bind="item" :key="i" :value="item.to" :title="item.title" sub-group>
            <template #activator="{ props }">
              <navigation-nav-menu-item sub v-bind="props" :menu-item="item" />
            </template>
            <div class="ml--7">
              <navigation-nav-menu-item
                v-for="(level2Item, index) in item.items"
                :key="index"
                :menu-item="level2Item"
                v-bind="level2Item"
              />
            </div>
          </v-list-group>
          <navigation-nav-menu-item v-if="!item.items" v-bind="item" :key="i" :menu-item="item" />
        </template>
      </template>
    </v-list>
  </template>
  
  <script lang="ts" setup>
  const admins = computed(() => [
    ['Management', 'people_outline'],
    ['Settings', 'settings'],
  ])
  const items = computed(() => [
    {
      icon: 'mdi-view-dashboard-outline',
      title: 'Home',
      to: '/dashboard',
      divider: '',
      canView: true,
    },
  ])
  </script>