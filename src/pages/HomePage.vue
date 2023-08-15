<template>
  <div id="HomePage" class="w-full bg-white ml-5 rounded-t-xl h-full shadow-sm">
    <div class="border-b">
      <div class="flex items-center justify-between px-4 my-3">
        <base-icon
          class="-m-2 -ml-2.5"
          iconString="trash"
          :iconSize="19"
          iconColor="#636363"
          text="Delete selected"
          hoverColor="hover:bg-gray-100"
        />
        <div class="text-xs text-gray-500">1-50 of 153</div>
      </div>
    </div>
    <div v-for="email in userStore.emails" :key="email">
      <message-row
        :from="email.firstName + ' ' + email.lastName"
        :hasViewed="email.hasViewed"
        :subject="email.subject"
        :body="email.body"
        :time="email.createdAt"
        :id="email.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MessageRow from '@/components/MessageRow/MessageRow.vue'
import { useUserStore } from '@/stores/user/user-store'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(() => {
  userStore.getEmailsByEmailAddress()
})
</script>
