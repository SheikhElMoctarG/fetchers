const Express = require("express")
const app = Express()
const fetch = require("node-fetch")
setInterval(() => {
    fetch('https://jdhfnfjnfj.herokuapp.com/').then(res => console.log(`response-ok: ${res.ok}, status: ${res.status}`))
        .catch(err => console.error(`Error occured: ${err}`))
}, 5000);
setInterval(() => {
    fetch('https://all-news-bot.herokuapp.com/').then(res => console.log(`response-ok: ${res.ok}, status: ${res.status}`))
    .catch(err => console.error(`Error occured: ${err}`))
}, 15000);
app.get("/",(req,res)=>{
    res.send("connected")
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("concted in port "+PORT)
});