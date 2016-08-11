var url = require('url');
var querystring = require('querystring');

var addr = 'http://news.naver.com/main/list.nhn?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0008602216';

var parseUrl = url.parse(addr);
console.log( querystring.parse(parseUrl.query) );

