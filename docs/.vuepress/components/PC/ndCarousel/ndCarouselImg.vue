
<template>
    <nd-carousel @change="change" >
        <nd-carousel-item v-for="(item,index) in imgList" :key="index" :imgUrl="item.imgUrl">
        </nd-carousel-item>
        
    </nd-carousel>
</template>

<script>
import ndCarousel from '../../../../../src/packages/PC/nd-carousel/src/nd-carousel.vue';
import ndCarouselItem from '../../../../../src/packages/PC/nd-carousel-item/src/nd-carousel-item.vue';

export default {
  name: "ndCarouselImg",
  components: {ndCarousel,ndCarouselItem},
  setup() {
    let imgList = [
        {imgUrl : 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'},
        {imgUrl : 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'},
        {imgUrl : 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'},
        {imgUrl : 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'},

    ]
    const change = (e) => {
        console.log(e)
    }
    
    return {
      change,
      imgList
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