<template>
  <div id="BaseProfile">
    <img
      @click="openMenu = !openMenu"
      id="tooltip-trigger-user"
      class="rounded-full w-8 cursor-pointer"
      :src="userStore.picture"
      alt="avatar"
    />
    <div
      v-show="!openMenu"
      id="tooltip-content-user"
      role="tooltip"
      class="inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-white rounded-sm shadow-sm tooltip bg-gray-600"
    >
      <div>Email Account</div>
      <div class="text-gray-300">{{ userStore.firstName }} {{ userStore.lastName }}</div>
      <div class="text-gray-300">{{ userStore.email }}</div>
    </div>
    <div
      v-show="openMenu"
      class="absolute z-10 w-80 right-2 bg-white top-14 rounded-lg custom-shadow"
    >
      <div class="w-full flex justify-center">
        <img class="rounded-full w-20 mt-4" :src="userStore.picture" />
      </div>
      <div class="text-gray-700 w-full flex justify-center mt-2 text-lg">
        {{ userStore.firstName }} {{ userStore.lastName }}
      </div>
      <div class="text-gray-700 w-full flex justify-center text-sm pb-4 border-b">
        {{ userStore.email }}
      </div>
      <div class="flex justify-center my-5">
        <button
          @click="logout"
          class="bg-transparent text-xs hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-300 rounded"
        >
          Sign out of Email
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Tooltip, type TooltipOptions } from 'flowbite'
import { useUserStore } from '@/stores/user-store'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const openMenu = ref<boolean>(false)
const router = useRouter()

const logout = () => {
  userStore.clearUser()
  setTimeout(() => {
    router.push('/')
  }, 200)
}

onMounted(() => {
  const $targetEl = document.getElementById(`tooltip-content-user`) as HTMLElement
  const $triggerEl = document.getElementById(`tooltip-trigger-user`) as HTMLElement

  const options: TooltipOptions = {
    placement: 'bottom',
    triggerType: 'hover'
  }

  if ($targetEl) {
    new Tooltip($targetEl, $triggerEl, options)
  }
})
</script>
<style lang="scss" scoped>
#BaseProfile {
  .custom-shadow {
    box-shadow: -1px 1px 6px -2px rgba(36, 36, 36, 0.58);
    -webkit-box-shadow: -1px 1px 6px -2px rgba(36, 36, 36, 0.58);
    -moz-box-shadow: -1px 1px 6px -2px rgba(36, 36, 36, 0.58);
  }
}
</style>
