const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const changeColor = document.querySelector('#change');
const color = document.querySelector('.color');
const copy = document.querySelector('#copy');



changeColor.addEventListener('click', e => {
    // #f15025
    let hexColor = "#";

    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNum()]; 
    };

    document.body.style.backgroundColor = hexColor;
    color.value = hexColor;
    color.style.color = hexColor;
    // color.style.textShadow = '#ccc 1px 1px 1px, #ccc -1px -1px 1px';    
    
});


// build a random number 
const getRandomNum = e => {
    return Math.floor(Math.random() * hex.length);
};


// CopyText
function copyTxt(){
    color.select();
    document.execCommand('copy');
}

copy.addEventListener('click', copyTxt);

