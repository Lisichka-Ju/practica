// Получаем все радио-кнопки
const radioButtons = document.querySelectorAll('input[name="btnradio"]');
// Получаем элемент изображения
const photo = document.getElementById('photo');

const photos = {
    btnradio1: 'img/photo1.jpg',
    btnradio2: 'img/photo2.jpg',
    btnradio3: 'img/photo3.jpg',
};

// Функция для обновления фотографии при смене радио-кнопки
function handleRadioChange(event) {
    const selectedId = event.target.id;
    const newPhotoSrc = photos[selectedId];

    if (newPhotoSrc) {
        photo.src = newPhotoSrc; // для изименения изображений
        console.log(`Показана фотография: ${newPhotoSrc}`);
    }
}

// Добавляем обработчики изменения для каждой радио-кнопки
radioButtons.forEach(radio => {
    radio.addEventListener('change', handleRadioChange);
});

// При загрузке страницы устанавливаться правильную фотографию по умолчанию
window.addEventListener('DOMContentLoaded', () => {
    const checkedRadio = document.querySelector('input[name="btnradio"]:checked');
    if (checkedRadio) {
        const defaultPhoto = photos[checkedRadio.id];
        if (defaultPhoto) {
            photo.src = defaultPhoto;
            console.log(`По умолчанию показана фотография: ${defaultPhoto}`);
        }
    }
});