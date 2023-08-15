<template>
  <div id="LoginPage" class="grid h-screen place-items-center">
    <div>
      <img src="/imgs/email-logo.png" alt="email-login" />
      <div class="flex justify-center m-5">
        <GoogleLogin :callback="callback" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

const callback = async (response) => {
  let res = await axios('http://localhost:4001/api/google-login', {
    token: response.credential
  })

  console.log(res)
}
</script>

<style lang="scss" scoped></style>
