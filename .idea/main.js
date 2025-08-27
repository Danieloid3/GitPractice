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
/* Menú móvil */
const navToggle = $('.nav-toggle');
const nav = $('#site-nav');
navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-expanded', String(!expanded));
    navToggle.setAttribute('aria-label', expanded ? 'Abrir menú' : 'Cerrar menú');
});

/* Filtros de sabores */
const chips = $$('.chip');
const cards = $$('#grid-sabores .card');

chips.forEach(chip => {
    chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');

        const filter = chip.dataset.filter;
        cards.forEach(card => {
            const show = filter === 'all' || card.dataset.tags.includes(filter);
            card.style.display = show ? '' : 'none';
        });
    });
});

/* Carrito simple en memoria */
const cart = $('.cart');
const cartList = $('#cart-list');
const cartFab = $('.cart-fab');
const cartClose = $('.cart__close');
const cartClear = $('.cart__clear');
const cartCTA = $('.cart__cta');

let items = [];

function renderCart(){
    cartList.innerHTML = '';
    if(items.length === 0){
        cartList.innerHTML = '<li class="cart__item" aria-live="polite">Tu carrito está vacío.</li>';
        cartFab.hidden = true;
    } else {
        cartFab.hidden = false;
        items.forEach((name, i) => {
            const li = document.createElement('li');
            li.className = 'cart__item';
            li.innerHTML = `
        <span>${name}</span>
        <div>
          <button class="btn btn--sm" data-remove="${i}">Quitar</button>
        </div>`;
            cartList.appendChild(li);
        });
    }
}
renderCart();