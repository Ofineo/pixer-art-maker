// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let canvasHeight, canvasWidth, pixelColor;
let canvas;
let ctx;

function makeGrid() {

    $('#pixel_canvas').append(`<canvas width="${canvasWidth}" height="${canvasHeight}" ></canvas>`)

    canvas = $('canvas');
    ctx = canvas.getContext('2d');

    ctx.createImageData(canvasHeight, canvasWidth);
}

function getSize() {
    canvasHeight = $('#input_height').val();
    canvasWidth = $('#input_width').val();
    console.log(canvasHeight, canvasWidth);
    makeGrid();
}

$('#sizePicker').submit(getSize);
$('#colorPicker').change(getColor);

function getColor() {
    pixelColor = $('#colorPicker').val();
    console.log(pixelColor);
}

let image = ctx.getImageData(0, 0, canvasHeight, canvasWidth);
console.log(image);

function paintRed(image) {
    let numPixels = image.data.length / 4;
    for (let i = 0; i < numPixels; i++) {
        if (i % 10 === 0) {
            image.data[i * 4] = 255;
            image.data[i * 4 + 3] = 255;
        }
    }
    ctx.putImageData(image, 0, 0);
}
paintRed(image); 	 