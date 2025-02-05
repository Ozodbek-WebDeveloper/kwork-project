<template>
  <v-card flat class="mt-5  "   >
    <v-divider></v-divider>
    <v-data-table
      :search="searchQuery"
      :filter-keys="['name']"
      :items="items"
    >
      <template v-slot:header.stock>
        <div class="text-end">Stock</div>
      </template>

      <template v-slot:item.image="{ item,index }">
        <v-card class="my-2 cursor-pointer " elevation="2"  :to="{name:'card',params:{id:index}}"  rounded>
          <v-img
            :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
            height="64"
            cover
          ></v-img>
        </v-card> 
      </template>

      <template v-slot:item.rating="{ item }">
        <v-rating
          :model-value="item.rating"
          color="orange-darken-2"
          density="compact"
          size="small"
          readonly

        ></v-rating>
      </template>

      <template v-slot:item.stock="{ item }">
        <div class="text-end">
          <v-chip
            :color="item.stock ? 'green' : 'red'"
            :text="item.stock ? 'In stock' : 'Out of stock'"
            class="text-uppercase"
            size="small"
            label
          ></v-chip>
        </div>
      </template>
  
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    search: String
  },
  computed: {
    searchQuery() {
      return this.search || ''; 
    }
  },
  data () {
    return {
      items: [
        {
          name: 'Nebula GTX 3080',
          image: '1.png',
          price: 699.99,
          rating: 5,
          stock: true,
        },
        {
          name: 'Galaxy RTX 3080',
          image: '2.png',
          price: 799.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Orion RX 6800 XT',
          image: '3.png',
          price: 649.99,
          rating: 3,
          stock: true,
        },
        {
          name: 'Vortex RTX 3090',
          image: '4.png',
          price: 1499.99,
          rating: 4,
          stock: true,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
        {
          name: 'Cosmos GTX 1660 Super',
          image: '5.png',
          price: 299.99,
          rating: 4,
          stock: false,
        },
      ],
    }
  }
}
</script>
