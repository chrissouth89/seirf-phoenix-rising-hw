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


const $h4 = $('<h4>').addClass('cat')
$h4.text('Felix')
$container.append($h4)
console.log($h4)


const $h42 = $('<h4>')
$h42.text('Holly Wand with Phoenix Feather Core')
$container.append($h42)


const $ul = $('<ul>')
$ul.attr('storage', 'trunk')
$container.append($ul)

const $li = $('<li>')
$li.text('Butter Beer')
$ul.append($li)

const $li2 = $('<li>')
$li2.text('Invisibility Cloak').addClass('secret')
$ul.append($li2)

const $li3 = $('<li>')
$li3.text('Magic Map').addClass('secret')
$ul.append($li3)

const $li4 = $('<li>')
$li4.text('Time Turner').addClass('secret')
$ul.append($li4)

const $li5 = $('<li>')
$li5.text('Leash').addClass('cat')
$ul.append($li5)

const $li6 = $('<li>')
$li6.text('Bertie Bott\'s Every Flavor Jelly Beans')
$ul.append($li6)

const $h5 = $('<h5>')
$h5.text('Spring 2017')
$container.append($h5)

const $table = $('<table>')
$container.append($table)

const $thead = $('<thead>')
$table.append($thead)

const $tr = $('<tr>')
$thead.append($tr)

const $th = $('<th>')
$th.text('Day')
$tr.append($th)

const $th2 = $('<th>')
$th2.text('Classes')
$tr.append($th2)

const $tr2 = $('<tr>')
$table.append($tr2)

const $td = $('<td>')
$td.text('Monday')
$tr.append($td)

const $td2 = $('<td>')
$td2.text('Charms, Quidditch Practice, History of Magic')
$tr.append($td2)

$h42.remove();

$li.remove();

$h42.insertAfter($h4).text('Yew Wand with Pheonix Feather Core')

$h42.css('color', 'indigo')

$h4.remove()

$h4.insertAfter($table)

$h4.remove()

$h4.insertAfter($h3)

$('.secret').hide('slow').delay(2000).show('slow')

$li5.addClass('cabbage')

$li5.removeClass('cabbage')
});