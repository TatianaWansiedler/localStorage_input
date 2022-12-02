// Необходимо реализовать интерфейс, с полем ввода (textarea). 
// При обновлении страницы текст должен сохраняться в поле ввода. 
// Реализуйте данное приложение через textarea и событие input.

const textarea = document.querySelector('.input');
const btn_delete = document.querySelector('.btn-delete');

textarea.placeholder = 'write a message and refresh the page...'

textarea.value = localStorage.getItem('message')

textarea.addEventListener('input', (event) => {
    const value = event.target.value
    localStorage.setItem('message', value);
})

btn_delete.addEventListener('click', () => {
    textarea.value = ''
    localStorage.setItem('message', '')
})