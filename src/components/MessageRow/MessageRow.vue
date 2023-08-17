<template>
  <div id="MessageRow">
    <div
      class="border-b hover:border-gray-200 hover:border-t hover:border-y-2 hover:border-x cursor-pointer"
      :class="[hasViewed ? 'bg-gray-100' : '']"
    >
      <div class="flex items-center px-4 py-2">
        <div class="flex items-center">
          <component
            :is="isSelected ? CheckboxOutlineIcon : CheckboxBlankOutlineIcon"
            @click="isSelected = !isSelected"
            :size="19"
            fillColor="#636363"
          />
          <star-outline-icon :size="17" fillColor="#636363" class="ml-4" />
        </div>

        <div class="flex items-center w-full">
          <router-link :to="`/email/message/${id}`" class="w-full">
            <div class="flex justify-between items-center">
              <div class="flex items-center w-full">
                <div class="font-semibold text-sm ml-4 truncate-from">
                  {{ from }}
                </div>
                <div class="flex items-center justify-between">
                  <div class="mr-3.5 text-sm font-semibold truncate-subject">
                    {{ subject }}
                  </div>
                  <div class="text-sm text-gray-500 truncate-body pr-4">{{ body }}...</div>
                </div>
              </div>
              <div class="text-right truncate mr-4 w-full text-xs font-semibold">{{ time }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckboxOutlineIcon from 'vue-material-design-icons/CheckboxOutline.vue'
import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue'
import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue'
import { watch, ref } from 'vue'
import { type MessageRowProps } from './types'
import { type EmailId } from '@/shared/types/email'

const { id, from, subject, body, time, hasViewed } = defineProps<MessageRowProps>()

const emit = defineEmits<{
  selectedId: [{ id: EmailId; value: boolean }]
}>()

const isSelected = ref<boolean>(false)

watch(isSelected, (bool) => {
  emit('selectedId', { id: id as EmailId, value: bool })
})
</script>

<style lang="scss" scoped>
#MessageRow {
  .truncate-from {
    width: 11rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .truncate-subject {
    max-width: 13rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .truncate-body {
    max-width: 25rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
