/*
Token Configration File
*/
var web_url='http://cryptowallet.yiipro.com';
var token_name = "Cryptonago Token";
// contact token
var abi = [ { "constant": true, "inputs": [], "name": "mintingFinished", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "Cryptonago" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "endBlock", "outputs": [ { "name": "", "type": "uint256", "value": "1400000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "2000000000001000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "rate", "outputs": [ { "name": "", "type": "uint256", "value": "100" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint256", "value": "18" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "weiRaised", "outputs": [ { "name": "", "type": "uint256", "value": "20000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" } ], "name": "mint", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "startBlock", "outputs": [ { "name": "", "type": "uint256", "value": "1100000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "finishMinting", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "Cog" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_balance", "type": "uint256" }, { "name": "_amount", "type": "uint256" } ], "name": "getCoins", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "minimumBalanceInFinney", "type": "uint256" } ], "name": "setMinBalance", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "beneficiary", "type": "address" } ], "name": "buyTokens", "outputs": [], "payable": true, "type": "function" }, { "constant": true, "inputs": [], "name": "hasEnded", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "type": "function" }, { "inputs": [ { "name": "_startBlock", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;start Block", "template": "elements_input_uint", "value": "1100000" }, { "name": "_endBlock", "type": "uint256", "index": 1, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;end Block", "template": "elements_input_uint", "value": "1400000" }, { "name": "_rate", "type": "uint256", "index": 2, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;rate", "template": "elements_input_uint", "value": "100" } ], "payable": false, "type": "constructor" }, { "payable": true, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "recipient", "type": "address" } ], "name": "EthRec", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [], "name": "MintFinished", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "purchaser", "type": "address" }, { "indexed": true, "name": "beneficiary", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "TokenPurchase", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "recipient", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "balance", "type": "uint256" } ], "name": "LogSent", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "recipient", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "balance", "type": "uint256" } ], "name": "LogErr", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" } ];
// custom token HiHi
var custom_token_address= "0x6275c504Ca51146DA62fDF9ec22954DC1C13C687";

/*
Files Includes
*/
var Web3 = require('../index.js');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var url = require('url');
var express = require('express');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
var validator = require("email-validator");
const crypto = require("crypto");
var CryptoJS = require("crypto-js");
const crypto_key = "crypto-js1374";
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vikas.batra@enukesoftware.com',
    pass: 'enuke1234'
  }
});
/* Mysql Database Connections*/
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "spott"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Mysql Connected!");
});


/*
*************************************************************
***********************API Start*****************************
*************************************************************
*/
var app = express();
app.use(bodyParser.json({ type: 'application/json' }));
app.use(function(req, res, next) {  
	res.header('Content-Type', 'application/json'); 
	res.header("Access-Control-Allow-Origin", "*");  
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 

	next();
});

/*
************* send balance from address***************************
*/
app.post('/api/get-balance', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
    
	//var coinbase = web3.eth.coinbase;
	var address = req.body.address;	
	
	
    try {
		var eth_str_balance = web3.eth.getBalance(address);
		var eth_balance = web3.fromWei(eth_str_balance.toNumber());
		
		var MyContract = web3.eth.contract(abi);        
		var myContractInstance = MyContract.at(custom_token_address);
		var token_str_balance = myContractInstance.balanceOf(address);		
		var token_balance = web3.fromWei(token_str_balance.toNumber());
		
			
		return res.send(JSON.stringify({ "status": true,"data":{"address":address,"token_balance":token_balance,"token_name":token_name,"eth_balance":eth_balance} }));

    } catch(error) {
      	return res.send(JSON.stringify({ "status": false,"error":error}));
    }	

});
/*
************* create new account***************************
*account123 and address : 0x58bfe68a7dbd165d8d989c072d17986d04cf8805
*/
app.post('/api/create-new-account', function (req, res) {	
    try {

		var password = req.body.password;        
		var user_id = req.body.user_id;	
		var wallet_name = req.body.wallet_name;	
		var auth_token = req.body.auth_token;	 	
	 	verifyToken(auth_token,function(err,obj){
	 		
	 		if(err){
	 			return res.send(JSON.stringify({"status":"error", "error":err}));
	 		}else{
				if(password.length < 6){
			     	res.statusCode = 500;			    
			     	return res.send(JSON.stringify({ "status": false,"error":"The password must be at least 6 characters long." }));
				
				}else if(wallet_name.length < 3){
			     	res.statusCode = 500;			    
			     	return res.send(JSON.stringify({ "status": false,"error":"The wallet's name must be at least 3 characters long" }));
				
				}else{
					
					checkDuplicateWalletName(user_id,wallet_name,function(duplicateWalletErr,isExit){
				  		
				  		if(duplicateWalletErr){
							res.statusCode = 500;			    
							return res.send(JSON.stringify({ "status": false,"error":duplicateWalletErr }));
							
				  		}else{
							con.query('SELECT ?? FROM ?? WHERE id = ?',[['id','wallet_password','email'],'users',user_id], function (err, result) {
							if(err){
							    res.statusCode = 500;			    
							    return res.send(JSON.stringify({ "status": false,"error":err }));
							
							}else if(result.length >=1){
							    if(result[0].wallet_password) {					
									var password_decrypted = aesDecrypt(result[0].wallet_password);
									if(password_decrypted == password){
							        	var wallet_address = web3.personal.newAccount(password);			
										var private_key = getPrivateKeyFromAddress(wallet_address,password);
										saveKey(user_id,wallet_name,wallet_address,private_key,function(saveErr,saveStatus){
											if(saveErr){
												res.statusCode = 500;			    
									     		return res.send(JSON.stringify({ "status": false,"error":"Error happened during save private key." }));
												
											}else{
												return res.send(JSON.stringify({ "status": true,"data":{"address":wallet_address} }));
									     	
											}
										});

										
										
									}else{
							     		res.statusCode = 500;			    
							     		return res.send(JSON.stringify({ "status": false,"error":"Wallet Password Invalid!" }));

									}

							    }else if(password.length >=6){					
									var encrypt_text = aesEncrypt(password);
									con.query('UPDATE ?? SET `wallet_password` = ? WHERE id = ?',['users',encrypt_text,user_id], function (err2, result2) {
										if(err2){
							     			res.statusCode = 500;			    
							     			return res.send(JSON.stringify({ "status": false,"error":err2 }));
								
										}else{
							        		var wallet_address = web3.personal.newAccount(password);			
											var private_key = getPrivateKeyFromAddress(wallet_address,password);
											saveKey(user_id,wallet_name,wallet_address,private_key,function(saveErr,saveStatus){
											if(saveErr){
												res.statusCode = 500;			    
									     		return res.send(JSON.stringify({ "status": false,"error":"Error happened during save private key." }));
												
											}else{
												return res.send(JSON.stringify({ "status": true,"data":{"address":wallet_address} }));
									     	
											}
										});
										}
									});			
					
							    } else {
							     	res.statusCode = 500;			    
							     	return res.send(JSON.stringify({ "status": false,"error":"Wallet Password Invalid!" }));
								
								}
							}else{								
							    res.statusCode = 500;			    
							    return res.send(JSON.stringify({ "status": false,"error":"User Id Invalid!" }));
								
							}			    
						});
				  		}
				  				
					});

				}	 			

	 		}
	 	});

    } catch(error) {
    	console.log(" error ="+error);
    	res.statusCode = 500;
      	return res.send(JSON.stringify({ "status": false,"error":error}));
    }	
	
   

});
/*
************* Transfer amount ***************************
*/
app.post('/api/transfer', function (req, res) {
	res.setHeader('Content-Type', 'application/json');		
    try {
		var from_address = req.body.from_address;        
		var from_password = req.body.from_password;        
		var to_address = req.body.to_address;        
		var transfer_value = req.body.transfer_value;        
		var wei_value =   unit_to_wei(transfer_value);
        var hex_value = "0x"+wei_value.toString(16);
       
        //res.end(JSON.stringify({ "transfer_value": transfer_value,"wei_value":wei_value,"hex_value":hex_value}));
     	//var hex_value = "0x"+transfer_value; //0.000000000000000001
        
        try{
	        web3.eth.defaultAccount = from_address;
	        web3.personal.unlockAccount(from_address,from_password);
        }catch(error){
        	return res.send(JSON.stringify({ "status": false,"error":error}));
        }
        try{
			var MyContract = web3.eth.contract(abi);        
			var myContractInstance = MyContract.at(custom_token_address);
        }catch(error){
        	return res.send(JSON.stringify({ "status": false,"error":error}));
        } 

        try{
			var transaction_id = myContractInstance.transfer(to_address,hex_value);

			//balance_transfers
			  var sql = "INSERT INTO balance_transfers (from_address, to_address,transfer_value,custom_token_address,token_name,transaction_id) VALUES ('"+from_address+"', '"+to_address+"',"+transfer_value+",'"+custom_token_address+"','"+token_name+"','"+transaction_id+"')";
			  con.query(sql, function (err, result) {
			    if (err) return res.send(JSON.stringify({ "status": false,"error":err}));			    
			  });



        }catch(error){
        	return res.send(JSON.stringify({ "status": false,"error":"Faild Transfer"}));
        }      		
		
		return res.send(JSON.stringify({ "status": true,"data":{"transaction_id":transaction_id,"transfer_value": transfer_value,"wei_value":wei_value,"hex_value":hex_value,"token_name":token_name} }));
		//res.send(JSON.stringify({ "status":"testing.."}));
    
    } catch(error) {
      	return res.send(JSON.stringify({ "status": false,"message":error}));
    }	

});
/*
* Buy Token
*/
app.post('/api/buy-token', function (req, res) {
	res.setHeader('Content-Type', 'application/json');		
    try {
		var buyer_password = req.body.buyer_password; 
		var buyer_address = req.body.buyer_address;
		var ether_value = req.body.ether_value;
		// transfer ether from 
		var ether_wei_value =   unit_to_wei(ether_value);
        var hex_value = "0x"+ether_wei_value.toString(16);
        web3.personal.unlockAccount(buyer_address,buyer_password);
        var transaction_id = web3.eth.sendTransaction({"from":buyer_address,"to":custom_token_address,"value":hex_value});
        		
		//balance_transfers
		  var sql = "INSERT INTO balance_transfers (from_address, to_address,transfer_value,custom_token_address,token_name,transaction_id) VALUES ('"+buyer_address+"', '"+custom_token_address+"',"+ether_value+",'"+custom_token_address+"','ether','"+transaction_id+"')";
		  con.query(sql, function (err, result) {
		    if (err) return res.send(JSON.stringify({ "status": false,"error":err}));			    
		  });		
		return res.send(JSON.stringify({ "status": true,"data":{"buyer_address":buyer_address,"ether_value":ether_value,"ether_wei_value":ether_wei_value,"hex_value":hex_value,"transaction_id":transaction_id} }));

    } catch(error) {
      	return res.send(JSON.stringify({ "status": false,"message":"Invalid Password"}));
    }	

});

/*
transaction list
*/
/*
* Buy Token
*/
app.post('/api/transaction-list', function (req, res) {
	res.setHeader('Content-Type', 'application/json');		
    try {
		var address_list = req.body.address_list;	
		var from_date_time = req.body.from_date_time;	
		var to_date_time = req.body.to_date_time;	
		var type = req.body.type;
		var address_str = "";
		address_list.forEach(function(address) {
		   address_str += "'"+address+"',";
		});	
		var address_str = address_str.replace(/(^,)|(,$)/g, "");
		//balance_transfers
		var sql = "select transaction_id,from_address,to_address,transfer_value,token_name,created as date_time from balance_transfers where from_address IN ("+address_str+")";

		
		if( from_date_time ) {
			sql +=" AND created >='"+from_date_time+"'";
		}		
		if( to_date_time ) {
			sql +=" AND created <='"+to_date_time+"'";
		}       		
		if( type ) {
			sql +=" AND token_name ='"+type+"'";
		} 
		  
		con.query(sql, function (err, result) {
			if (err){
				return res.send(JSON.stringify({ "status": false,"error":err }));
			}else{
				return res.send(JSON.stringify({ "status": true,"data":result }));
			}
			

		});		
		

    } catch(error) {
      	return res.send(JSON.stringify({ "status": false,"message":"Invalid Password"}));
    }	

});
/*
* Sign-Up
*/
app.post('/api/sign-up', function (req, res) {
	res.setHeader('Content-Type', 'application/json');		
    try {
		var email = req.body.email;	
		var password = req.body.password;
		var private_key = req.body.private_key;
		var envalidate_status = validator.validate(email);
		if(!envalidate_status){
			res.statusCode = 500;
			return res.send(JSON.stringify({ "status": false,"error":"Invalid Email" }));
		}
		if(password.length < 6 || password.length > 20){
			res.statusCode = 500;
			return res.send(JSON.stringify({ "status": false,"error":"Password must be between 6 to 20 characters" }));
		}	
		var today = new Date();
		var s = today.getSeconds();		
		const activate_token = crypto.randomBytes(16).toString("hex");
		// Generate a salt
		var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(password, salt);		
       	var sql = "INSERT INTO users (email,hash_password,activate_token) VALUES ('"+email+"','"+hash+"','"+activate_token+"')";
       		 
		con.query(sql, function (err, result) {
			if (err){
				res.statusCode = 500;
				return res.send(JSON.stringify({ "status": false,"error":err['sqlMessage'] }));
			
			}else{
				var mailOptions = {
				  from: 'sandeep.singh@enukesoftware.com',
				  to: email,
				  subject: 'Activate your account',
				  html: '<p>Hello <b>Sir/Maddam</b>,</p><p>Click the link to activate your account. <a href="'+web_url+'/#auth-login?email='+email+'&token='+activate_token+'">Click here</a></p>'
				}	
				transporter.sendMail(mailOptions, function(error, info){
				  if (error) {
					res.statusCode = 500;
					return res.send(JSON.stringify({ "status": false,"error":"Error in sent email" }));
			
				  } else {
				    return res.send(JSON.stringify({ "status": true,"data":result }));
				  }
				}); 				
								
			}

		});		

    } catch(error) {
    	res.statusCode = 500;
      	return res.send(JSON.stringify({ "status": false,"message":"Invalid Password"}));
    }	

});
/*
* savekey
*/
app.post('/api/savekey', function (req, res) {
		
    try {
			
		var user_id = req.body.user_id;
		var private_key = req.body.private_key;
		var wallet_name = req.body.wallet_name;
		
		var sql = "INSERT INTO private_keys (user_id,wallet_name,private_key) VALUES ("+user_id+",'"+wallet_name+"','"+private_key+"')";
		console.log(sql);
		con.query(sql, function (err, result) {
			if (err){
				res.statusCode = 500;
				return res.send(JSON.stringify({ "status": false,"error":err['sqlMessage'] }));
			}else{
				return res.send(JSON.stringify({ "status": true,"data":result }));						
			}
		});			

    } catch(error) {
    	res.statusCode = 500;
      	return res.send(JSON.stringify({ "status": false,"message":"Invalid key"}));
    }	

});
/*
* get keys
*/
app.post('/api/getkeys', function (req, res) {
		
    try {
			
		var user_id = req.body.user_id;	
		
		var sql = "SELECT * from private_keys where user_id="+user_id;
		con.query(sql, function (err, result) {
			if (err){
				res.statusCode = 500;
				return res.send(JSON.stringify({ "status": false,"error":err['sqlMessage'] }));
			}else{			
				return res.send(JSON.stringify({ "status": true,"data":result }));						
			}
		});			

    } catch(error) {
    	res.statusCode = 500;
      	return res.send(JSON.stringify({ "status": false,"message":"Invalid key"}));
    }	

});
/*
* Sign-In
*/
app.post('/api/sign-in', function (req, res) {
			
    try {
		var email = req.body.email;	
		var password = req.body.password;
		if(password.length <= 0 || email.length <= 0){
			res.statusCode = 500;
			return res.send(JSON.stringify({ "status": false,"error":"Invalid login credentials" }));
		}

		var evalidate_status = validator.validate(email);
		if(!evalidate_status){
			res.statusCode = 500;
			return res.send(JSON.stringify({ "status": false,"error":"Invalid Email" }));
		}		
		// Generate a salt
		var salt = bcrypt.genSaltSync(10);				
       	var sql = "SELECT * from users where email='"+email+"' AND status=1 limit 1";
       	con.query(sql, function (err, result) {
			if (err){
				res.statusCode = 500;
				return res.send(JSON.stringify({ "status": false,"error":err }));
			}else if(result.length >=1){
			    if(bcrypt.compareSync(password, result[0]['hash_password'])) {
			     	return res.send(JSON.stringify({ "status": true,"user_id": result[0]['id'],"email":result[0]['email']})); //result[0]
			    } else {
			     	res.statusCode = 500;
			     	return res.send(JSON.stringify({ "status": false,"error":"Invalid login credentials" }));
			    }							
				
			}else{
				res.statusCode = 500;
			    return res.send(JSON.stringify({ "status": false,"error":"Invalid login credentials Or account is not activated yet." }));
			}

		});		

    } catch(error) {
    	res.statusCode = 500;
      	return res.send(JSON.stringify({ "status": false,"error":"Invalid Password"}));
    }	

});
app.post('/api/checkWallet', function (req, res) {	
    try {		
		var user_id = req.body.user_id;
		var wallet_name = req.body.wallet_name;
		var password = req.body.password;
		if(wallet_name.length <= 0){
			res.statusCode = 500;
			return res.send(JSON.stringify({ "status": false,"error":"Wallet name is invalid!" }));
		}		
		if(password.length <= 0){
			res.statusCode = 500;
			return res.send(JSON.stringify({ "status": false,"error":"Password Invalid!" }));
		}

		// Generate a salt
		var salt = bcrypt.genSaltSync(10);				
       	var sql = "SELECT * from users where id="+user_id+" limit 1";
       	con.query(sql, function (err, result) {
			if (err){
				res.statusCode = 500;
				return res.send(JSON.stringify({ "status": false,"error":err }));
			}else if(result.length >=1){
			    if(bcrypt.compareSync(password, result[0]['hash_password'])) {
			     	con.query("SELECT * from private_keys where user_id="+user_id+" AND wallet_name='"+wallet_name+"'", function (err2, result2) {
						if (err2){
							res.statusCode = 500;
							return res.send(JSON.stringify({ "status": false,"error":err2 }));
						
						}else if(result2.length >=1){
							res.statusCode = 500;
							return res.send(JSON.stringify({ "status": false,"error":"Already exist "+wallet_name }));
						
						}else{
							return res.send(JSON.stringify({ "status": true,"message":"Not duplicate"}));
						}
			     	});
			     	//return res.send(JSON.stringify({ "status": true,"user_id": result[0]['id'],"email":result[0]['email']})); //result[0]
			    

			    } else {
			     	res.statusCode = 500;
			     	return res.send(JSON.stringify({ "status": false,"error":"Invalid password" }));
			    }							
				
			}else{
				res.statusCode = 500;
			    return res.send(JSON.stringify({ "status": false,"error":"Not found user!" }));
			}

		});		

    } catch(error) {
    	res.statusCode = 500;
      	return res.send(JSON.stringify({ "status": false,"message":"Invalid Password"}));
    }
});

app.post('/api/activate-account',function(req,res){
    try {
		var email = req.body.email;	
		var token = req.body.token;
		if(token.length <= 0 || email.length <= 0){
			res.statusCode = 500;
			return res.send(JSON.stringify({ "status": false,"error":"Invalide activate url!" }));
		}
		
       	var sql = "UPDATE `users` SET `status` = '1' WHERE email='"+email+"' AND activate_token='"+token+"'";
       	
       	con.query(sql, function (err, result) {
			if (err){
				res.statusCode = 500;
				return res.send(JSON.stringify({ "status": false,"error":err }));
			}else{
				return res.send(JSON.stringify({ "status": true,"message":"Successfully activated your account. Please login with your credential." })); //result[0]
			}

		});		

    } catch(error) {
    	res.statusCode = 500;
      	return res.send(JSON.stringify({ "status": false,"error":"Invalid activate url!"}));
    }		
});


var http = require('http');
app.get('/api/check-login',function(req,res){

 	var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjczYTc1NDM1MTUyMWZlMjlhZmQyNjk1NjA4M2JhMTJhYzYzYTNiYjUwMmY4NzEyZmM0YTYxZjQyYTE4Y2I3NTRiNDUxMjkzZGUzY2EzNjczIn0.eyJhdWQiOiIxIiwianRpIjoiNzNhNzU0MzUxNTIxZmUyOWFmZDI2OTU2MDgzYmExMmFjNjNhM2JiNTAyZjg3MTJmYzRhNjFmNDJhMThjYjc1NGI0NTEyOTNkZTNjYTM2NzMiLCJpYXQiOjE1MTMyNDgzMTEsIm5iZiI6MTUxMzI0ODMxMSwiZXhwIjoxNTQ0Nzg0MzExLCJzdWIiOiIxNjgiLCJzY29wZXMiOltdfQ.Von7t1W9q1BAec59VBF8ItljIMl_eVugxZm7WrgdKp4YihK94uzhTRIwgeO2v9qpoVkq-PqzcXiCva2SZh066dW2VV9ZWH8TD69bPR-SfDZplcja_kXmP3zx2AQ082Ter-MVC5jGJXUvph8jPTXIVeZOm7QicLpAZclw6VxFhZcTLoXqX66Kwp_VBk29KnU8B_GqjsNq3Ms2gE5iOVJ0Op6IDipOjguvEZVC3II33MJyOeG6eVP45x5u_1wRydFMxQExP7BE8x3S7ZkPvsDpOqIj3kUS48tc3JXzwbjbR9ESGj4ekr43CxMy4G8FjCqkjXrOWkQThE2raAXjEvuwwESGtDJfJECGausV5-51RrNmpcLXOtuZZFH1MwcPKTAazm8Fosxe_uUdql-jqyE3VL54mybAbQyVdXyF3Mi93qGJqMpGqaaVfN1Pl0ALAaCBeRwge4_DojfM6BUr4eP1euv-ZaqGdVmO2z6_dscFrE23QL3O5-S9QyKkytZnJq3QGy0VphD2GbB9cH0fbog5vztxb7CltpWrQ2E9pgucaGpSQOVuP6M0ltBHpDEpWpM1VMgGMIgAgloVk-fg3KEW8ETl1XfxH0BSZKaiHwlH7tFNB9ri39y6Ru7qRiLwCK9hOBViMbCXMfmW9hiEoFd0jeE5035JgeXEHwEivBpE5Xc';
 	verifyToken(token,function(err,obj){
 		if(err){
 			return res.send(JSON.stringify({"status":"error", "message":err}));
 		}else{
 			return res.send(JSON.stringify(obj));
 		}
 	});
});
/*
************* Helper ***************************
* http://ethdocs.org/en/latest/ether.html
*/
var server = app.listen(8080, function () {
  console.log("Running...")
})
/*********************common helper*********************/
function unit_to_wei(balance){
    return balance*1000000000000000000;
}


function checkDuplicateWalletName(user_id,wallet_name,cb){
 	
 	con.query("SELECT ?? from ?? where user_id=? AND wallet_name=?",['id','private_keys',user_id,wallet_name], function (err, result) {
		if(result.length >=1){						
			cb("The "+wallet_name+" already exist.");
			return;
		}
		cb(null, false);		
 	});	
}
function saveKey(user_id,wallet_name,wallet_address,private_key,cb){

	checkDuplicateWalletName(user_id,wallet_name, function(err,isExist) {	    
		if(err){
			cb(err);
			return;
		}else{		
			var insert_values  = {user_id: user_id, wallet_name: wallet_name,private_key:private_key,wallet_address:wallet_address}
			
			var sql = "INSERT INTO private_keys SET ?";
			con.query(sql,insert_values, function (err2, result2) {
				if (err2){				
					cb(err2);
					return;	
				}else{
					cb(null, true);	
				}
			});

		}
			
	      
	});	
}
function aesDecrypt(string){
	var password_bytes  = CryptoJS.AES.decrypt(string, crypto_key);	
	return password_bytes.toString(CryptoJS.enc.Utf8);
}
function aesEncrypt(string){
	var ciphertext = CryptoJS.AES.encrypt(string, crypto_key);
	return ciphertext.toString();
}
function getPrivateKey(address){
	return web3.personal.privateKeyToAccount(address);
			
}
function getPrivateKeyFromAddress(address,password){
	var keythereum = require("keythereum");	
	var datadir = "/home/l-75/.ethereum/rinkeby/";
	var keyObject = keythereum.importFromFile(address, datadir);
	var privateKey = keythereum.recover(password, keyObject);
	return privateKey.toString('hex');
}
function verifyToken(token,callback){

	var options = {
	    host: 'spott.yiipro.com',
	    port: 80,
	    path: '/api/v1/session/check-loggedin',
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/x-www-form-urlencoded',
	      'Authorization': 'Bearer '+token,
	      'Accept': 'application/json'
	    }
    };

    var httpreq = http.request(options, function (response) {
	    response.setEncoding('utf8');
	    var str = '';
	    response.on('data', function (chunk) {	      
	    	str +=chunk ;
	    });				    
	    response.on('end', function() {   
	    	//return res.send('testing...');
	    	var dataObj = JSON.parse(str); 
	    	if(dataObj.hasOwnProperty('status')){
	    		callback(null,dataObj);
	    		return;	    		
	    	}else{	
	    		callback('User is unauthenticated');	
	    		return;
	    	} 
	       
	    })

	  });
	httpreq.on('error', function(e) {
		callback('problem with request: ' + e.message);
	    return;		
	});  
	//httpreq.write('');
	httpreq.end();  		
}
/*********************end of common helper*********************/
