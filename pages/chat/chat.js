//获取应用实例
const app = getApp()

Page({
 
  data: {
    iptObj:{
      inputWay: 'keyboard',
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
      ]
    },
    isIptFocus:false,
    emojiShow:false,
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
      console.log(this.data.emojis,111)
    });
   
  },

  chooseEmoji(e){
    let char = e.target.dataset.char;
    this.setData({
      'iptObj.tempVal': this.data.iptObj.tempVal + char
    })
  },

  handleChangeIptWay(){
     this.setData({
       'iptObj.inputWay': this.data.iptObj.inputWay === 'keyboard' ? 'voice' :'keyboard',
       isIptFocus: this.data.iptObj.inputWay === 'keyboard'?false:true,
       emojiShow: this.data.emojiShow ? true : false
      })
   
  },
  //获取键盘输入的信息
  handleGetIptVal(e){
    this.setData({
      'iptObj.tempVal':e.detail.value
    })
  },
  //发送信息
  handleSendMsg(){
    let iptObjFragment={
      type: 'text',
      headUrl: 'http://tx.haiqq.com/uploads/allimg/170504/0641415410-1.jpg',
      isMy: true,
      content: this.data.iptObj.tempVal
    };
    let iptObj=this.data.iptObj.msg;
    iptObj.push(iptObjFragment);

    this.setData({
      'iptObj.msg': iptObj,
      'iptObj.tempVal':''
    })
  },
  handleSetIptFocus(){
   
  },
  handleShowEmoji(){
    console.log(1234)
    this.setData({
      emojiShow:this.data.emojiShow?false:true,
      isIptFocus: this.data.emojiShow?true:false,
      'iptObj.inputWay': this.data.emojiShow ? 'voice' : 'keyboard'
    })
  }
  
})
