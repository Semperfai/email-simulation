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
        <router-link to="/email">
          <img width="70" class="md:w-[70px] w-[40px]" src="/imgs/email-logo.png" alt="logo" />
        </router-link>
      </div>
      <div class="flex w-full md:justify-between justify-center ml-4">
        <div
          class="input-width md:w-full w-[70%] bg-gray-200 flex items-center p-1 px-2 rounded-lg"
        >
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
    <div class="flex w-full justify-between">
      <div id="SideMenu" class="side-menu">
        <div
          @click="newMessageOpen = !newMessageOpen"
          class="flex items-center justify-center bg-sky-200 w-36 h-5 mt-2 rounded-2xl ml-2 p-3 md:p-5 cursor-pointer"
        >
          <pencil-outline-icon :size="25" class="mr-4" />
          <span class="text-sm">Compose</span>
        </div>
        <div class="my-5"></div>
        <router-link to="/email">
          <div class="flex side-menu-item justify-between px-6 py-1.5 bg-blue-100 rounded-r-full">
            <div class="flex items-center">
              <inbox-icon :size="17" />
              <p class="text-sm pl-4 font-semibold">Inbox</p>
            </div>

            <p class="grid place-items-center ml-2 text-sm">13</p>
          </div>
        </router-link>
        <div class="flex side-menu-item justify-between px-6 py-1.5">
          <div class="flex items-center">
            <star-outline-icon :size="17" />
            <p class="text-sm pl-4">Starred</p>
          </div>
        </div>
        <div class="flex side-menu-item justify-between px-6 py-1.5">
          <div class="flex items-center">
            <clock-outline-icon :size="17" />
            <p class="text-sm pl-4">Snoozed</p>
          </div>
        </div>
        <div class="flex side-menu-item justify-between px-6 py-1.5">
          <div class="flex items-center">
            <send-outline-icon :size="17" />
            <p class="text-sm pl-4">Sent</p>
          </div>
        </div>
        <div class="flex side-menu-item justify-between px-6 py-1.5">
          <div class="flex items-center">
            <file-outline-icon :size="17" />
            <p class="text-sm pl-4">Drafts</p>
          </div>
        </div>
      </div>
      <!-- body-changes -->
      <router-view />
      <!-- body-changes -->
      <div class="m-4">
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
    </div>

    <div
      v-if="newMessageOpen"
      id="NewMessageSection"
      class="md:h-[560px] md:w-[550px] h-[400px] w-[280px] overflow-hidden absolute bottom-5 right-0 mr-20 rounded-t-lg shadow-2xl bg-white"
    >
      <div
        class="flex items-center justify-between rounded-t-lg w-full text-sm px-3.5 py-2.5 bg-gray-200"
      >
        <h2>New message</h2>
        <close-icon @click="newMessageOpen = false" class="cursor-pointer" :size="19" />
      </div>
      <div class="relative flex items-center px-3.5 py-2">
        <p class="text-sm text-gray-700">To:</p>
        <input
          class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
          type="text"
        />
        <div class="absolute border-b w-[calc(100%-30px)] bottom-0" />
      </div>
      <div class="relative flex items-center px-3.5 py-2">
        <p class="text-sm text-gray-700">Subject:</p>
        <input
          class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
          type="text"
        />
        <div class="absolute border-b w-[calc(100%-30px)] bottom-0" />
      </div>
      <div class="m-1">
        <textarea
          style="resize: none"
          class="w-full border-transparent border-none focus:ring-0 outline-none"
          rows="14"
        ></textarea>
      </div>
      <div class="p-4 mt-5">
        <button
          class="bg-blue-700 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full"
        >
          Send message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PencilOutlineIcon from 'vue-material-design-icons/PencilOutline.vue'
import InboxIcon from 'vue-material-design-icons/Inbox.vue'
import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue'
import ClockOutlineIcon from 'vue-material-design-icons/ClockOutline.vue'
import SendOutlineIcon from 'vue-material-design-icons/SendOutline.vue'
import FileOutlineIcon from 'vue-material-design-icons/FileOutline.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import { ref } from 'vue'

const newMessageOpen = ref<boolean>(false)
</script>
<style lang="scss">
#EmailPage {
  overflow: hidden;

  .help-icon-gray {
    border: 2px solid rgb(132, 132, 132);
  }

  .input-width {
    max-width: 52rem;
  }

  .custom-gray-color {
    background-color: rgb(232, 232, 232);
  }

  .side-menu {
    width: 200px;
  }

  .side-menu-item {
    width: 90%;
  }
}
</style>
