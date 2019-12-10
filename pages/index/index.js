Page({

  data: {
    swiperImg: ['/assets/images/banner1.png', '/assets/images/banner3.jpg', '/assets/images/banner3.png'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
  },


  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
})