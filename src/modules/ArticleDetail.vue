<template>
    <div class="article-detail" v-if="article">
      <h1>{{ article.title }}</h1>
      <p>{{ article.articleAuthor }}</p>
      <p>{{ article.articleDate }}</p>
      <p>{{ article.articleDescription }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { Article, fetchArticleById } from '../services/api';
  
  export default defineComponent({
    created(){
      console.log()
      const id:string = `${this.$route.params.id}`
      this.fetchSingleArticle(id)
      
    },
    data() {
      return {
        article: {} as Article | null,
      };
    },
    methods:{
      async fetchSingleArticle(id:string) {
      try {
        this.article = await fetchArticleById(id);
      } catch (error) {
        console.error('Error al obtener los artículos:', error);
      }
    }
    }
  });
  </script>
  