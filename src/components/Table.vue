<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Encabezado 1</th>
                    <th>Encabezado 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fila 1, Columna 1</td>
                    <td>Fila 1, Columna 2</td>
                </tr>
                <tr>
                    <td>Fila 2, Columna 1</td>
                    <td>Fila 2, Columna 2</td>
                </tr>
                <tr>
                    <td>Fila 3, Columna 1</td>
                    <td>Fila 3, Columna 2</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Table",

  });

</script>

<style scoped>

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