const express = require("express"); //chamando a dependencia express.
const cookieParser = require("cookie-parser"); //chamando a dependencia cookie-parser
const app = express(); // falando que 'express' agora ira se chamar 'app', para ficar muito mais facil de constar algo.
//ok, agora iremos definir algumas coisas dentro do express:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.set("trust proxy", 1);

//pronto, agora iremos definir os sites do website

//vamos começar com o pricipal:
app.get("/", function(req, res){
    res.sendFile(__dirname+"/pages/index.html")
})
//agora os css:
app.get("/v2/style/index.css", function(req, res){
    res.sendFile(__dirname+"/style/index.css")
})
app.get("/v2/style/navbar.css", function(req, res){
    res.sendFile(__dirname+"/style/navbar.css")
})
app.get("/v2/style/fonts.css", function(req, res){
    res.sendFile(__dirname+"/style/fonts.css")
})

//ok, agora iremos deixar o site no ar:
app.listen(80, function(){
    console.log("Pronto, aplicação online.")
})