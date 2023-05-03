<template>
  <div class="sidebar-wrap w-56 overflow-y-auto h-screen border border-grey-300">
    <div class="overflow-y-auto rounded bg-grey-200">
      <div class="text-center text-xl mt-4 font-bold">
        Core Accounting
      </div>
      <div class="flex justify-center relative mt-3">
        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
          <Icon name="material-symbols:search" class="w-5 h-5" />
        </div>
        <input class="p-1.5 pl-10 w-11/12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search">
      </div>
      <hr class="mt-3 mb-2">
      <SidebarList />
    </div>
  </div>
</template>
<style lang="scss">
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 4px solid transparent;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
  display: block;
}
::-webkit-scrollbar {
    background-color: transparent;
    height: 6px;
    width: 6px;
}
::-webkit-scrollbar-corner {
    background-color: transparent;
}
.dark *::-webkit-scrollbar-thumb {
    --tw-bg-opacity: 1;
    background-color: rgba(50,50,50,var(--tw-bg-opacity));
}
.sidebar-wrap {
  overflow-y: scroll;
  scrollbar-color: rgba(50,50,50,var(--tw-bg-opacity));
  scrollbar-width: thin;
}

</style>
