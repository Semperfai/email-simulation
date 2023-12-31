<template>
  <div id="BaseIcon" v-if="iconString">
    <div
      class="flex items-center justify-center rounded-full cursor-pointer w-10 h-10 transition-all duration-300 ease-in-out"
      :class="[hoverColor]"
      :id="`tooltip-trigger-${iconString}`"
      data-tooltip-placement="bottom"
    >
      <component :is="icon" :size="iconSize" :fillColor="iconColor" />
    </div>

    <div
      :id="`tooltip-content-${iconString}`"
      role="tooltip"
      class="inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-white rounded-sm shadow-sm opacity-0 tooltip bg-gray-600 delay-150"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import TuneIcon from 'vue-material-design-icons/Tune.vue'
import HelpIcon from 'vue-material-design-icons/Help.vue'
import CogOutlineIcon from 'vue-material-design-icons/CogOutline.vue'
import AppsIcon from 'vue-material-design-icons/Apps.vue'
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue'
import TrashCanOutlineIcon from 'vue-material-design-icons/TrashCanOutline.vue'
import { onMounted } from 'vue'
import { Tooltip, type TooltipOptions } from 'flowbite'
import { type IconProps } from './types'
import { type Component, shallowRef } from 'vue'

const { iconString, iconColor, text, hoverColor } = defineProps<IconProps>()

const icon = shallowRef<Component | string | null>(null)

if (iconString === 'menu') {
  icon.value = MenuIcon
}

if (iconString === 'magnify') {
  icon.value = MagnifyIcon
}

if (iconString === 'tune') {
  icon.value = TuneIcon
}

if (iconString === 'help') {
  icon.value = HelpIcon
}

if (iconString === 'cog') {
  icon.value = CogOutlineIcon
}

if (iconString === 'apps') {
  icon.value = AppsIcon
}

if (iconString === 'back') {
  icon.value = ArrowLeftIcon
}

if (iconString === 'trash') {
  icon.value = TrashCanOutlineIcon
}

onMounted(() => {
  // set the tooltip content element
  const $targetEl = document.getElementById(`tooltip-content-${iconString}`)

  // set the element that trigger the tooltip using hover or click
  const $triggerEl = document.getElementById(`tooltip-trigger-${iconString}`)

  // options with default values
  const options: TooltipOptions = {
    placement: 'top',
    triggerType: 'hover'
  }

  if ($targetEl) {
    new Tooltip($targetEl, $triggerEl, options)
  }
})
</script>
