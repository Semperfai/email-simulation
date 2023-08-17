<template>
  <div>
    <div class="w-6 h-6 flex justify-center mb-7">
      <img class="object-contain cursor-pointer" src="/imgs/calendar.png" alt="calendar" />
    </div>
    <div class="w-6 h-6 flex justify-center mb-7">
      <img class="object-contain cursor-pointer" src="/imgs/contacts.png" alt="contacts" />
    </div>
    <div class="w-6 h-6 flex justify-center mb-7">
      <img class="object-contain cursor-pointer" src="/imgs/tasks.png" alt="tasks" />
    </div>
    <div class="w-6 h-6 flex justify-center mb-7">
      <img class="object-contain cursor-pointer" src="/imgs/keep.png" alt="keep" />
    </div>
    <div class="w-6 flex mb-7 border border-gray-300" />

    <div class="w-6 h-6 flex justify-center mb-7">
      <plus-icon />
    </div>
  </div>
</template>

<script setup lang="ts">
import PlusIcon from 'vue-material-design-icons/Plus.vue'
</script>

<style scoped></style>
