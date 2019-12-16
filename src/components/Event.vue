<template>
    
        <v-card text class="text-center pa-2 ma-2  grey lighten-2">
            
                <div class="text-center title my-1">
                {{data1.name}}
                </div>
                <div class="text-center font-weight-light caption my-n2">
                {{data1.pvm}}
                {{data1.city}}
                </div>
                <div class="primary--text title text-center my-2">
                {{thousands_separators(data1.size)}}
                </div>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md6 class="pa-1">
                        <v-card class="ma-1">
                            <div>
                            <p class="text-center font-weight-light caption my-n1">Stillkuva spotti</p>
                            <p class="text-center caption my-n1">HINTA € (alv 0%)</p>
                            </div>
                            <div class="primary--text subtitle-1 text-center my-n1">
                                {{thousands_separators(data1.stillPrice)}}
                            </div>
                            <div class="pa-3 text-center">
                                <v-btn rounded x-small :color="btnColStill" @click="submitStill">{{ labelStill }}</v-btn>
                            </div>

                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm6 md6 class="pa-1">
                        <v-card class="ma-1">
                            <div>
                            <p class="text-center font-weight-light caption my-n1">Videokuva spotti</p>
                            <p class="text-center caption my-n1">HINTA € (alv 0%)</p>
                            </div>
                            <div class="primary--text subtitle-1 text-center my-n1">
                                {{thousands_separators(data1.videoPrice)}}
                            </div>
                            <div class="pa-3 text-center">
                                <v-btn rounded x-small :color="btnCol" @click="submitVideo">{{ labelVideo }}</v-btn>
                            </div>

                        </v-card>
                    </v-flex>

                </v-layout>
                <!-- <v-layout row wrap>
                    <v-flex>
                        <div>
                            <p class="text-center font-weight-light caption my-n1">Stillkuva spotti</p>
                            <p class="text-center caption my-n1">HINTA € (alv 0%)</p>
                        </div>
                        <div class="primary--text subtitle-1 text-center my-n1">
                            {{thousands_separators(data1.stillPrice)}}
                        </div>
                        <div class="pa-3 text-center">
                            <v-btn rounded x-small color="primary">valitse</v-btn>
                        </div>

                    </v-flex>
                    <v-flex>
                        <div>
                            <p class="text-center font-weight-light caption my-n1">Videokuva spotti</p>
                            <p class="text-center caption my-n1">HINTA € (alv 0%)</p>
                        </div>
                        <div class="primary--text subtitle-1 text-center my-n1">
                            {{thousands_separators(data1.videoPrice)}}
                        </div>
                        <div class="pa-3 text-center">
                            <v-btn rounded x-small color="primary">valitse</v-btn>
                        </div>
                    </v-flex>
               
                    
                </v-layout> -->

                <div class="text-center">
                    <v-dialog
                    v-model="dialog"
                    width="500"
                    >
                    <template v-slot:activator="{ on }">
                        <v-btn
                            rounded
                            small
                            color="orange lighten-2 black--text"
                            dark
                            v-on="on"
                            >
                            Lisätiedot
                        </v-btn>
                    </template>

                        <v-card>
                            <v-card-title
                            class="headline grey lighten-2"
                             primary-title
                            >
                            <p>
                            Lisätiedot:
                            </p>
                            
                            </v-card-title>

                            <v-card-text>
                                <p class="text-center title mb-n2">
                                    {{data1.name}}
                                </p>
                                <p class="text-center font-weight-light caption mt-n2">
                                    {{data1.pvm}}
                                    {{data1.city}}
                                </p>
                                    {{data1.info}}
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                            >
                                ok
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                </v-dialog>
            </div>
        </v-card>
     
</template>
<script>



export default {
    

     props: {
        data1: { type: Object, default: () => ({}) }
        },
    data(){
        return{
            documents:[],
            dialog: false,
            labelVideo: 'valitse',
            valittuVideo: false,
            labelStill: 'valitse',
            valittuStill: false,
            btnCol: 'primary',
            btnColStill: 'primary'
                
        }
        
    },



    computed:{
      
    },

    
    methods:{
        thousands_separators(num)
            {
                var num_parts = num.toString().split(".");
                num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                return num_parts.join(".");
            },
            
            submitVideo() {
                if(this.valittuVideo){
                    this.labelVideo = 'valitse'
                    this.btnCol='primary'
                }else{
                    this.labelVideo=' poista '
                    this.btnCol='green lighten-1'
                }
                this.valittuVideo =! this.valittuVideo; 
            },
            submitStill() {
                if(this.valittuStill){
                    this.labelStill = 'valitse'
                    this.btnColStill='primary'
                }else{
                    this.labelStill=' poista '
                    this.btnColStill='green lighten-1'
                }
                this.valittuStill =! this.valittuStill; 
            }

    }
 
    
    }
</script>