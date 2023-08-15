<template>
  <div id="LoginPage" class="grid h-screen place-items-center">
    <div class="flex flex-col items-center justify-center">
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
import { type IGoogleLoginCallbackData } from '@/shared/types/google-login-callback'

const router = useRouter()
const userStore = useUserStore()

const callback = async (data: IGoogleLoginCallbackData): Promise<void> => {
  await userStore.getUserDetailsFromGoogle(data)
  setTimeout(() => {
    router.push('/email')
  }, 300)
}
</script>
