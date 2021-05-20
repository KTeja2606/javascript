function createQuote(quote, callback){ 
  var myQuote = "STAY HOME, " + quote;
  callback(myQuote); 
}

function logQuote(quote){
  console.log(quote);
}

createQuote("STAY SAFE!", logQuote); 