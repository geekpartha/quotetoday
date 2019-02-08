$(document).ready(function(){

	var url = 'https://hn.algolia.com/api/v1/search?query=javascript';

	$.getJSON(url, function(data){

		var currentQuotes = '';
		var quotes = data.hits;
		
		$('.showme').on('click', function(){
			currentQuotes = quotes[Math.floor(Math.random() * quotes.length)];
			//console.log(currentQuotes);

			$('.quoteBody').html(currentQuotes.title);
			$('.quoteAuthor').html(" - " + currentQuotes.author);

			$('.quoteTweet')
			.attr(
				'href',
				'https://twitter.com/intent/tweet?text= ' + currentQuotes.title + ' - ' + currentQuotes.author
				)
			.attr('target', '_blank')
			.attr('disabled', false);

			$('.showme').html("Show me more!");
		});
	});
});