<template>
  <div @click="path(String(to))" class="flex items-center justify-between cursor-pointer rounded" :class="active ? 'bg-gray-100' : ''">
    <div class="flex items-center" :class="left">
      <Icon :name="icon" class="mr-3" :class="`w-[${width}] h-[${height}]`" />
      <span class="text-slate-700 dark:text-slate-200">{{ title }}</span>
    </div>
    <div v-if="subgroup" class="flex-0">
      <div class="h-5 w-5 text-base text-slate-300 bg-slate-100 dark:bg-[#334155] dark:text-slate-300 rounded-full flex justify-center items-center transform transition-all duration-300 ltr:rotate-90 rtl:rotate-90">
        <Icon :name="expend? 'ic:baseline-arrow-drop-down' : 'heroicons-solid:chevron-right'" class="flex justify-items-end bg-blue" :class="`w-[${width}] h-[${height}]`" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
    icon: string,
    title?: string,
    subgroup?: boolean | undefined
    active?: boolean
    width?: string
    height?: string
    to?: string
    left?: string
    expend: boolean
}

const props = defineProps<Props>()
const path = (to: string) => {
  if(props.subgroup) return
  return navigateTo(to)
}
</script>
