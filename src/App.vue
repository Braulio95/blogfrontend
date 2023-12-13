<template>
  <NavBar/>
  <ArticlePreview/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue"
import ArticlePreview from "./components/ArticlePreview.vue"

export default defineComponent({
  name: "App",
  components:{
    NavBar, ArticlePreview
  }
});
</script>
