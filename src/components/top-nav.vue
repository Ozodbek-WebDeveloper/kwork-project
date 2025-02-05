<template>
  <div class="top-nav flex w-full items-center justify-between ">
    <router-link :to="{ name: 'home' }">
      <div class="logo cursor-pointer">
        <h1>FFashka1</h1>
      </div>
    </router-link>
    <!--  -->
    <v-card-title class="d-flex align-center pe-2 w-3xl ">  
      <v-text-field
        v-model="searchItem"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
        @update:modelValue="$emit('search-updated', searchItem)"
      ></v-text-field>
    </v-card-title>
    <!--  -->
    

    <v-btn  class="cursor-pointer"   > 
      <v-icon
      color="blue-darken-2"
      icon="mdi-message-text"
      size="large"
      ></v-icon>
     
      <span class="ml-2" > Добавить отзыв</span>
    </v-btn>

    <router-link :to="{name:'login'}" >

      <v-btn  > 
      <span class="ml-2" > Войти</span>
    </v-btn>
    </router-link>

  </div>
</template>

<script>
export default {
  data() {
    return {
      searchItem: ''
    };
  }
}
</script>
