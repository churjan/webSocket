//获取应用实例
const app = getApp()
let recorderManager = wx.getRecorderManager();
Page({
 
  data: {
    //系统信息
      sysInfo:{},
      iptWay: 'keyboard',
      tempVal:'',
      cursorPos:1,
      msg: [
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: false,
          content: '积分抵抗力司法鉴定快乐十分单反漏掉什么级分类的积分了多少家反垄断法角度来说'
        },
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: true,
          content: '大家好才是真的好哈哈'

        },
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: false,
          content: '积分抵抗力司法鉴定快乐十分单反漏掉什么级分类的积分了多少家反垄断法角度来说'

        },
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: true,
          content: '大家好才是真的好哈哈'

        },
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: false,
          content: '积分抵抗力司法鉴定快乐十分单反漏掉什么级分类的积分了多少家反垄断法角度来说'

        },
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: true,
          content: '大家好才是真的好哈哈'

        },
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: false,
          content: '积分抵抗力司法鉴定快乐十分单反漏掉什么级分类的积分了多少家反垄断法角度来说'

        },
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: true,
          content: '大家好才是真的好哈哈'

        },
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: false,
          content: '积分抵抗力司法鉴定快乐十分单反漏掉什么级分类的积分了多少家反垄断法角度来说'

        },
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: true,
          content: '大家好才是真的好哈哈'

        },
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: false,
          content: '积分抵抗力司法鉴定快乐十分单反漏掉什么级分类的积分了多少家反垄断法角度来说'

        },
        {
          type: 'text',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: true,
          content: '大家好才是真的好哈哈'

        },
      ],
    //视频
    videoObj: {
      isShowVideoModel: false,
      videoUrl: '',
    },
    //语音
    voiceObj:{
      isShowAuthBtn:false,
      isShowVoiceTip: false,
      isCancelVoice:false,
      moveToCancel:false
    },
    isIptFocus:false,
    isEmojiShow:false,
    isCustomShow:false,
    emojiChar: "☺-😋-😌-😍-😏-😜-😝-😞-😔-😪-😭-😁-😂-😃-😅-😆-👿-😒-😓-😔-😏-😖-😘-😚-😒-😡-😢-😣-😤-😢-😨-😳-😵-😷-😸-😻-😼-😽-😾-😿-🙊-🙋-🙏-✈-🚇-🚃-🚌-🍄-🍅-🍆-🍇-🍈-🍉-🍑-🍒-🍓-🐔-🐶-🐷-👦-👧-👱-👩-👰-👨-👲-👳-💃-💄-💅-💆-💇-🌹-💑-💓-💘-🚲",
    //0x1f---
    emoji: [
      "60a", "60b", "60c", "60d", "60f",
      "61b", "61d", "61e", "61f",
      "62a", "62c", "62e",
      "602", "603", "605", "606", "608",
      "612", "613", "614", "615", "616", "618", "619", "620", "621", "623", "624", "625", "627", "629", "633", "635", "637",
      "63a", "63b", "63c", "63d", "63e", "63f",
      "64a", "64b", "64f", "681",
      "68a", "68b", "68c",
      "344", "345", "346", "347", "348", "349", "351", "352", "353",
      "414", "415", "416",
      "466", "467", "468", "469", "470", "471", "472", "473",
      "483", "484", "485", "486", "487", "490", "491", "493", "498", "6b4"
    ],
    emojis:[]
    
   
    
  },
  onLoad(options){
    this.init();
    wx.onUserCaptureScreen(function (res) {
      console.log(res,111)
      console.log('用户截屏了')
    })
  },
  onReady(){
     // 创建并返回 video 上下文 videoContext 对象
    this.videoContext = wx.createVideoContext('myVideo');

  


  }, 
  init(){
    this.initGetSystemInfo();
    this.initEmoji();
    this.initCheckVoiceAuth();
  },
  initGetSystemInfo(){
    this.setData({
      sysInfo: wx.getSystemInfoSync()
    })
    console.log(this.data.sysInfo);
  },
  initCheckVoiceAuth(){
    wx.getSetting({
      success: (res) => {
        if (res.authSetting.hasOwnProperty('scope.record') && !res.authSetting['scope.record']) {
          console.log(123)
          this.setData({
            'voiceObj.isShowAuthBtn': true
          })
        }
      }
    })
  },
  checkVoiceAuth(){
    wx.getSetting({
      success: (res) => {
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success: (res) => {
              console.log("录音授权成功");
              this.setData({
                'voiceObj.isShowAuthBtn':false
              })
              
            },
            fail:()=>{
              console.log("录音授权失败");
              this.setData({
                'voiceObj.isShowAuthBtn': true
              })
            }
          })
        }else{
          this.handleChangeIptWay();
        }
       
      }
    })
  },
  initEmoji(){
    let em = {}, emChar = this.data.emojiChar.split("-"), emojis=[];
    this.data.emoji.forEach( (v, i)=> {
      em = {
        char: emChar[i],
        emoji: "0x1f" + v
      };
      emojis.push(em);
      this.setData({
        emojis: emojis
      })
    });
   
  },

  chooseEmoji(e){
    let char = e.target.dataset.char;
    this.setData({
      tempVal: this.data.tempVal + char
    })
    this.setData({
      cursorPos: this.data.cursorPos++
    })
  },
  handleClickMsg(){
    this.setData({
      isIptFocus:false,
      isEmojiShow:false,
      isCustomShow:false
    })
  },
  handleClickChangeIptWay(){
    this.checkVoiceAuth();
  },
  handleChangeIptWay(){
     this.setData({
       //恢复为默认值
       isEmojiShow:false,
       isCustomShow:false,
       
       iptWay: this.data.iptWay === 'keyboard' ? 'voice' :'keyboard'
      })
      this.setData({
        isIptFocus: this.data.iptWay === 'keyboard' ? true : false
      })
   
  },
  //获取键盘输入的信息
  handleGetIptVal(e){
    
    this.setData({
      tempVal:e.detail.value
    })
    this.setData({
      cursorPos:e.detail.cursor
    })
  },
  //发送信息
  handleSendMsg(){
    let fragment={
      type: 'text',
      headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
      isMy: true,
      content: this.data.tempVal
    };
    let msg=this.data.msg;
    msg.push(fragment);

    this.setData({
      msg: msg,
      tempVal:''
    })
  },
  handleIptFocus(){
    this.setData({
      isEmojiShow: false,
      isCustomShow:false
    })
      this.setData({
        isIptFocus: true
      })
  },
  handleIptBlur(){
    this.setData({
      isIptFocus: false
    })
  },
  handleClickEmoji(){
    this.setData({
      //恢复为默认值
      iptWay:'keyboard',
      isCustomShow:false,

      isEmojiShow:this.data.isEmojiShow?false:true,
    })
    this.setData({
      isIptFocus: this.data.isEmojiShow ? false : true
    })
   
  },
  handleClickCustom(){
  
    this.setData({
      //恢复为默认值
      iptWay: 'keyboard',
      isEmojiShow:false,

      isCustomShow: this.data.isCustomShow ? false : true,
    })
    this.setData({
      isIptFocus: this.data.isCustomShow ? false : true
    })
  },

  handleClickAlbum(e){
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album','camera'], // 可以指定来源是相册还是相机，默认二者都有
      success:  (res)=> {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;


        let fragment = {
          type: 'image',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: true,
          content: tempFilePaths
        };

        let msg = this.data.msg;
        msg.push(fragment);

        this.setData({
          msg: msg,
          isCustomShow:false
        })


      }
    })

   


  },
  handleClickCamera(){
    wx.chooseVideo({
      sourceType: ['camera'],
      maxDuration: 60,
      camera: 'back',
      success:  (res)=> {
        let tempFilePath = res.tempFilePath;
        let fragment = {
          type: 'video',
          headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
          isMy: true,
          content: tempFilePath
        };

        let msg = this.data.msg;
        msg.push(fragment);

        this.setData({
          msg: msg,
          isCustomShow: false
        })
      }
    })
   
  },




  handleClickThumbnail(e){
    console.log(e.currentTarget.dataset.url,111)
    wx.previewImage({
      current: e.currentTarget.dataset.url, // 当前显示图片的http链接
      urls: e.currentTarget.dataset.url // 需要预览的图片http链接列表
    })
  },


  // video
  handleClickShowVideo(e){
    console.log(123)
    let url=e.currentTarget.dataset.url;
    this.setData({
      'videoObj.isShowVideoModel':true,
      'videoObj.videoUrl': url
    });

   
    this.videoContext.play();
  },
  handleClickHideVideoModal(){
   this.setData({
     'videoObj.isShowVideoModel': false
   });
    this.videoContext.stop();
    
  },
  


  // voice
  handleVoiceAuth(res){
    console.log(res)
    if (res.detail.authSetting['scope.record']){
      this.setData({
        'voiceObj.isShowAuthBtn':false
      })
    }
  },

  //录音
  handleLongpressToSpeak(){
    this.setData({
      'voiceObj.isShowVoiceTip':true
    })
  },
  handleTouchendFinishedSpeak(){
    this.setData({
      'voiceObj.isShowVoiceTip': false
    })
  },
  //
  handleTouchmoveToCancel(e){
    let clientY = e.touches[0].clientY;
    if (this.data.sysInfo.windowHeight-clientY> 50){
      this.setData({
        'voiceObj.isCancelVoice': true
      })
    }else{
      this.setData({
        'voiceObj.isCancelVoice': false
      })
    }

  }
 
 
  
})
