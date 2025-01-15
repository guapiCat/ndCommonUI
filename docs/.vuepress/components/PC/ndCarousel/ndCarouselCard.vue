
<template>
    <nd-carousel @change="change" type="card">
        <nd-carousel-item>
            <h3 class="item">1</h3>
        </nd-carousel-item>
        <nd-carousel-item>
            <h3 class="item">2</h3>
        </nd-carousel-item>
        <nd-carousel-item>
            <h3 class="item">3</h3>
        </nd-carousel-item>
    </nd-carousel>
</template>

<script>
import ndCarousel from '../../../../../src/packages/PC/nd-carousel/src/nd-carousel.vue';
import ndCarouselItem from '../../../../../src/packages/PC/nd-carousel-item/src/nd-carousel-item.vue';


export default {
  name: "",
  components: {ndCarousel,ndCarouselItem},
  setup() {

    const change = (e) => {
        console.log(e)
    }
    
    return {
      change
    }
  }
}
</script>

<style scoped>
.item {
    width: 100%;
    height: 100%;
    background:#C1CBDB ;
    line-height:100%;
    text-align: center;
}
</style>