/* document.querySelectorAll('.left-icon').forEach((button) => {
    button.addEventListener('click', () => {
        const cardList = button
            .closest('.swiping-container')
            .querySelector('.card-ul');
        cardList.scrollBy({
            left: -220,
            behavior: 'smooth',
        });
    });
});

document.querySelectorAll('.right-icon').forEach((button) => {
    button.addEventListener('click', () => {
        const cardList = button
            .closest('.swiping-container')
            .querySelector('.card-ul');
        cardList.scrollBy({
            left: 220,
            behavior: 'smooth',
        });
    });
});
 */

let leftButtons = document.getElementsByClassName('left-icon');

for (let i = 0; i < leftButtons.length; i++) {
    leftButtons[i].addEventListener('click', function () {
        let swipingContainer = this.closest('.swiping-container');

        let cardList = swipingContainer.querySelector('.card-ul');

        cardList.scrollBy({
            left: -220,
            behavior: 'smooth',
        });
    });
}

let rightButtons = document.getElementsByClassName('right-icon');

for (let j = 0; j < rightButtons.length; j++) {
    rightButtons[j].addEventListener('click', function () {
        let swipingContainer = this.closest('.swiping-container');
        let cardList = swipingContainer.querySelector('.card-ul');

        cardList.scrollBy({
            left: 220,
            behavior: 'smooth',
        });
    });
}
