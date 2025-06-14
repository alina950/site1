window.addEventListener("scroll", function () {
    var scroll = this.document.getElementById("header");
    scroll.classList.toggle("active_active", window.scrollY > 283);
});


let burger = document.getElementById("header");
burger.addEventListener("click", function () {
    burger.classList.toggle("burger_active");
});
// app.js файлыңызга кошуңуз

// Авторизация модалдык терезеси үчүн
const loginModal = document.getElementById('loginModal');
const openLoginModalBtn = document.getElementById('openLoginModal');
const closeButton = document.querySelector('.close-button');
const loginForm = document.getElementById('loginForm');

// "Записаться" баскычын басканда модалды ачуу
if (openLoginModalBtn) {
    openLoginModalBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Шилтеменин демейки аракетин токтотот
        loginModal.style.display = 'flex'; // Модалды көрсөтүү
    });
}

// Жабуу баскычын басканда модалды жабуу
if (closeButton) {
    closeButton.addEventListener('click', function () {
        loginModal.style.display = 'none'; // Модалды жашыруу
    });
}

// Модалдын сыртын басканда жабуу
window.addEventListener('click', function (event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Форма жөнөтүлгөндө (мисал үчүн)
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Форманын жөнөтүлүшүн токтотот
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        alert(`Колдонуучу аты: ${username}\nСырсөз: ${password}\n(Чыныгы авторизация бул жерде ишке ашырылат)`);

        // Бул жерде сиз серверге маалымат жөнөтүп, чыныгы авторизацияны ишке ашырышыңыз керек
        // Мисалы: fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }) })

        loginModal.style.display = 'none'; // Авторизациядан кийин модалды жабуу
        loginForm.reset(); // Форманы тазалоо
    });
}

let modal = document.getElementById('my_id');
function more_information() {
    if (modal) {
        modal.classList.toggle("modal_active");
    }
}