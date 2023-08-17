<template>
  <div id="EmailPage" class="bg-gray-50 h-screen">
    <top-menu />
    <div class="flex w-full justify-between">
      <side-menu @click="newMessageOpen = !newMessageOpen" />
      <!-- body-changes -->
      <router-view />
      <!-- body-changes -->
      <base-toolbar class="m-4" />
    </div>
    <new-message-section
      @update-new-message-open="updateNewMessageOpen"
      :new-message-open="newMessageOpen"
    />
  </div>
</template>

<script setup lang="ts">
import SideMenu from '@/components/SideMenu/SideMenu.vue'
import TopMenu from '@/components/TopMenu/TopMenu.vue'
import BaseToolbar from '@/components/BaseToolbar/BaseToolbar.vue'
import NewMessageSection from '@/components/NewMessageSection/NewMessageSection.vue'
import { ref } from 'vue'

const newMessageOpen = ref<boolean>(false)
const updateNewMessageOpen = (value: boolean) => {
  newMessageOpen.value = value
}
</script>
<style lang="scss">
#EmailPage {
  overflow: hidden;

  .help-icon-gray {
    border: 2px solid rgb(132, 132, 132);
  }

  .input-width {
    max-width: 52rem;
  }

  .custom-gray-color {
    background-color: rgb(232, 232, 232);
  }

  .side-menu {
    width: 200px;
  }

  .side-menu-item {
    width: 90%;
  }
}
</style>
