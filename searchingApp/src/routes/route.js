const express = require('express')
const router= express.Router();
let obj={
    books:[{name:"Atomic Habits", author:"James clear",price:100}, {name:"the girl with the basket", author: "chetan bhagat", price:50}],
    movies:[{name:"Tiger", actor:"Salman Khan", budget:100},{name:"Bahubali", actor: "Prabhash", budget:200}]
}
router.get("/",function(req,res){
    res.send({status: "ok", data:"checked"})
})
router.post("/:category", function(req,res){
        let {category}=req.params;
        let result=obj[category]
        let {price,budget}=req.query;
        if(price){
            let output= result.filter(val=>val.price>=price);
            result=output;
        }
        if(budget){
            let output= result.filter(val=>val.budget>=budget);
            result=output;
        }
        res.send({status:"ok", result})
})
module.exports= router;