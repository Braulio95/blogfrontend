<template>
    <div class="article-detail">
      <h1>{{ article.title }}</h1>
      <p>{{ article.articleAuthor }}</p>
      <p>{{ article.articleDate }}</p>
      <p>{{ article.articleDescription }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { Article } from '../services/api';
  
  export default defineComponent({
    data() {
      return {
        article: {} as Article,
      };
    },
  });
  </script>
  