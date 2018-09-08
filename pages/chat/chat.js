//获取应用实例
const app = getApp()

Page({
 
  data: {
      iptWay: 'keyboard',
      tempVal:'',
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
  },
  init(){
    this.initEmoji();
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
  },
  handleClickMsg(){
    this.setData({
      isIptFocus:false,
      isEmojiShow:false,
      isCustomShow:false
    })
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
    console.log(this.data.tempVal)
  },
  //发送信息
  handleSendMsg(){
    let iptObjFragment={
      type: 'text',
      headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
      isMy: true,
      content: this.data.tempVal
    };
    let iptObj=this.data.msg;
    iptObj.push(iptObjFragment);

    this.setData({
      msg: iptObj,
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
      isEmojiShow:false,

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
  }


  
})
