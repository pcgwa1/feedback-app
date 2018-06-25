var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'feedbackappredirecturlpetergwaka' }, function(err, tunnel) {
  console.log('Local Tunnel running')
});