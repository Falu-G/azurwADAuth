var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'client_id': '4776a93e-1894-4c4c-a19f-124468341316',
  'scope': 'user.read openid profile offline_access',
  'username': 'segz@falugbasgmail.onmicrosoft.com',
  'password': 'Mynickname.1',
  'grant_type': 'password' 
});
var config = {
  method: 'post',
  url: 'https://login.microsoftonline.com/organizations/oauth2/v2.0/token',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Cookie': 'fpc=ArXnvrMxHrFAjvnIcxDekJXzGfjiAQAAAGxOI9gOAAAA; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data.access_token, "hello"));
})
.catch(function (error) {
  console.log(error);
});
