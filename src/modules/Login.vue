<template>
    <div>
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <label for="email">Correo Electrónico:</label>
        <input type="text" id="email" v-model="email" required>
  
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { loginUser } from '../services/api';
  import { defineComponent } from "vue";
  
  export default defineComponent({
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const token = await loginUser(this.email, this.password);

          if (token === undefined) {
            console.log("token undefined")
            return;
          }

          localStorage.setItem('authToken', token);

          // Utiliza Vue Router para redirigir a la página después de la autenticación exitosa
          this.$router.push('/dashboard');
        } catch (error) {
          console.error('Error en la autenticación:', error);
        }
    }
    },
  });
  </script>
  
  <style>
  /* Estilos del formulario, ajusta según tus necesidades */
  form {
    max-width: 300px;
    margin: 0 auto;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>