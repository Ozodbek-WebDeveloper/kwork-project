<template>
  <div class="container mx-auto"  >
    <topNav @search-updated="search = $event" />
    <!-- <Test     /> -->
    <RouterView :search="search" ></RouterView>
  </div>
</template>
<script>
import Test from "./components/test.vue";
import topNav from './components/top-nav.vue';
export default {
  components: {
    Test,
    topNav
  },
  data() {
    return {
      search: '',
    }
  }

}
</script>
<style lang="">

</style>