<template>
    <div class="dashboard-container">
        <div class="container">
            <h2>Bienvenido al dashboard</h2>
            <Table table-title="Articulos" :headers="headers" :rows="articles"></Table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "../components/Table.vue"
import { fetchArticles, Article } from '../services/api';

export default defineComponent({
    name: "Dashboard",
    components:{
        Table
    },
    data(){
    return{
        articles: [] as Article[],
        headers: ['id','titulo','autor','fecha de creacion','contenido' ]
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

.dashboard-container{
    margin-top: 62px;
}
table {
      border-collapse: collapse;
      width: 50%;
      margin: 20px;
    }

    table, th, td {
      border: 1px solid black;
    }

    th, td {
      padding: 10px;
      text-align: center;
    }

</style>