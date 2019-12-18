<template>

 <div class="Dashboard">
   <h1 class="subheading grey--text">Dashboard</h1>
 
    <v-container class= "my-5">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="unit in items" :key="unit.name">
                <Event :data1="unit" @addProdLine="addLine"/>               
            </v-flex>
        </v-layout>
        <div class="text-center ml-n1 mr-n1 mt-1">
            <v-card
            raised
            color="black lighten-2">

                <div class="text-center subheading yellow--text pa-1">
                    MEDIA SELECTOR
                </div>
                <v-divider color=yellow></v-divider>
               
                        <v-layout row wrap class="ma-0">
                                <v-flex xs3 sm3 md4 class="pa-1">
                                    <div class="text-center white--text subtitle-2">
                                        VALITUT
                                    </div>
                                    
                                </v-flex>
                                <v-flex xs3 sm3 md2 class="pa-1">
                                    <div class="text-center white--text subtitle-2">
                                        TOTAL OTC
                                    </div>
                                    
                                    
                                </v-flex>
                                <v-flex xs3 sm3 md2 class="pa-1">
                                    <div class="text-center white--text subtitle-2">
                                        ALENNUS
                                    </div>
                                    
                                </v-flex>
                                <v-flex xs3 sm3 md2 class="pa-1">
                                    <div class="text-center white--text subtitle-2">
                                        HINTA 
                                    </div>
                                    <p class="white--text overline">(0% ALV)</p>
                                </v-flex>
                        </v-layout>
                        <v-layout row wrap class="ma-0">
                                <v-flex xs3 sm3 md4 class="pa-1">
                                    <div class="text-center font-weight-bold  green--text body-2">
                                        {{itemCount}}
                                    </div>
                                    
                                </v-flex>
                                <v-flex xs3 sm3 md2 class="pa-1">
                                    <div class="text-center font-weight-bold green--text body-2">
                                       {{otcTotal}}
                                    </div>
                                    
                                </v-flex>
                                <v-flex xs3 sm3 md2 class="pa-1">
                                    <div class="text-center font-weight-bold green--text body-2">
                                        {{discount}}%
                                    </div>
                                    
                                </v-flex>
                                <v-flex xs3 sm3 md2 class="pa-1">
                                    <div class="text-center font-weight-bold green--text body-2">
                                        {{discountPrice}}€
                                    </div>
                                    
                                </v-flex>

                       
                                <v-flex xs12 sm12 md2 >
                                        <div class="text-center pt-2 pb-3">
                                                <v-btn rounded color="green" dark>Tilaa</v-btn>
                                            </div>
                                </v-flex>
                        </v-layout>
            </v-card>
       
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
            { id:'1', name: 'Pori Jazz', pvm:'22.02.2020', city:'Pori',size:'5000', stillPrice:'1200', videoPrice:'3300', info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, w',role: 'Web developer', avatar:'/avatar-1.png' },
            { id:'2', name: 'Maaottelu', pvm:'23.02.2020', city:'Rovaniemi',size:'100000',stillPrice:'800', videoPrice:'3800',info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, w',role: 'Graphic designer', avatar:'/avatar-2.png' },
            { id:'3', name: 'AC/DC konsertti', pvm:'29.03.2020', city:'Helsinki',size:'20000',stillPrice:'1500', videoPrice:'4500',info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, w', role: 'Web developer', avatar:'/avatar-3.png' },
            { id:'4', name: 'Kuopi tanssii ja soi', pvm:'22.04.2020', city:'Kuopio',size:'3000',stillPrice:'50', videoPrice:'150',info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, w', role: 'Web developer', avatar:'/avatar-3.png' },
            { id:'5', name: 'Keihäskarnevaalit', pvm:'22.05.2020', city:'Kittiä',size:'1500',stillPrice:'7000', videoPrice:'55000',info:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, w', role: 'Web developer', avatar:'/avatar-3.png' },
            ],
            grandTotal: 0,
            otcTotal:0,
            totalOrder:[],
            discount: 0,
            discountPrice:0
        }
    },
    computed:{

        itemCount(){
            return this.totalOrder.length
        }

    },
    methods:{
        thousands_separators(num)
            {
                var num_parts = num.toString().split(".");
                num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return num_parts.join(".");
            },
        addLine(payload){
            var pos=0

               console.log('juha '+ payload.orderLine.id);

               //if bAddRemove == TRUE => lisäys
               // kun lisätään ei tartte ottaa kantaa kumpi on video vs still
               console.log(payload.orderLine.bAddRemove)
               if(payload.orderLine.bAddRemove){
                   this.totalOrder.push(payload.orderLine)

                    // lisätään totaalinäkyvyyteen uusi rivi
                    this.otcTotal += Number(payload.orderLine.otcValue)

                    // lisäätään totaalilsakuun uusi rivisumma
                    this.grandTotal += Number(payload.orderLine.stillPrice)
                     this.discount=calculateDiscount(this.totalOrder.length)

                     // lasketaan totaali mahd ale
                     this.grandTotal = (Math.round( this.grandTotal * 100 ) / 100) 
                     this.discountPrice=(Math.round( this.grandTotal * 100 ) / 100) * (1-this.discount/100)
                    

                   

               }else{ //poistetaan
                    // kumpaa poistetaan still =id+'_1' ja video = id+'_2' 
                    //if(payload.orderLine.addType ==='still'){

                        pos=objectFindByKey(this.totalOrder, 'id', payload.orderLine.id)

                        if(pos>-1){

                            // POISTETAAN totaalinäkyvyyteen uusi rivi
                            this.otcTotal -= Number(payload.orderLine.otcValue)

                            // poista vanha hinta totaalisummasta
                            this.grandTotal -= Number(payload.orderLine.stillPrice)

                            //poista rivi taulukosta
                            this.totalOrder.splice(pos,1)

                             // tarkista ale ja totaali hinta
                            this.discount=calculateDiscount(this.totalOrder.length)
                            this.discountPrice=(Math.round( this.grandTotal * 100 ) / 100) * (1-this.discount/100)

                        }
                    //}

               }
            }
        
    }
     
};
function objectFindByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return i;
        }
    }
    return -1;
}

function calculateDiscount(pituus){

    var i = pituus

    var discount=0;

    switch(i){

        case 2:
            discount=5;
            break;
        case 3:
            discount=10;
            break;
        case 4:discount=15;
            break;
        case 5:discount=20;
            break;
        case 6:discount=25;
            break;
    }
    if(i>6){
        discount=25
    }
    console.log(i)
    console.log(discount)
    return discount
  
}
</script>