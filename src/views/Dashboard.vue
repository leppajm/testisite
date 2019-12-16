<template>

 <div class="Dashboard">
   <h1 class="subheading grey--text">Dashboard</h1>
 
    <v-container class= "my-5">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="unit in items" :key="unit.name">
                <Event :data1="unit"/>               
            </v-flex>
        </v-layout>
        <div class="text-center">
            <v-card
            raised>

                   <div class="text-center">
                media center
            </div>
     


            </v-card>
            <v-sheet color="orange lighten-2">Hello, world! I'm a simple v-sheet</v-sheet>
        </div>

         <div>
    
  </div>
    </v-container>

</div>
</template>

<script>
import Event from '@/components/Event'

export default {
    components: {Event},
    data(){
        return{
            items: [
            { name: 'Pori Jazz', pvm:'22.02.2020', city:'Pori',size:'5000', stillPrice:'1200', videoPrice:'3300', info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, w',role: 'Web developer', avatar:'/avatar-1.png' },
            { name: 'Maaottelu', pvm:'23.02.2020', city:'Rovaniemi',size:'100000',stillPrice:'800', videoPrice:'3800',info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, w',role: 'Graphic designer', avatar:'/avatar-2.png' },
            { name: 'AC/DC konsertti', pvm:'29.03.2020', city:'Helsinki',size:'20000',stillPrice:'1500', videoPrice:'4500',info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, w', role: 'Web developer', avatar:'/avatar-3.png' },
            { name: 'Kuopi tanssii ja soi', pvm:'22.04.2020', city:'Kuopio',size:'3000',stillPrice:'50', videoPrice:'150',info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, w', role: 'Web developer', avatar:'/avatar-3.png' },
            { name: 'Keihäskarnevaalit', pvm:'22.05.2020', city:'Kittiä',size:'1500',stillPrice:'7000', videoPrice:'55000',info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, w', role: 'Web developer', avatar:'/avatar-3.png' },
            ]
        }
    },
    methods:{
        thousands_separators(num)
            {
                var num_parts = num.toString().split(".");
                num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return num_parts.join(".");
            }
    }
 
};
</script>