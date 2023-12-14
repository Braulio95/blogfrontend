<template>
    <div class="preview-container">
        <div id="preview-article-container" class="container">
            <img class="article-thumbnail" src="https://picsum.photos/400" alt="">
            <div class="info-container" @click="handleArticleClick">
                <p class="title"><router-link :to="{ name: 'articleDetail', params: { id: id }}">{{ title }}</router-link></p>
                <p class="article-author">Por: {{ articleAuthor }}</p>
                <p class="article-date">Publicado el: {{ articleDate }}</p>
                <p class="article-short">
                    {{ articleDescription }}
                </p>
            </div>
        </div>
    </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: "ArticlePreview",
  components:{
    RouterLink
  },
  props: {
    id:{
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    articleAuthor: {
      type: String,
      required: true,
    },
    articleDate: {
      type: String,
      required: true,
    },
    articleDescription: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleArticleClick() {
      this.$router.push({ name: 'articleDetail', params: { id: this.id } });
    },}
});

</script>

<style scoped>
.container{
    margin: auto;
    display: flex;
    padding-block: 1rem;
}

.preview-container{
    border-bottom: 1px solid black;
}

.article-thumbnail{
    width: 200px;
    margin-inline-end: 1rem;
}

.info-container{
    display: block;
}

.title{
    font-size: 2rem;
    font-weight: 700;
}

p.article-author, p.article-date{
    color: gray;
    font-size: 0.7rem;
}

@media (max-aspect-ratio: 3/4) {
#preview-article-container{
    display: flex;
    flex-direction: column;
}

.article-thumbnail{
    margin-inline: auto;
    border-radius: 50%;
}

.info-container{
    display: flex;
    flex-direction: column;
}

p.title{
    margin-inline: auto;
}
}

</style>