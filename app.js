const express = require('express')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const pg = require('pg')
const app = express()
let models = require('./models')

app.engine('mustache',mustacheExpress())

app.set('views','./views')
app.set('view engine','mustache')

// get all shopping lists
app.get('/shoppinglist', function(req,res){

    models.shoppingList.findAll().then(function(shoppinglist){
        // res.json(shoppinglist)
        res.render('index', {list: shoppinglist})
    })
})

// get shopping list by name
app.get('/shoppinglist/:name',function(req,res){
    console.log(req.params.name)
    models.shoppingList.findOne({
        where: {
            shoppinglist : req.params.name
        }
    }).then(function(shoppinglist){
        res.json(shoppinglist)
    })
})

app.use(bodyParser.urlencoded({ extended : false }))

app.post('/shoppinglist', function(req,res){
    var shoppinglist = req.body.shoppinglist
    console.log(shoppinglist)
    let thislist = models.shoppingList.build({
        shoppinglist : shoppinglist
    })
    
    thislist.save().then(function(savedList){
        console.log("Saved successful", savedList)
    })
    res.redirect('/shoppinglist')
})




app.listen(3000, () => console.log('Listening on 3000'))