<template>
  <div id="LoginPage" class="grid h-screen place-items-center">
    <div class="flex flex-col items-center justify-center">
      {{ userStore }}
      <img src="/imgs/email-logo.png" alt="email-login" />
      <div class="flex justify-center m-5">
        <GoogleLogin :callback="callback" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user-store'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

const callback = async (response) => {
  await userStore.getUserDetailsFromGoogle(response)
  setTimeout(() => {
    router.push('/email')
  }, 300)
}
</script>
