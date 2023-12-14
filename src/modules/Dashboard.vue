<template>
    <div class="dashboard-container">
        <div class="container">
            <h2>Bienvenido al dashboard</h2>
            <Table></Table>
            <Table></Table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "../components/Table.vue"

export default defineComponent({
    name: "Dashboard",
    components:{
        Table
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