<template>
    <div class="container">
    <h1>Bienvenido al blog</h1>
    <ArticlePreview/>
    </div>  
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ArticlePreview from '../components/ArticlePreview.vue'

export default defineComponent({
  name: "MainPage",
  components:{
    ArticlePreview
  }
});

</script>

<style scoped>
.container{
    margin-top: 62px;
    max-height: calc(100vh - 62px)
}

</style>