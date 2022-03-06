const faq = () => {
    const slidesInDown = document.querySelector('.faq-cont'),
        slidesBody = slidesInDown.querySelectorAll('.faq-a'),
        slidesHead = slidesInDown.querySelectorAll('.faq-item');

    const toggleSlides = index => {
        for (let i = 0; i < slidesBody.length; i++) {
            if (index === i) {
                slidesBody[i].classList.add('active');
            } else {
                slidesBody[i].classList.remove('active');
            }
        }
    };

    const toggleHeads = index => {
        for (let i = 0; i < slidesHead.length; i++) {
            if (index === i) {
                slidesHead[i].classList.add('active');
            } else {
                slidesHead[i].classList.remove('active');
            }
        }
    };

    slidesInDown.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;
        target = target.closest('.faq-item');

        if (target) {
            slidesHead.forEach((item, i) => {
                if (item === target) {
                    toggleSlides(i);
                    toggleHeads(i);
                }
            });
        }
    });
};
faq();

const scrollTo = () => {
    document.querySelectorAll('a[href^="#"]:not(.header-search)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
scrollTo();