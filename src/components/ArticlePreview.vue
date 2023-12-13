<template>
    <div class="preview-container">
        <div class="container">
            <p>Hola mundo</p>
        </div>
    </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArticlePreview",
});

</script>

<style scoped>

.container{
    margin: auto;
}

</style>