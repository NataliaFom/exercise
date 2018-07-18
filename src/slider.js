//Слайдер

function slider(f, img, button, V, Vo, arrows) {
    var iii = 0,
        start = null,
        clear = 0;

    function step(time) {
        if (start === null) start = time;
        var progress = time - start;
        if (progress > V) {
            start = null;
            for (var i = 0; i < img.length; i++) {
                img[i].style.zIndex = "0";
                button[i].style.opacity = "0.5";
            }
            img[iii].style.zIndex = "1";
            iii = ((iii != (img.length - 1)) ? (iii + 1) : 0);
            img[iii].style.zIndex = "2";
            img[iii].style.opacity = "0";
            button[iii].style.opacity = "1";
        } else if (img[iii].style.opacity != "") {
            img[iii].style.opacity = ((progress / Vo < 1) ? (progress / Vo) : 1);
        }
        if (clear != "0" && progress > Vo) {} else {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
    f.onmouseenter = function () {
        if (clear == "0") clear = "1";
    } // при наведении на слайдер
    f.onmouseleave = function () {
        if (clear == "1") {
            clear = "0";
            requestAnimationFrame(step);
        }
    } // курсор убран со слайдера
    for (var j = 0; j < button.length; j++) { // при нажатии кнопок
        button[j].onclick = function () {
            for (var i = 0; i < img.length; i++) {
                img[i].style.zIndex = "0";
                button[i].style.opacity = "0.5";
            }
            iii = +this.value;
            img[this.value].style.zIndex = "2";
            button[this.value].style.opacity = "1";
        }
        arrows[0].onclick = function () {
            img[iii].style.zIndex = "0";
            button[iii].style.opacity = "0.5";
            iii--;
            iii = ((iii < 0) ? img.length - 1 : iii);
            img[iii].style.zIndex = "2";
            button[iii].style.opacity = "1";
        }
        arrows[1].onclick = function () {
            img[iii].style.zIndex = "0";
            button[iii].style.opacity = "0.5";
            iii++;
            iii = ((iii === img.length) ? 0 : iii);
            img[iii].style.zIndex = "2";
            button[iii].style.opacity = "1";
        }
    }
}

// Слайдер для новых товаров
function sliderNewGoods(slider, images, nextButton, prevButton) {
	
let to = 0;
let to1 = 1;
let to2 = 2;


function showPrev() {
  //удаляем все классы
	document.getElementsByClassName('new-deals__product_image')[to].classList.remove('new-deals__product_first');

  document.getElementsByClassName('new-deals__product_image')[to1].classList.remove('new-deals__product_active');
  document.getElementsByClassName('new-deals__product_image')[to2].classList.remove('new-deals__product_last');
  document.getElementsByClassName('new-deals__product_image')[to].classList.remove('new-deals__product');
  document.getElementsByClassName('new-deals__product_image')[to1].classList.remove('new-deals__product');
  document.getElementsByClassName('new-deals__product_image')[to2].classList.remove('new-deals__product');
  //меняем шаг
  to > 0 ? to-- : to = images.length-1;
  to1 > 0 ? to1-- : to1 = images.length-1;
  to2 > 0 ? to2-- : to2 = images.length-1;
  // назначаем новый класс
  
  document.getElementsByClassName('new-deals__product_image')[to].classList.add('new-deals__product_first');
  document.getElementsByClassName('new-deals__product_image')[to].classList.add('new-deals__product');
  
  document.getElementsByClassName('new-deals__product_image')[to1].classList.add('new-deals__product_active');
  document.getElementsByClassName('new-deals__product_image')[to1].classList.add('new-deals__product');

  document.getElementsByClassName('new-deals__product_image')[to2].classList.add('new-deals__product_last');
  document.getElementsByClassName('new-deals__product_image')[to2].classList.add('new-deals__product');

}

	function showNext() {
  //удаляем все классы
  document.getElementsByClassName('new-deals__product_image')[to].classList.remove('new-deals__product_first');
  document.getElementsByClassName('new-deals__product_image')[to1].classList.remove('new-deals__product_active');
  document.getElementsByClassName('new-deals__product_image')[to2].classList.remove('new-deals__product_last');
  document.getElementsByClassName('new-deals__product_image')[to].classList.remove('new-deals__product');
  document.getElementsByClassName('new-deals__product_image')[to1].classList.remove('new-deals__product');
  document.getElementsByClassName('new-deals__product_image')[to2].classList.remove('new-deals__product');
  //меняем шаг

	
  to < images.length-1 ? to++ : to = 0;
  to1 < images.length-1 ? to1++ : to1 = 0;
  to2 < images.length-1 ? to2++ : to2 = 0;
  // назначаем новый класс
 
  document.getElementsByClassName('new-deals__product_image')[1].classList.add('new-deals__product_first');
  document.getElementsByClassName('new-deals__product_image')[1].classList.add('new-deals__product');
  
  document.getElementsByClassName('new-deals__product_image')[2].classList.add('new-deals__product_active');
  document.getElementsByClassName('new-deals__product_image')[2].classList.add('new-deals__product');
 
  document.getElementsByClassName('new-deals__product_image')[3].classList.add('new-deals__product_last');
  document.getElementsByClassName('new-deals__product_image')[3].classList.add('new-deals__product');
}

prevButton.onclick = showPrev;
nextButton.onclick = showNext;
	
}

export { slider, sliderNewGoods };