$("body").css({ 'touch-action': 'none' });
document.body.addEventListener('touchmove', (e) => {
    e.preventDefault();
    e.stopPropagation();
}, { passive: false })
