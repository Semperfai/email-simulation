<template>
  <div
    v-if="newMessageOpen"
    id="NewMessageSection"
    class="md:h-[560px] md:w-[550px] h-[400px] w-[280px] overflow-hidden absolute bottom-5 right-0 mr-20 rounded-t-lg shadow-2xl bg-white"
  >
    <div
      class="flex items-center justify-between rounded-t-lg w-full text-sm px-3.5 py-2.5 bg-gray-200"
    >
      <h2>New message</h2>
      <close-icon @click="emit('updateNewMessageOpen', false)" class="cursor-pointer" :size="19" />
    </div>
    <div class="relative flex items-center px-3.5 py-2">
      <p class="text-sm text-gray-700">To:</p>
      <input
        v-model="emailData.toEmail"
        class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
        type="text"
      />
      <div class="absolute border-b w-[calc(100%-30px)] bottom-0" />
    </div>
    <div class="relative flex items-center px-3.5 py-2">
      <p class="text-sm text-gray-700">Subject:</p>
      <input
        v-model="emailData.subject"
        class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
        type="text"
      />
      <div class="absolute border-b w-[calc(100%-30px)] bottom-0" />
    </div>
    <div class="m-1">
      <textarea
        v-model="emailData.body"
        style="resize: none"
        class="w-full border-transparent border-none focus:ring-0 outline-none"
        rows="14"
      ></textarea>
    </div>
    <div class="p-4 mt-5">
      <button
        @click="sendEmail"
        class="bg-blue-700 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full"
      >
        Send message
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from 'vue-material-design-icons/Close.vue'
import { type ISendEmailData } from '@/shared/types/email'
import { useUserStore } from '@/stores/user/user-store'
import { reactive } from 'vue'
import { emailValidator } from '@/shared/lib/helpers/emailValidator'

const { newMessageOpen } = defineProps<{
  newMessageOpen: boolean
}>()

const emit = defineEmits<{
  updateNewMessageOpen: [value: boolean]
}>()

const userStore = useUserStore()
const emailData = reactive<ISendEmailData>({
  toEmail: '',
  subject: '',
  body: ''
})

const sendEmail = async (): Promise<void> => {
  emailValidator(emailData.toEmail)
  await userStore.sendEmail({
    toEmail: emailData.toEmail,
    subject: emailData.subject,
    body: emailData.body
  })

  emit('updateNewMessageOpen', false)
  emailData.toEmail = ''
  emailData.subject = ''
  emailData.body = ''
}
</script>
