
const WXAPI = require('apifm-wxapi');
Page({

  data: {
    swiperImg: ['/assets/images/banner1.png', '/assets/images/banner3.jpg', '/assets/images/banner3.png'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
  },
  onLoad: function (e) {   

    WXAPI.banners().then(res => {
      if (res.code == 0) {
        this.setData({
          banners: res.data
        })
      }
    })
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
})