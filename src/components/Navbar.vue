<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-btn color="secondary" outlined
      :to="{name: 'Login'}"
    >
        <span>Login</span>
        <v-icon>mdi-beaker-outline</v-icon>
      </v-btn>

    <v-spacer></v-spacer>

    <v-btn class="ma-1 secondary" depressed :to="{name: 'Home'}"> Home</v-btn>
    <v-btn class="ma-1 secondary" depressed :to="{name: 'Stock'}">Estoque</v-btn>
    <v-btn class="ma-1 secondary" depressed :to="{name: 'StockRegister'}">Cadastro</v-btn>
    <v-btn class="ma-1 secondary" depressed :to="{name: 'InventaryMovimentation'}">Operações</v-btn>


    <v-spacer></v-spacer>
      <v-btn color="secondary" outlined>
        <span>Sair</span>
        <v-icon>mdi-run-fast</v-icon>
      </v-btn>

    </v-app-bar>
</template>

<script>
export default {
  data() {

  },
  
}
</script>