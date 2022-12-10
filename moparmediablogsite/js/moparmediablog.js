
document.body.innerHTML =
    '<h1>Mopar Media Blog.js</h1>';
const colorSwitch = document.getElementById('input-color-switch');

colorSwitch.addEventListener('click', checkMode);

function checkmode() {
    console.log('checking...');
    if (colorSwitch.checked) (
        console.log('dark on');
    darkmodeOn();
    )
    else {
        console.log('dark off');
        darkmodeOff();
    }
}

function darkModeOn() {
    document.body.classList.add('dark-mode');
}

