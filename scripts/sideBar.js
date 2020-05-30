const openButton = document.querySelector('#open');
const menu = document.querySelector('.menu')

openButton.addEventListener('click', () => {
    if(openButton.classList.contains('closed')) {
        openButton.src = './images/icon-close.svg';
        openButton.classList.remove('closed');
        openButton.classList.add('opened');
        menu.style.display = 'flex'
    }

    else if(openButton.classList.contains('opened')) {
        openButton.src = './images/icon-hamburger.svg';
        openButton.classList.remove('opened');
        openButton.classList.add('closed');
        menu.style.display = 'none';
    }
})