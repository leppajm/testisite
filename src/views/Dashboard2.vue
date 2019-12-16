<template>
  <div class="Dashboard">
    <h1 class="headline grey--text">Tapahtumat</h1>
      <v-container class="my-5">

        <v-card flat class="px-2" v-for= "project in projects" :key= "project.title">
          <v-layout row wrap :class="`pa-3 project ${project.status}`">
        
           
            <v-flex xs12 md3 class="px-3">
              <div class="caption grey--text">Tapahtuma</div>
              <div class="py-3">{{project.title}}</div>
            </v-flex>
           <!-- <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Person</div>
              <div class="py-3">{{project.person}}</div>
            </v-flex>-->
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Ajankohta</div>
              <div class="py-3">{{project.due}}</div>
            </v-flex>
            <v-flex xs2 sm4 md2>
              <div class="caption grey--text">Status</div>
              <div class="py-3">{{project.status}}</div>
            </v-flex>
            <v-flex xs2 sm4 md2>
              <div class="caption grey--text">Lisätiedot</div>
            
              <v-card-actions>
                  <v-btn
                    icon
                    small
                    @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
      
              </v-card-actions>
              
            </v-flex>
          <v-flex xs2 sm4 md1>
              <div class="caption grey--text">Valitse</div>
              <!-- {{selected}}-->
                  <v-checkbox v-model="selected" :value="project.title" class="pa-0"></v-checkbox>
            </v-flex>
 
            <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    <p class="font-weight-light">
                    {{project.content}}
                    </p>
                  </v-card-text>
                </div>
              </v-expand-transition>

          </v-layout>
          <v-divider></v-divider>
        </v-card>
        
      </v-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'dashboard',
 
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ],
      show: false,
      selected:[]
    }
  }
}
</script>
<style>

.project.complete{
  border-left: 4px solid #3cd1c2;
}

.project.ongoing{
  border-left: 4px solid orange;
}
.project.overdue{
  border-left: 4px solid tomato;
}

</style>
