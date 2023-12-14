<template>
    <div>
        <h3>{{tableTitle}}</h3>
        <table>
            <thead>
                <tr>
                    <th>Encabezado 1</th>
                    <th>Encabezado 2</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fila 1, Columna 1</td>
                    <td>Fila 1, Columna 2</td>
                    <td>Editar/Eliminar</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Table",
    props: {
    tableTitle:{
      type: String,
      required: true,
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