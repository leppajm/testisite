import 'material-design-icons-iconfont/dist/material-design-icons.css'; 
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
      theme: {
        light: true,
        options: {
            customProperties: true,
          },
        themes: {
          light: {
            primary: '#9652ff',
            success: '#3cd1c2',
            info: '#ffaa2c',
            error: '#f83e70',
            background: 'red'
          },
        },
      },
});

