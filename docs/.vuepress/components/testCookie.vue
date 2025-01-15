<template>
  <button @click="showCookieSet = true">添加cookie</button>
  <div v-if="showCookieSet">
    <input v-model="cookieValue.name" placeholder="cookie名称"/>
    <input v-model="cookieValue.value" placeholder="cookie值"/>
    <button @click="addCookie" v-if="cookieValue.name">add cookie</button>
  </div>
  <hr>
  <div>
    <input v-model="state.cookieName" placeholder="cookie名称"/>
    <button @click="getCookieValue">获取</button>
    <span style="margin-left: 20px">{{ state.cookieValue }}</span>
  </div>
  <hr>
  <div>
    <input v-model="state.cookieName" placeholder="cookie名称"/>
    <button @click="deleteCookieName">delete cookie</button>
  </div>
  <div>

  </div>
</template>

<script>
import {ref} from "vue";
import {setCookie, getCookie, deleteCookie} from "../../../src/utils/tools";

export default {
  name: "testCookie",
  setup() {
    const showCookieSet = ref(false)
    const state = ref({
      cookieName: null,
      cookieValue: null
    })
    const getCookieValue = () => {
      state.value.cookieValue = getCookie(state.value.cookieName)
    }
    const cookieValue = ref({
      name: null,
      value: null
    })
    const addCookie = () => {
      setCookie(cookieValue.value.name, cookieValue.value.value)
    }
    const deleteCookieName = () => {
      deleteCookie(state.value.cookieName)
    }
    return {
      deleteCookieName,
      getCookieValue,
      state,
      showCookieSet,
      addCookie,
      cookieValue
    }
  }
}
</script>

<style scoped>

</style>