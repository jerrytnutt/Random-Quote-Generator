var quoteTweet;
var authorTweet;
$(document).ready(function(){
  var quote = 'Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.'
  var author = 'Melody Beattie'
  
  var firstQuote = function(){
 
      $( "#quoteBox" ).append("<p class='quote'>"+'"'+quote+'"'+"</p>"+"<p class='author'>"+"-"+author+"</p>");
     quoteTweet = quote;
authorTweet = author;
  };
  firstQuote();


    function newQ(){   
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",function(Data){
		
     if(!$( "#quoteBox" ).is(':empty')){
      
  
       $( "#quoteBox" ).empty();
       
     }
      if(Data.quoteAuthor === ''){
        Data.quoteAuthor = 'unknown'
      }
     $( "#quoteBox" ).append("<p class='quote'>"+'"'+Data.quoteText+'"'+"</p>"+"<p class='author'>"+"-"+Data.quoteAuthor+"</p>");
      
   quoteTweet = Data.quoteText;
    authorTweet = Data.quoteAuthor;
  

    
              
});
    }
	$(".btn-info").on( "click", tweet);
    $(".ty").on( "click", newQ);
  
});


                 
function tweet() {
   var myUrl = 'https://twitter.com/intent/tweet?text=' + quoteTweet + ' ' + '- '+authorTweet;
    window.open(myUrl, 'twitter');
    return false;
  };
  
