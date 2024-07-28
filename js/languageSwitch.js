document.addEventListener('DOMContentLoaded', function() {
    const switchToEnglish = document.querySelectorAll('.lang-switch-en');
    const switchToChinese = document.querySelectorAll('.lang-switch-zh');

    function setLanguage(lang) {
        const currentUrl = window.location.href;
        const baseUrl = currentUrl.replace('_en.html', '').replace('.html', '');
        const newUrl = baseUrl + (lang === 'en' ? '_en.html' : '.html');

        document.querySelectorAll('.language-switch a').forEach(link => {
            link.classList.remove('active');
            if ((link.classList.contains('lang-switch-en') && lang === 'en') ||
                (link.classList.contains('lang-switch-zh') && lang === 'zh')) {
                link.classList.add('active');
            }
        });
    }

    switchToEnglish.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            setLanguage('en');
        });
    });

    switchToChinese.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            setLanguage('zh');
        });
    });
});