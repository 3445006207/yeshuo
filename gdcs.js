/******************************
自用测试 QQ3445006207
******************************
[rewrite_local]
^https:\/\/uu\.tuanyougou\.com\/\/video url script-response-body https://raw.githubusercontent.com/3445006207/yeshuo/main/gdcs.js
[mitm] 
hostname = uu.tuanyougou.com
*****************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const cs = '/registryUser';


if (url.indexOf(cs) != -1) {
    obj.data.isVip = 1;
obj.data.userType = 1;
obj.data.endTime = "2999-9-19";
body = JSON.stringify(obj);
}


$done({body});
