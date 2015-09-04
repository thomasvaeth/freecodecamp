var quotes = [
	{quote: "It's a trap!", character: "Admiral Ackbar"}, 
	{quote: "Don't call me a mindless philosopher, you overweight glob of grease.", character: "C-3PO"}, 
	{quote: "I'm rather embarrassed, General Solo, but it appears that you are to be the main course at a banquet in my honor.", character: "C-3PO"}, 
	{quote: "Sir, the possibility of successfully navigating an asteroid field is approximately 3,720 to 1.", character: "C-3PO"}, 
	{quote: "All too easy.", character: "Darth Vader"}, 
	{quote: "I find your lack of faith disturbing.", character: "Darth Vader"}, 
	{quote: "No. I am your Father.", character: "Darth Vader"}, 
	{quote: "Stay on target.", character: "Gold Five"}, 
	{quote: "Great, kid. Don't get cocky.", character: "Han Solo"}, 
	{quote: "Laugh it up, fuzzball.", character: "Han Solo"}, 
	{quote: "Never tell me the odds.", character: "Han Solo"}, 
	{quote: "Traveling through hyperspace ain't like dusting crops, farm boy.", character: "Han Solo"}, 
	{quote: "If there's a bright center to the universe, you're on the planet that it's farthest from.", character: "Luke Skywalker"}, 
	{quote: "There is good in him. I've felt it.", character: "Luke Skywalker"}, 
	{quote: "In my experience there is no such thing as luck.", character: "Obi-Wan Kenobi"}, 
	{quote: "Remember... the Force will be with you, always.", character: "Obi-Wan Kenobi"}, 
	{quote: "Your eyes can deceive you. Don't trust them.", character: "Obi-Wan Kenobi"}, 
	{quote: "Somebody has to save our skins.", character: "Princess Leia"}, 
	{quote: "Why you stuck-up, half-witted, scruffy-looking nerf-herder!", character: "Princess Leia"}, 
	{quote: "Your focus determines your reality.", character: "Qui-Gon Jinn"}, 
	{quote: "Do. Or do not. There is no try.", character: "Yoda"}, 
	{quote: "Once you start down the dark path, forever will it dominate your destiny.", character: "Yoda"}
];

function generateQuote() {
	randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	if (randomQuote.character === "C-3PO" && randomQuote.quote.length + randomQuote.character.length > 95) {
		generateQuote();
	} else if (randomQuote.quote.length + randomQuote.character.length > 97) {
		generateQuote();
	} else {
		$('.quote').text(randomQuote.quote);
		$('.character').text(randomQuote.character);
		said = randomQuote.quote.split(' ').join('%20');
		speaker = randomQuote.character.split(' ').join('%20');
	}
}

$(document).ready(function() {
	$('.btn-tweet').hide();
	$('.btn-force').on('click', function() {
		generateQuote();
		if (speaker === 'C-3PO') {
			$('.twitter').attr('href', 'https://twitter.com/intent/tweet?text=%23C-3PO%20said,%20"' + said + '"%20%23StarWars%20https://goo.gl/MOxWg1');
		} else {
			$('.twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + speaker + '%20said,%20"' + said + '"%20%23StarWars%20https://goo.gl/MOxWg1');
		}
		$('.btn-tweet').show();
	});
});