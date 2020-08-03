// change the color of paragraph to blue
// change the heading font-size to '5em'
// change the text of paragrapgh to be given paragraph (README)
// change the 13th item to be half transparent
// change the 3 34rd item's text to say: I say, "Hi!"


// change the color of paragraph to blue
const paragraph = document.querySelector('p')
paragraph.style.color = 'blue'


const heading =  document.querySelector('h1')
// console.dir(heading.style.fontSize = '5em')
heading.style.fontSize = '5em'


// change the text of paragrapgh to be given paragraph (README)
paragraph.innerText  = `Lorem ipsum dolor amet viral meh selfies drinking vinegar, 
                        intelligentsia poke flannel twee paleo enamel pin cray. 
                        Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. 
                        Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. 
                        Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. 
                        Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. 
                        Food truck synth wayfarers, street art banh mi actually authentic. 
                        Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.`


// change the 13th item to be half transparent
const item13 =  document.querySelector('#item-13');
item13.style.opacity = "0.5";


// change the 3 34rd item's text to say: I say, "Hi!"
const item3 = document.querySelector('#item-3');
item3.innerText = `I say, "Hi!"`;






//change the image to be 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg'
const image = document.querySelector('img');
image.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';

//      https://www.w3schools.com/jsref/prop_img_src.asp



//  Change that image's size to be 300 pixels high.
image.height = '300';


//  Add a new image using HTML
//   Make it 300 pixels High
// placed to the left or right of the other image

const image2 = document.querySelector("#img-2");
image2.src ='https://static.scientificamerican.com/sciam/cache/file/491FB9A8-15D9-400A-AB714BC983219BCF_source.jpg'
image2.height = '300'



// console.dir(item3)
//  use the html file to write in the li
//  Add a 16th <li> to the list. 
//  with JavaScript, give it the same class as the others 
//  and an id that follows the others' numbering scheme

const item16 = document.querySelector('#item-16')

item16.innerText = "Won't get fooled again."







