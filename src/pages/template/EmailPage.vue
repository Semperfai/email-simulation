<template>
  <div id="EmailPage" class="bg-gray-50 h-screen">
    <div id="TopMenu" class="flex items-center p-2 md:gap-10">
      <div class="flex justify-start items-center px-3.5">
        <base-icon
          icon-string="menu"
          icon-color="#63636"
          :icon-size="20"
          hover-color="hover:bg-gray-200"
          text="Main Menu"
          class="-ml-2 mr-2"
        />
        <img width="70" class="md:w-[70px] w-[40px]" src="imgs/email-logo.png" alt="logo" />
      </div>
      <div class="flex w-full justify-beetwen">
        <div class="input-width w-full bg-gray-200 flex items-center p-1 px-2 rounded-lg">
          <base-icon
            iconString="magnify"
            iconColor="#636363"
            text="Search"
            hoverColor="hover:bg-gray-300"
          />
          <input
            placeholder="Search mail"
            class="w-full h-10 bg-gray-200 border-transparent border-none focus:ring-0 outline-none placeholder-gray-900 placeholder:opacity-50"
            type="text"
          />
          <base-icon
            iconString="tune"
            iconColor="#636363"
            text="Show search options"
            hoverColor="hover:bg-gray-300"
          />
        </div>
        <div class="flex w-32 justify-between items-center ml-6">
          <base-icon
            iconString="cog"
            iconColor="#636363"
            text="Settings"
            hoverColor="hover:bg-gray-200"
          />
          <base-icon
            iconString="apps"
            iconColor="#636363"
            text="Google apps"
            hoverColor="hover:bg-gray-200"
          />

          <base-profile />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/BaseIcon/BaseIcon.vue'
import BaseProfile from '@/components/BaseProfile/BaseProfile.vue'
</script>
<style lang="scss">
#EmailPage {
  overflow: hidden;

  .help-icon-gray {
    border: 2px solid rgb(132, 132, 132);
  }

  .input-width {
    max-width: 700px;
  }

  .custom-gray-color {
    background-color: rgb(232, 232, 232);
  }

  .side-menu {
    width: 300px;
  }

  .side-menu-item {
    width: 250px;
  }
}

#NewMessageSection {
  overflow: hidden;
  width: 560px;
  height: 570px;
}
</style>
