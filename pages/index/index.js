Page({

  data: {
    swiperImg: ['/images/banner1.png', '/images/banner3.jpg', '/images/banner3.png'],
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