const buttonMen = document.querySelector('.header__button-gender--men');
const buttonWomen = document.querySelector('.header__button-gender--women');
const body = document.body;
const cartImage = document.querySelector('.card__image');
const cardText = document.querySelector('.card__text');
const buttonText = document.querySelector('.header__button-change--text');
const buttonImage = document.querySelector('.header__button-change--image');

/* =====================
Пырвый вариант решения
===================== */

const state = {
    gender: body.classList.contains('women') ? 'women' : 'men',
};

const getRandomForArr = (arr) => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
}

const getData = () => fetch('db.json').then((response) => response.json()); // в скобках у then сокращенная запись функции

const changeDOM = () => {
    if (state.photo.includes('black')) {
        cardText.style.color = '#fff';
    } else {
        cardText.style.color = '#000';
    }

    cartImage.src = `img/${state.photo}`;
    cardText.textContent = state.text;
}

    const getDataToCard = () => {
    getData().then(data => {
        state.text = getRandomForArr(data.text[state.gender]);
        state.photo = getRandomForArr(data.photo[state.gender]);
        changeDOM();
    });
    // console.log('state: ', state);
}

const changeToMen = () => {
    if (state.gender !== 'men') {
        body.classList.add('men');
        body.classList.remove('women');
        state.gender = 'men';
        buttonMen.classList.add('active');
        buttonWomen.classList.remove('active');
        buttonMen.disabled = true;
        buttonWomen.disabled = false;
        getDataToCard();
    }
}

const changeToWomen = () => {
    if (!state.gender !== 'women') {
        body.classList.add('women');
        body.classList.remove('men');
        state.gender = 'women';
        buttonWomen.classList.add('active');
        buttonMen.classList.remove('active');
        buttonWomen.disabled = true;
        buttonMen.disabled = false;
        getDataToCard();
    }
}

const changeText = () => {
    getData().then(data => {
        state.text = getRandomForArr(data.text[state.gender]);
        changeDOM();
    });
};

const changeImage = () => {
    getData().then(data => {
        state.photo = getRandomForArr(data.photo[state.gender]);
        changeDOM();
    });
};

buttonMen.addEventListener('click', changeToMen);
buttonWomen.addEventListener('click', changeToWomen);
buttonText.addEventListener('click', changeText);
buttonImage.addEventListener('click', changeImage);
getDataToCard();

/* =====================
Второй вариант решения
===================== */

// const changeGender = () => {
//     const state = {
//         gender: body.classList.contains('women')
//     }

//     if (state.gender) {
//         body.classList.add('men');
//         body.classList.remove('women');
//         buttonMen.classList.add('active');
//         buttonWomen.classList.remove('active');
//         buttonMen.disabled = true;
//         buttonWomen.disabled = false;
//     } else {
//         body.classList.add('women');
//         body.classList.remove('men');
//         buttonWomen.classList.add('active');
//         buttonMen.classList.remove('active');
//         buttonWomen.disabled = true;
//         buttonMen.disabled = false;
//     }
// }

// buttonMen.addEventListener('click', changeGender);
// buttonWomen.addEventListener('click', changeGender);