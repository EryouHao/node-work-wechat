var text = function (toUser, fromUser, timeStamp, content) {
  
  return `<xml>
            <ToUserName>${ toUser }</ToUserName>
            <FromUserName>${ fromUser }</FromUserName>
            <CreateTime>${ timeStamp }</CreateTime>
            <MsgType>text</MsgType>
            <Content>${ content }</Content>
          </xml>`;
};

module.exports = {
  text: text, // 普通文本消息
};