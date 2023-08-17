<template>
  <email-page-layout>
    <template #top-menu>
      <top-menu />
    </template>
    <template #side-menu>
      <side-menu @click="newMessageOpen = !newMessageOpen" />
    </template>
    <router-view />
    <template #toolbar>
      <base-toolbar class="m-4" />
    </template>
    <template #message-section>
      <new-message-section
        @update-new-message-open="updateNewMessageOpen"
        :new-message-open="newMessageOpen"
      />
    </template>
  </email-page-layout>
</template>

<script setup lang="ts">
import SideMenu from '@/components/SideMenu/SideMenu.vue'
import TopMenu from '@/components/TopMenu/TopMenu.vue'
import BaseToolbar from '@/components/BaseToolbar/BaseToolbar.vue'
import NewMessageSection from '@/components/NewMessageSection/NewMessageSection.vue'
import EmailPageLayout from '@/components/Layouts/EmailPageLayout.vue'
import { ref } from 'vue'

const newMessageOpen = ref<boolean>(false)
const updateNewMessageOpen = (value: boolean) => {
  newMessageOpen.value = value
}
</script>
