<template>
  <v-form>
    <v-container>
      <v-card>
        <v-card-text>
          <v-card-title>Movimentação de Estoque</v-card-title>
          <v-divider></v-divider>
          <v-card-subtitle class="primary--text font-weight-bold">Entrada de Produto</v-card-subtitle>
          <v-row>
            <v-col cols="12" md="4">
              <v-select label="Nome do produto"></v-select>
            </v-col>
            <v-col cols="12" md="2">
                <v-text-field label="Custo unitário"></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
               <v-text-field label="Quantidade"></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
               <v-text-field label="Custo do Frete"></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
                <v-text-field outlined="" label="Valor total"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-select label="Fornecedor"></v-select>
            </v-col>
          <v-spacer></v-spacer>
            <v-btn  dark class="primary">Entrada</v-btn>

          </v-row>
            <v-divider></v-divider>
          <v-card-subtitle class="red--text font-weight-bold">Saida de Produto</v-card-subtitle>
          <v-row>
             <v-col cols="12" md="4">
              <v-select label="Nome do produto"></v-select>
            </v-col>
            <v-col cols="12" md="2">
               <v-text-field label="Quantidade"></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-select label="Tipo de movimentação"></v-select>
            </v-col>
            <v-col cols="12" md="3">
              <v-select label="Data de saida"></v-select>
            </v-col>

            <v-btn dark class="red">Saída</v-btn>
          </v-row>

        </v-card-text>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
export default {

}
</script>