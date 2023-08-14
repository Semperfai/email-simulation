<template>
  <div id="BaseIcon">
    <div
      class="flex items-center justify-center rounded-full cursor-pointer w-10 h-10 transition-all duration-200 ease-in"
      :class="hoverColor"
      :data-tooltip-target="`tooltip-no-arrow-${iconString}`"
      data-tooltip-placement="bottom"
    >
      <component :is="icon" :size="iconSize" :fillColor="iconColor" />
    </div>
    <div
      :id="`tooltip-no-arrow-${iconString}`"
      role="tooltip"
      class="inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-white rounded-sm shadow-sm opacity-0 tooltip dark:bg-gray-600 delay-150"
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
import { type IconProps } from './types'
import { ref, type Component } from 'vue'

const { iconString, iconColor, text, hoverColor } = defineProps<IconProps>()

const icon = ref<Component | string>('')

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
</script>
