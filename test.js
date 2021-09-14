var osInfo = require('./lib/osinfo')
osInfo.osInfo().then(r=>{
  console.log(r)
  console.log("你好")
})
