<template>
  <v-container>
    <v-card>
      <v-card-title>Relatórios do sistema</v-card-title>
      <v-divider></v-divider>
      <v-card-subtitle>Ultimas movimentações</v-card-subtitle>
      <ExportInventaryMoviment />
      <v-card-subtitle>Produtos para vencer</v-card-subtitle>
      <ValidateDateProducts />
    </v-card>
  </v-container>
</template>

<script>
import ExportInventaryMoviment from  '../components/ExportInventaryMoviment'
import ValidateDateProducts from '../components/ValidateDateProducts'

export default {

components: {
  ExportInventaryMoviment, ValidateDateProducts
}
}
</script>
