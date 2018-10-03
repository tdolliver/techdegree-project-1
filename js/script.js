// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
{quote: "It's never too late to be who you might have been.", source: "George Eliot"},
{quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", source: "Dale Carnegie"},
{quote: "Choose the positive. — You have choice — you are master of your attitude — choose the POSITIVE, the CONSTRUCTIVE. Optimism is a faith that leads to success.", source: "Bruce Lee", citation: "Striking Thoughts", year: 2000 },
{quote: "Be a loner. That gives you time to wonder, to search for the truth. Have holy curiosity. Make your life worth living.", source: "Albert Einstein", citation: "Einstein and the Poet", year: 1983},
{quote: "There are no mistakes in life, only lessons. There is no such things as a negative experience, only opprotunities to grow, learn and advance along the road of self-mastery. From struggle comes strength. Even pain can be a wonderful teacher.", source: "Robin Sharma", citation: "The Monk Who Sold His Ferrari", year: 1998}
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
	let randomQuote = array[Math.floor(Math.random() * Math.floor(array.length))];
	console.log(randomQuote);
	return randomQuote;
}
getRandomQuote(quotes);

// Create the printQuote funtion and name it printQuote
//function printQuote() {
//	let  

//

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);