document.getElementById('DivA').onclick = function() {
    divTest = document.getElementById('DivB');
    if (divTest.style.display === "none") {
        divTest.style.display = 'block';
    }
    else {
        divTest.style.display = "none";
    }
    divTest = document.getElementById('DivC');
     {
        divTest.style.display = 'block';
    }
}

document.getElementById('DivB').onclick = function() {
    divTest = document.getElementById('DivA');
    if (divTest.style.display === "none") {
        divTest.style.display = 'block';
    }
    else {
        divTest.style.display = "none";
    }
    divTest = document.getElementById('DivC');
     {
        divTest.style.display = 'block';
    }
}