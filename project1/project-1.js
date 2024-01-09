let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes = [{
    quote: `"A rose by any other name would smell as sweet."`,
    person: `William Shakespeare`
}, {
    quote: `"All that glitters is not gold."`, 
    person: `William Shakespeare`
}, {
    quote: `"Eighty percent of success is showing up."`, 
    person: `Woody Allen`
}, {
    quote: `"All the world's a stage, and all the men and women merely players"`, 
    person: `William Shakespeare`
}, {
    quote: `"Ask not what your county cna do for you; ask what you can di fir your country."`, 
    person: `John Kennedy`
}, {
    quote: `"Genius is one percent inspiration and ninety-nine percent perspiration."`, 
    person: `Thomas Edison`
}, {
    quote: `"He travels the fastest who travels alone."`, 
    person: `Rudyard Kipling`
}, {
    quote: `"Hell is other people."`, 
    person: `Jean-Paul Sartre`
}, {
    quote: `"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."`, 
    person: `Martin Luther King`
}, {
    quote: `"I think therefore I am."`, 
    person: `Rene Descartes`
}, {
    quote: `"May the Force be with you."`, 
    person: `Star Wars`
}]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})