<template>
    <div class="container">
        <ArticlePreview
            v-for="article in articles"
            :key="article.id"
            :id="article.id"
            :title="article.title"
            :articleAuthor="article.articleAuthor"
            :articleDate="article.articleDate"
            :articleDescription="article.articleDescription"
    />
    </div>  
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ArticlePreview from '../components/ArticlePreview.vue'
import { fetchArticles, Article } from '../services/api';

export default defineComponent({
  name: "MainPage",
  components:{
    ArticlePreview
  },
  data(){
    return{
        articles: [] as Article[],
    }
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      try {
        this.articles = await fetchArticles();
      } catch (error) {
        console.error('Error al obtener los artículos:', error);
      }
    }
  }
});

</script>

<style scoped>
.container{
    margin-top: 62px;
    max-height: calc(100vh - 62px)
}

</style>