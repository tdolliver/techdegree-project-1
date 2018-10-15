// FSJS - Random Quote Generator

// Creates an array of quote objects.
const quotes = [
{quote: "It's never too late to be who you might have been.", source: "George Eliot", tags:"Motivation"},
{quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", source: "Dale Carnegie", tags:"Motivation"},
{quote: "Choose the positive. — You have choice — you are master of your attitude — choose the POSITIVE, the CONSTRUCTIVE. Optimism is a faith that leads to success.", source: "Bruce Lee", citation: "Striking Thoughts", year: 2000, tags: "Life" },
{quote: "Be a loner. That gives you time to wonder, to search for the truth. Have holy curiosity. Make your life worth living.", source: "Albert Einstein", citation: "Einstein and the Poet", year: 1983, tags: "Life"},
{quote: "There are no mistakes in life, only lessons. There is no such things as a negative experience, only opprotunities to grow, learn and advance along the road of self-mastery. From struggle comes strength. Even pain can be a wonderful teacher.", source: "Robin Sharma", citation: "The Monk Who Sold His Ferrari", year: 1998, tags: "Life"}
];

// Define variable to refresh the quote in a pre determined interval
let quoteRefresh = window.setInterval(printQuote,20000);
let randomQuote;
let previousQuote;

// getRandomQuote will choose a random quote from the 'quotes' array. It will compare the newly choosen quote to the previous quote, and pick another if the values are the same. 
// This prevents the same quote from being displayed twice in a row. 
function getRandomQuote(array) {
	if (randomQuote === undefined) {
		randomQuote = array[Math.floor(Math.random() * Math.floor(array.length))];
		previousQuote = randomQuote;
	} else if (randomQuote === previousQuote) {
		while (randomQuote === previousQuote) {
			randomQuote = array[Math.floor(Math.random() * Math.floor(array.length))];
		}
		previousQuote = randomQuote;
	}

	return randomQuote;
}
getRandomQuote(quotes);

// The randomBackgroundColor function below was adapted from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php.
// The randomBackgroundColor function will choose random rgb values and set the background to a new color every time it is called. 
function randomBackgroundColor() {
    let r = Math.floor(Math.random() * 200);
    let g = Math.floor(Math.random() * 200);
    let b = Math.floor(Math.random() * 200);
    let newBGColor = "rgb(" + r + "," + g + "," + b + ")";
  
    document.body.style.background = newBGColor;
    document.getElementById('loadQuote').style.background = newBGColor;

    }

// The printQuote function is what is writing the quote to the screen and also refreshing the new quote interval every time it is called. 
// It will determine to include properties by whether or not they exist for that specific quote. 
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

	if (myRandomQuote.tags !== undefined) {
		quoteHTML += "<span class=\"tags\">" + myRandomQuote.tags + "</span>";
	}

	document.getElementById('quote-box').innerHTML = quoteHTML;
    
    randomBackgroundColor();

    clearInterval(quoteRefresh);
    quoteRefresh = window.setInterval(printQuote,10000);
}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

