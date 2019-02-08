//Get the html element by Id
let okButton = document.getElementById('ok-button');
let textArea = document.getElementById('text-area');
let textArea2 = document.getElementById('another-area');
textArea2.style.display = 'none';

okButton.addEventListener('click', function() {
    //Set the inner text to new text
    textArea.innerText = "Button clicked!";
    textArea2.style.display = 'block';
});