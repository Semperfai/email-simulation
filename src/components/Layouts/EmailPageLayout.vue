<template>
  <div id="EmailPage" class="bg-gray-50 h-screen overflow-hidden">
    <slot name="top-menu" />
    <div class="flex w-full justify-between">
      <slot name="side-menu" />
      <!-- body-changes -->
      <slot />
      <!-- body-changes -->
      <slot name="toolbar" />
    </div>
    <slot name="message-section" />
  </div>
</template>
