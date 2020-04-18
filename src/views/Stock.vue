<template>
  <v-container>
    <v-card>
      <v-card-title>
        Estoque
        <v-spacer></v-spacer>
        <v-text-field v-model="search" label="Pesquisar" append-icon="mdi-magnify" single-line></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="desserts" :search="search">
        <template v-slot:top>
          <v-toolbar flat>
            <v-dialog v-model="dialog" max-width="800px">
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-row>oi</v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="primary" @click="close">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon color="blue"  @click="editItem(item)">mdi-package-variant</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    search: "",
    headers: [
      {
        text: "Nome",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Lote interno", value: "internalLot" },
      { text: "Data de entrada", value: "inputDate", align: "center" },
      { text: "Data de validade", value: "expirationDate" , align: "center" },
      { text: "Quantidade em estoque", value: "quantityInStock", align: "center" },
      { text: "Movimentações", value: "actions", sortable: false, align: "center" }
    ],
  }),

    watch: {
      dialog(val) {
        val || this.close();
      }
    },
    created() {
      this.initialize();
    },

    methods: {
      initialize() {
        this.desserts = [
          {
          name: "Polimero H20C60H",
          internalLot: 159,
          inputDate: '23/04/20',
          expirationDate: '20/04/20',
          quantityInStock: 24,
        },
        {
          name: "Alcool 96%",
          internalLot: 237,
          inputDate: '23/04/20',
          expirationDate: '23/04/20',
          quantityInStock: 37,
        },
        {
          name: "Coservante",
          internalLot: 262,
          inputDate: '23/04/20',
          expirationDate: '23/04/20',
          quantityInStock: 23,
        },
        {
          name: "Polimero H20C60H",
          internalLot: 159,
          inputDate: '23/04/20',
          expirationDate: '20/04/20',
          quantityInStock: 24,
        },
        {
          name: "Alcool 96%",
          internalLot: 237,
          inputDate: '23/04/20',
          expirationDate: '23/04/20',
          quantityInStock: 37,
        },
        {
          name: "Coservante",
          internalLot: 262,
          inputDate: '23/04/20',
          expirationDate: '23/04/20',
          quantityInStock: 23,
        },
        {
          name: "Polimero H20C60H",
          internalLot: 159,
          inputDate: '23/04/20',
          expirationDate: '20/04/20',
          quantityInStock: 24,
        },
        {
          name: "Alcool 96%",
          internalLot: 237,
          inputDate: '23/04/20',
          expirationDate: '23/04/20',
          quantityInStock: 37,
        },
        {
          name: "Coservante",
          internalLot: 262,
          inputDate: '23/04/20',
          expirationDate: '23/04/20',
          quantityInStock: 23,
        },
        ];
      },
       editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },


    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    }
};
</script>