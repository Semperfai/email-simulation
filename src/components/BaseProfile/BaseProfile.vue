<template>
  <div id="BaseProfile">
    <img
      id="tooltip-trigger-user"
      class="rounded-full w-8 cursor-pointer"
      src="https://via.placeholder.com/40"
      alt="avatar"
    />
    <div
      id="tooltip-content-user"
      role="tooltip"
      class="inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-white rounded-sm shadow-sm opacity-0 tooltip bg-gray-600 delay-150"
    >
      <div>Email Account</div>
      <div class="text-gray-300">BEBRA MEN</div>
      <div class="text-gray-300">sadasdas@gmail.com</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { Tooltip, type TooltipOptions } from 'flowbite'

onMounted(() => {
  const $targetEl = document.getElementById(`tooltip-content-user`)
  const $triggerEl = document.getElementById(`tooltip-trigger-user`)

  const options: TooltipOptions = {
    placement: 'auto',
    triggerType: 'hover'
  }

  if ($targetEl) {
    new Tooltip($targetEl, $triggerEl, options)
  }
})
</script>
<style lang="scss" scoped></style>
