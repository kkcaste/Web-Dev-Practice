document.addEventListener('DOMContentLoaded', caricato);

function caricato() {
    if (window.location.hash) {
        history.replaceState(null, document.title, window.location.pathname);
    }

    console.log("Loaded");

    const quotes = [
        "Nothing in life is promised except death - <i>&nbsp;Kanye West</i>",
        "George Bush doesn't care about black people - <i>&nbsp;Kanye West</i>",
        "I'm just telling the truth, and telling the truth is crazy, in a world full of lies - <i>&nbsp;Kanye West</i>",
        "Even a broke clock is right twice a day - <i>&nbsp;Kanye West</i>",
        "Everything I'm not makes me everything I am - <i>&nbsp;Kanye West</i>",
        "You can't look at a glass half full or empty if it's overflowing - <i>&nbsp;Kanye West</i>",
        "If you're a Kanye West fan, you're not a fan of me; you're a fan of yourself - <i>&nbsp;Kanye West</i>",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - <i>&nbsp;Nelson Mandela</i>",
        "The way to get started is to quit talking and begin doing. -<i>&nbsp;Walt Disney</i>",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -<i>&nbsp;Steve Jobs</i>",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -<i>&nbsp;Oprah Winfrey</i>",
        "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -<i>&nbsp;John Lennon</i>",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -<i>&nbsp;James Cameron</i>",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier. -<i>&nbsp;Mother Teresa</i>",
        "Well done is better than well said. -<i>&nbsp;Benjamin Franklin</i>",
        "Be yourself; everyone else is already taken. -<i>&nbsp;Oscar Wilde</i>",
        "It is during our darkest moments that we must focus to see the light. -<i>&nbsp;Aristotle</i>",
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -<i>&nbsp;Martin Luther King Jr.</i>"
        
    ];

    function writeQuote() {
        const text = document.getElementById("text");
        text.classList.add("hidden");
        text.style.opacity = 0;

        setTimeout(() => {
            let num = Math.floor(Math.random() * quotes.length);
            text.innerHTML = quotes[num];
            text.style.opacity = 100;
            text.classList.remove("hidden");
        }, 500);
    }

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.aLink')) {
            window.location.hash = 'text';
            writeQuote();
        }
    });
}
