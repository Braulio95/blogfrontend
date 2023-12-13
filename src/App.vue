<template>
  <NavBar/>
  <MainPage/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue"
import MainPage from "./modules/MainPage.vue"

export default defineComponent({
  name: "App",
  components:{
    NavBar, MainPage
  }
});
</script>
