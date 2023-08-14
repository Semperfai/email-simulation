<template>
  <div id="EmailPage" class="bg-gray-50 h-screen">
    <div class="flex items-center p-2">
      <div class="flex justify-start items-center px-3.5">
        <base-icon
          icon-string="menu"
          icon-color="#63636"
          :icon-size="20"
          hover-color="hover:bg-gray-200"
          text="Main Menu"
          class="-ml-2 mr-2"
        ></base-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon/BaseIcon.vue'
</script>
