<template>
  <div v-for="(item, i) in menus" :key="i" class="w-11/12 mx-auto text-sm">
    <SidebarItem 
      :title="item.title" 
      :icon="item.icon" 
      :subgroup="!!item.items?.length"
      :to="item.to"
      :expend="activeSubmenu === i"
      class="mb-2 hover:bg-gray-100 p-1.5" 
      :active="active(item.to)" @click.stop="toggleSubmenu(i)"
    />
    <Transition 
          enter-active-class="submenu_enter-active"
          leave-active-class="submenu_leave-active"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
      >
        <div v-if="activeSubmenu === 0 ? active(item.to) : Number(activeSubmenu) === i">
          <ul calss="sub-menu">
            <li
              v-for="(ci, index) in item.items"
              :key="index"
              class="block ltr:pl-4 rtl:pr-4 ltr:pr-1 rtl:-l-1 mb-2 ml-8"
            >
              <NuxtLink v-slot="{ isActive }" :to="ci.to" active-class="font-medium">
                <span
                  class="text-sm flex space-x-3 rtl:space-x-reverse items-center transition-all duration-150"
                >
                  <span
                    class="h-2 w-2 rounded-full border border-slate-600 dark:border-slate-300 flex-none"
                    :class="
                      isActive
                        ? ' bg-slate-900'
                        : ''
                    " 
                  />
                  <span class="flex-1 text-slate-700 dark:text-slate-200"> 
                    {{ ci.title }}
                  </span>
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute()
const activeSubmenu = ref<number>(0)

const active = (to: string) => {
  return String(route.name).includes(to.substring(1))
}
const toggleSubmenu = (i: number) => {
  if (i === activeSubmenu.value) return (activeSubmenu.value = -1)
  return (activeSubmenu.value = Number(i))
}
const beforeEnter = (element: any) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = '0px'
    }
    element.style.display = null
  })
}

const enter = (element: any) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = `${element.scrollHeight}px`
    })
  })
}

const afterEnter = (element: any) => {
  element.style.height = null
}
const beforeLeave = (element: any) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = `${element.offsetHeight}px`
    }
  })
}
const leave = (element: any) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = '0px'
    })
  })
}
const afterLeave = (element: any) => {
  element.style.height = null
}

const menus = computed(() => [
  {
    title: 'Dashboard',
    to: '/dashboard',
    icon: 'material-symbols:dashboard-outline'
  },
  {
    title: 'General-Ledger',
    to: '/general-ledger',
    icon: 'material-symbols:list-alt-outline',
    items: [
      {
        title: 'General',
        to: '/general-ledger/general',
        icon: 'ci:dummy-circle-small',
        items: [
          {
            title: 'General',
            to: '/general-ledger/general',
            icon: 'ci:dummy-circle-small'
          },
          {
            title: 'Ledger',
            to: '/general-ledger/ledger',
            icon: 'ci:dummy-circle-small'
          }
        ]
      },
      {
        title: 'Ledger',
        to: '/general-ledger/ledger',
        icon: 'ci:dummy-circle-small'
      }
    ]
  }
])
</script>
<style lang="scss" scoped>
.router-link-active {
  @apply bg-gray-200 font-bold;
}

.submenu_enter-active,
.submenu_leave-active {
  overflow: hidden;
  transition: all 0.2s linear;
}
</style>
