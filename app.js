let alertButton = document.getElementById('alert');
let sommeButton = document.getElementById('somme');

alertButton.addEventListener('click', () => {
    alert('Hello world !!!');
})

sommeButton.addEventListener('click', () => {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = 5 + 6;
    document.body.appendChild(newDiv);
})

