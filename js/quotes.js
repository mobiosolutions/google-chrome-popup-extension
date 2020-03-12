$.getJSON('https://favqs.com/api/qotd', function(data) {
        
        var quote = `<h2>"${data.quote.body}"</h2>`
        $(".quotes").html(quote);

        var author = `- ${data.quote.author}<br>`
        $(".quote-author").html(author);
    });