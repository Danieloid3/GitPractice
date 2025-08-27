// Utilidades
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* Header sombra on scroll */
const header = $('.header');
const onScroll = () => {
    header.dataset.scrolled = window.scrollY > 4 ? 'true' : 'false';
};
document.addEventListener('scroll', onScroll);
onScroll();