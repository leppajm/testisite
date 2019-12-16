<template>
  <div class="Team">
    <h1 class="headline grey--text">Team</h1>

    <v-container fluid class="mx-4 my-5">

   
          <p>{{ selected }}</p>
          <v-checkbox v-model="selected"  :value="firstName"></v-checkbox>
          <v-checkbox v-model="selected" :value="last"></v-checkbox>

  ${checkbox1.toString()}
        tää
    </v-container>
  </div>
</template>
<script>
// @ is an alias to /src


export default {
  name: 'team',
 
  data() {
    return {
      
     
      selected:[],
      firstName:"Juha",
      last:"matti"
    }
  }
}
</script>
