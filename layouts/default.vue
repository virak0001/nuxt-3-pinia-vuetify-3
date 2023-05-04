<!-- <template>
  <div class="flex">
    <Sidebar />
    <NuxtPage />
  </div>
</template> -->
<template>
  <Html>
    <Body>
      <v-app>
        <v-navigation-drawer v-model="drawer" fixed app :rail="miniVariant" @click="rail = false">
          <lazy-navigation-main-menu />
          <template #append>
            <div v-if="miniVariant === true" class="d-flex justify-center text-grey-lighten-1">
              <p>v 1.0.0</p>
            </div>
            <div v-else class="d-flex justify-center text-grey-lighten-1">
              <p>version 1.0.0</p>
            </div>
          </template>
        </v-navigation-drawer>
        <v-app-bar color="white">
          <v-app-bar-nav-icon color="black" @click.stop="drawer = !drawer" />
          <v-btn v-if="drawer" icon @click.stop="miniVariant = !miniVariant">
            <v-icon color="black">mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-btn>
          <v-spacer />
          <v-menu>
            <template #activator="{ props }">
              <div class="pr-32px cursor-pointer" v-bind="props">example@gmail.com</div>
            </template>
            <v-list class="cursor-pointer w-140px">
                Logout
            </v-list>
          </v-menu>
        </v-app-bar>
        <v-main>
          <v-container fluid class="grey lighten-4 h-full">
            <slot />
          </v-container>
        </v-main>
      </v-app>
    </Body>
  </Html>
</template>
<script setup lang="ts">

const title = computed(() => 'Hospital care system')
const drawer = ref(true)
const miniVariant = ref(false)
</script>
