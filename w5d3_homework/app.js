

$( () => {
    







if (typeof jQuery === "undefined"){
    console.log("oops, I still have to link my jQuery properly!");
} else {console.log("I did it! I linked jQuery and this js file!")};


const $container = $('#container') 
console.log($container)


const $h1 = $('<h1>')
console.log($h1)
$h1.text('Hello World!')
$container.append($h1)


const $h2 = $('<h2>')
$h2.text('Chris')
$container.append($h2)


const $h3 = $('<h3>')
$h3.text('Ravenclaw')
$container.append($h3)


const $h4 = $('<h4>').addClass('Cat')
$h4.text('Felix')
$container.append($h4)
console.log($h4)


const $h42 = $('<h4>')
$h42.text('Holly Wand with Phoenix Feather Core')
$container.append($h42)

  });

