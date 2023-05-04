<template>
    <v-list-item :value="menuItem.title" :title="menuItem.title" nav :density="menuItem.density || 'compact'">
      <template #prepend>
        <v-tooltip right content-class="v-tooltip__right" nudge-right="15">
          <template #activator="{ props, on }">
            <v-list-item-action v-bind="props" class="pr-3" v-on="on">
              <v-icon>{{ menuItem.icon || 'mid-home' }}</v-icon>
            </v-list-item-action>
          </template>
          <span>{{ menuItem.title }}</span>
        </v-tooltip>
      </template>
    </v-list-item>
  </template>
  <script lang="ts" setup>
  defineProps<{
    menuItem?: any
  }>()
  </script>