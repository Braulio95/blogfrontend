<template>
    <div>
        <h3>{{tableTitle}}</h3>
        <table>
            <thead>
                <tr>
                    <th v-for="header in headers">{{header.toUpperCase()}}</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in rows" :style="{ background: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }">
                    <td v-for="value in Object.entries(item)">
                        {{ value[0] === 'password' ? '*********': value[1].length > 10 ?  `${value[1].slice(0,10)}...`:value[1]}}
                    </td>
                    <td><edit-icon class="icon"/> | <delete-icon class="icon"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Article, User } from "@/services/api";
import EditIcon from '../assets/icons/EditIcon.vue'
import DeleteIcon from '../assets/icons/DeleteIcon.vue'

export default defineComponent({
    name: "Table",
    components:{
        EditIcon,
        DeleteIcon
    },
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

th, td {
      padding: 10px;
      text-align: center;
    }

.icon{
    width: 30px;
    height: 30px;
}

</style>