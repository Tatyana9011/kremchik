
export function kontactsFixed(target){
    const fixed = document.querySelector('.fixed');
    const viber = document.querySelector('.viber');
    const telegram = document.querySelector('.telegram');
    const instagramm = document.querySelector('.instagramm');

    fixed.classList.toggle('anima');
    viber.classList.toggle('show');
    telegram.classList.toggle('show');
    instagramm.classList.toggle('show');
}
