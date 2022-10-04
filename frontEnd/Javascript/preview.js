function strothTextEnter (elem) {
    var text = document.querySelector('.previewImgsStroth');
    var egorova = document.getElementById('egorova');
    var welcomeText = document.querySelector('.welcomeText');


    welcomeText.style.display = "none"
    egorova.style.opacity = "0.3";
    text.style.display = 'flex';
    console.log(elem);
}

function strothTextLeave (elem) {
    var text = document.querySelector('.previewImgsStroth');
    var egorova = document.getElementById('egorova');
    var welcomeText = document.querySelector('.welcomeText');


    welcomeText.style.display = "flex"
    egorova.style.opacity = "1";
    text.style.display = 'none';
}

function egorovaTextEnter (elem) {
    var text = document.querySelector('.previewImgsEgorova');
    var stroth = document.getElementById('stroth');
    var welcomeText = document.querySelector('.welcomeText');


    welcomeText.style.display = "none"
    stroth.style.opacity = "0.3";
    text.style.display = 'flex';
}

function egorovaTextLeave (elem) {
    var text = document.querySelector('.previewImgsEgorova');
    var stroth = document.getElementById('stroth');
    var welcomeText = document.querySelector('.welcomeText');


    welcomeText.style.display = "flex"
    stroth.style.opacity = "1";
    text.style.display = 'none';
}

window.addEventListener('load', (event) => {
    let dropdown = document.querySelector('.dropdown')

    dropdown.addEventListener('mouseenter', (e) => {
        if (dropdown.classList.contains('closed')) {
            dropdown.classList.remove('closed')
        }
    })
    dropdown.addEventListener('mouseleave', (e) => {
        if (!dropdown.classList.contains('closed')) {
            dropdown.classList.add('closed')
        }
    })
});

