document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Do you want to play this game?');
    });
});