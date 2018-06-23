const express = require('express')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const pg = require('pg')
const app = express()
let models = require('./models')

app.engine('mustache',mustacheExpress())

app.set('views','./views')
app.set('view engine','mustache')

app.use(express.static(__dirname + '/views'))

// get all shopping lists
app.get('/shoppinglist', function(req,res){

    models.shoppingList.findAll().then(function(shoppinglist){
        // res.json(shoppinglist)
        res.render('index', {list: shoppinglist})
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

app.post('/deletelist',function(req,res){
    console.log('this is happening')
    let listID = req.body.listID
    
    models.shoppingList.find({
        where: { id: listID}
    }).then((result) => {
        return models.shoppingList.destroy({ where: {id: listID}})
            .then((u) => { res.redirect('/shoppinglist') });
    });
  
})

app.post('/grocerylist', function(req,res){

    console.log('creating a list')
    let newlist = models.grocerylist.build({
        item : req.body.item,
        quantity : req.body.quantity
    })

    newlist.save().then(function(savedGroceryList){
        console.log("Saved successful", savedGroceryList)
        
    })
    res.redirect('/shoppinglist')
})



app.listen(3000, () => console.log('Listening on 3000'))