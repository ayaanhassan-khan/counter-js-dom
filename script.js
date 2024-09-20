let x = 0;
let res = document.getElementById('display');
res.innerHTML = x;

function sum() {
    x++;
    res.innerHTML = x;
}

const subtract = function() {
    x--;
    res.innerHTML = x;
}

const reset = () => {
    x = 0;
    res.innerHTML = x;
}