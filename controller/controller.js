var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var urlencodedParser=bodyParser.urlencoded({extended:false});

mongoose.connect('mongodb://ujjwal19:ujjwal19@ds231991.mlab.com:31991/cartitem');

var dataSchema=new mongoose.Schema({
    item:String
});

var cartitemSchema=new mongoose.Schema({
    item:String
});

var data=mongoose.model('data',dataSchema);

/*var allitems=data({item:'Alone By Halsey'}).save(function(err){
                if(err) throw err;    
            console.log("Song added into database");
            });
*/

var cartitem=mongoose.model('cartitem',cartitemSchema);

/*var allitems=cartitem({item:"Alone By Halsey"}).save(function(err){
        if(err) throw err;  
})*/

module.exports=function(app){
    app.get('/home',function(req,resp){
        data.find({},function(err,data){
            if(err) throw err;
            resp.render('home',{datas:data});
        });
    });    
    app.get('/cart',function(req,resp){
        cartitem.find({},function(err,cartitem){
            if(err) throw err;
            resp.render('cart',{cartitems:cartitem});
        });
    });
    app.post('/cart',urlencodedParser,function(req,resp){
            cartitem=data(req.body).save(function(err,data){
            if(err) throw err;
            resp.render('home',{datas:data});
        });
    });
    app.delete('/cart/:items',function(req,resp){
            cartitem.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,cartitem){
            if(err) throw err;
            resp.render('cart',{cartitems:cartitem});
        });
    });
};