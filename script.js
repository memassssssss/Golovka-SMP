// Копирование IP адреса
document.querySelector('.copy-ip')?.addEventListener('click', function() {
    const ip = document.querySelector('.ip-address').textContent;
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP скопирован в буфер обмена!');
    });
});

// Работа FAQ
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});