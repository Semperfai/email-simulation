<template>
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
      <router-link to="/email">
        <img width="70" class="md:w-[70px] w-[40px]" src="/imgs/email-logo.png" alt="logo" />
      </router-link>
    </div>
    <div class="flex w-full md:justify-between justify-center ml-4">
      <div class="input-width md:w-full w-[70%] bg-gray-200 flex items-center p-1 px-2 rounded-lg">
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
      <div class="relative flex w-32 justify-between items-center ml-6">
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
</template>

<script setup lang="ts"></script>
