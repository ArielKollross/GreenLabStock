import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import '@mdi/font/css/materialdesignicons.css' 
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import {mdiPackageVariant} from '@mdi/js'; 

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'|| 'md' || mdiPackageVariant
      },
      theme: {
        themes: {
          light: {
            primary: '#41B883',
            secondary: '#35495E',
          },
          dark: {
            primary: '#41B883',
            secondary: '#35495E',
            cardColor: '#35495E',
          },
        },
      },
});
