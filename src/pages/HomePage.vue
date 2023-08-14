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
    <div>
      <message-row
        from="testmail@mail.com"
        subject="Test 1 row rwow oor"
        body="Body of message lalalalalal"
        time="Jun 20 15:15"
        id="1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MessageRow from '@/components/MessageRow/MessageRow.vue'
</script>
