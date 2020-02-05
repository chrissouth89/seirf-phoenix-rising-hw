$(() => {
const list = [];
// create ul
const makeList = (id, ul) => {
    let $ul = $('<ul>').addClass(ul)
    $(id).append($ul)
}

makeList('#to-do-list', 'todo');
makeList('#completed', 'finished')
// create items

const createItems = () => {
    let $li = $('<li>')
    $('.todo').empty()
    list.forEach(item => {
        $('.todo').append('<li>' + item + '</li>')
    })
}

// button event

const click = () => {
    const inputVal = $('#input-box').val();
    list.push(inputVal);
    event.preventDefault();
    $(event.currentTarget).trigger('reset');
    createItems()
}

$('#submit').on('click', click);
    

});