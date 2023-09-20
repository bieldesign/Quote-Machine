let quotesData;

let cores =[
    '#F7E987',
    '#5B9A8B',
    '#445069',
    '#765827',
    '#C8AE7D',
    '#862B0D',
    '#898121',
    '#E7B10A',
    '#A76F6F',
    '#FFD89C',
    '#9BCDD2',
    '#BFCCB5',
    '#B3E5BE',
    '#F4E869',
]
var currentQuote = '',
  currentAuthor = '';

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        //console.log('quotesData');
        //console.log(quotesData);
      }
    }
  });
}
function getOneQuote(){
    return quotesData.quotes[
        Math.floor(Math.random() * quotesData.quotes.length)
      ];
}

function useQuotes(){
    let randomQuote = getOneQuote();

    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;

    var cor = Math.floor(Math.random() * cores.length);

    console.log(currentAuthor);
    console.log(currentQuote);
    $('#text').text(currentQuote);
    $('#author').html(currentAuthor);
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text='+'"'+currentQuote+'"'+"- "+currentAuthor+'.');
    //$('html body').css('background-color',cores[cor]);
    $('html body').animate(
        {
          backgroundColor: cores[cor],
          color: cores[cor] 
        },
        1200
      );
    $('.botao').css('background-color',cores[cor]);
}
$(document).ready(function () {
    getQuotes().then(() => {
        useQuotes();
    });
    $('#new-quote').on('click', useQuotes);
});
//document.getElementById("new-quote").addEventListener("click", useQuotes);

