//let apiQuotes = [];
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('text')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const  newQuoteBtn= document.getElementById('new-quote')
// show new Quote
function newQuote(){
    //pick a random quote from apiQuotes array
      const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //check if author filed is blank and replace it  with 'unknown'
      if (!quote.author) {
    author.textContent = 'unkown';   
      }else{
    authorText.textContent = quote.author;
     }
    //check Quote Length to determinate styling
    if(quote.text.length>120){
         quoteText.classList.add('long-quote');     
    } else{
         quoteText.classList.remove('long-quote');
    }
   quoteText.textContent = quote.text;
}
// Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank');
}
// event Listener
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);
//on load
newQuote()



// get Quotes from API
//  async function getQuotes() {
//    const apiUrl ='https://type.fit/api/quotes';
//  try {
//       const response = await fetch(apiUrl);
//       apiQuotes = await response.json();
// // //    //console.log(apiQuotes[12]);
//      newQuote()
//   } catch (error){
// // //     // catch error here
//   }
//   }