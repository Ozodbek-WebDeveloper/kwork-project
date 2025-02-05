<template>
    <div class="top-nav  "  >
        <div class="logo">
            <h1>FFahka1</h1>
        </div>
        <v-card-title class="d-flex align-center pe-2">  
        <v-text-field
          v-model="search"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-card-title>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>