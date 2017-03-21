# node-work-wechat

基于Node.js的企业微信消息接口服务中间件

# Installation
``` shell
$ npm install node-work-wechat
```
# Use with Express
``` javascript
var WorkWechat = require('node-work-wechat');

var config = {
  token: 'xxxxxx', // 随机数，用于消息服务器验证
  encodingAESKey: 'xxxxxx', // 消息加密密钥
  corpid: 'xxxxxx', // 公司ID
  secret: 'xxxxxx', // 应用密钥
  agentid: xxxxx, // 应用ID
  touser: 'UserID1|UserID2|UserID3', // userID
};

// init
var wxcpt = new WorkWechat(config);

// 接收消息服务器配置
app.get('/work-wechat', function (req, res, next) {
  wxcpt.connectServer(req, res);
});

// 被动回复消息
app.post('/work-wechat', function (req, res, next) {
  wxcpt.reply(res, {
    type: 'text',
    content: 'hello!'
  });
});

// 获取access_token
wxcpt.updateToken();

// 主动推送消息
wxcpt.sendMsg('hello!');
```

若想拿到用户发往应用消息，需引入
``` shell
$ npm install body-parser body-parser-xml
```
``` javascript
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

...
app.post('/work-wechat', function (req, res, next) {
  console.log(wxcpt.getMsg(req)); // eg. send hello , return hello
});
```

