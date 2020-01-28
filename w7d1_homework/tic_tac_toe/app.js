const shapes = ["x", "o"];

const changeMove = (event) => {
    let $currentMove = $(event.currentTarget);
    $currentMove.addClass(shapes[1])
    shapes.push(shapes[0])
    shapes.shift([1]);
}
//make board
const generateGrid = () => {
    let $container = $("<div>").addClass("container");
    $("body").append($container);
    for (let i = 1; i < 10; i++){
    let $div = $("<div>").attr("id", i).addClass("boxes");
    $container.append($div);
    }
}

let player = 1;


$(() => {
    generateGrid()
    $(".boxes").on('click', changeMove);
    var square = $(this);
    if(square.hasClass("boxes x") || square.hasClass("boxes o")) {
        alert("Please select another square")
    } else {
        if(player === 1) {
            square.addClass("x");
            player = 2;
        } else {
            square.addClass("o");
            player = 1;
        }
    }
});