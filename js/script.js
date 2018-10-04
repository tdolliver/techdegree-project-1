// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
{quote: "It's never too late to be who you might have been.", source: "George Eliot"},
{quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", source: "Dale Carnegie"},
{quote: "Choose the positive. — You have choice — you are master of your attitude — choose the POSITIVE, the CONSTRUCTIVE. Optimism is a faith that leads to success.", source: "Bruce Lee", citation: "Striking Thoughts", year: 2000 },
{quote: "Be a loner. That gives you time to wonder, to search for the truth. Have holy curiosity. Make your life worth living.", source: "Albert Einstein", citation: "Einstein and the Poet", year: 1983},
{quote: "There are no mistakes in life, only lessons. There is no such things as a negative experience, only opprotunities to grow, learn and advance along the road of self-mastery. From struggle comes strength. Even pain can be a wonderful teacher.", source: "Robin Sharma", citation: "The Monk Who Sold His Ferrari", year: 1998}
];

var quoteRefresh = window.setInterval(printQuote,10000);
var randomQuote;
var previousQuote;

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
	if (randomQuote === undefined) {
		randomQuote = array[Math.floor(Math.random() * Math.floor(array.length))];
		previousQuote = randomQuote;
	} else if (randomQuote === previousQuote) {
		while (randomQuote === previousQuote) {
			randomQuote = array[Math.floor(Math.random() * Math.floor(array.length))];
		}
		console.log("new quote: " + randomQuote.quote);
		console.log("previous quote: " + previousQuote.quote);
		previousQuote = randomQuote;
	}

	return randomQuote;
}
getRandomQuote(quotes);

// The randomBackgroundColor function below was adapted from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php.
function randomBackgroundColor() {
    let r = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 200);
    let b = Math.floor(Math.random() * 200);
    let newBGColor = "rgb(" + r + "," + g + "," + b + ")";
 console.log(newBGColor);
  
    document.body.style.background = newBGColor;
    document.getElementById('loadQuote').style.background = newBGColor;

    }

// Create the printQuote funtion and name it printQuote
function printQuote() {

	let  myRandomQuote = getRandomQuote(quotes);
	let quoteHTML = "";
	quoteHTML += "<p class=\"quote\">" + myRandomQuote.quote + "</p>";
	quoteHTML += "<p class=\"source\">" + myRandomQuote.source;

	if (myRandomQuote.citation !== undefined) {
		quoteHTML += "<span class=\"citation\">" + myRandomQuote.citation + "</span>";
	}

	if (myRandomQuote.year !== undefined) {
		quoteHTML += "<span class=\"year\">" + myRandomQuote.year + "</span>";
	}

	document.getElementById('quote-box').innerHTML = quoteHTML;
    
    randomBackgroundColor();

    clearInterval(quoteRefresh);
    quoteRefresh = window.setInterval(printQuote,10000);
}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

