<template>
<v-form>
  <v-container>
    <v-card>
      <v-card-text>
        <v-card-title>Cadastro do Produto</v-card-title>
        <v-divider></v-divider>
        <v-card-subtitle class="primary--text font-weight-bold">Informações do Produto</v-card-subtitle>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field label="Nome do produto" required></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field label="Codigo do produto"></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-select :items="category" label="Categoria" required></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select :items="unitOfMeasurement" label="Unidade de medida" required></v-select>
          </v-col>
        </v-row>

        <v-card-subtitle class="primary--text font-weight-bold">Estoque</v-card-subtitle>
        <v-row>
          <v-col cols="12" md="2">
            <v-text-field label="Estoque Inicial" ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field label="Lote interno" required></v-text-field>
          </v-col>

        <v-col cols="12" md="3">
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                label="Data de entrada"
                persistent-hint
                prepend-icon="event"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
          </v-menu>
        </v-col>

          <v-col cols="12" md="3">
             <v-menu
            ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                label="Data de validade"
                persistent-hint
                prepend-icon="event"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
                required
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
          </v-menu>
          </v-col>
        </v-row>
        <v-card-subtitle class="primary--text font-weight-bold">Informações do Fornecedor</v-card-subtitle>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field label="Custo do produto"></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field label="Nome do Fornecedor" required></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field label="Lote do Fabricante" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Nº da nota"></v-text-field>
          </v-col>
        </v-row>

        <v-btn dark class="primary">Salvar</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</v-form>
</template>

<script>
export default {
data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,


     unitOfMeasurement: [
      "Tonelada (t)","Kilograma (kg)","Gramas (g)","Litros (L)","Mililitros (ml)","Unidade (un)","Caixa (cx)"
    ],
    category: ["Matéria Prima", "Embalagem", "Caixa", "Rótulo"],
  }),

  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    },
  },

  watch: {
    date () {
      this.dateFormatted = this.formatDate(this.date)
    },
  },

  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
};
</script>