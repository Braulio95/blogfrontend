<template>
    <div>
        <h3>{{tableTitle}}</h3>
        <table>
            <thead>
                <tr>
                    <th v-for="header in headers">{{header}}</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in rows">
                    <td v-for="value in Object.values(item)">{{ value }}</td>
                    <td>Editar / Borrar</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Article, User } from "@/services/api";

export default defineComponent({
    name: "Table",
    props: {
    tableTitle:{
      type: String,
      required: true,
    },
    headers:{
        type: Array as PropType<string[]>,
        required:true
    },
    rows:{
        type: Array as PropType<Article[] | User[]>,
        required:true
    },
  },
  });

</script>

<style scoped>

table {
      border-collapse: collapse;
      width: 50%;
      margin: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      
    }

thead{
    background-color: black;
    color: white;
}

table, th, td {
      border: 1px solid black;
      
    }

th, td {
      padding: 10px;
      text-align: center;
    }

</style>