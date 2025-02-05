<template>
  <div>
    <topNav/>

  </div>
</template>
<script>
import test from "./components/test.vue";
import topNav from './components/top-nav.vue';
export default {
  components: {
    test,
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