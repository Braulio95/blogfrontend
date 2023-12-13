<template>
    <nav class="navbar navbar-dark bg-dark fixed-top bg-light d-flex justify-content-center">
        <div class="container container-fluid">
            <a class="navbar-brand" href="/">Braulio's blog</a>
        </div>
    </nav>  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
});
</script>

<style scoped>
.navbar{
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>