document.querySelector(".card__list").addEventListener("click", fTabs);

function fTabs(event) {
  console.log(event);
  //проверяем на каком элементе происходит событие
  if (event.target.className == "card__link") {
    //получаем значение атрибута этого элемента
    let dataTab = event.target.getAttribute("data-tab");
    //получаем массивы элементов
    let $tabtext = document.querySelectorAll(".card__text");
    let $link = document.querySelectorAll(".card__link");
    let $icon = document.querySelectorAll(".card__icon");
    //сравниваем значение атрибута с идексом элемента
    for (let i = 0; i < $icon.length; i++) {
      if (dataTab == i) {
        $icon[i].classList.add("card__icon-active");
        console.log($icon);
      } else {
        $icon[i].classList.remove("card__icon-active");
      }
    }
    //сравниваем значение атрибута с идексом элемента
    for (let i = 0; i < $link.length; i++) {
      if (dataTab == i) {
        $link[i].classList.add("card__link-active");
        console.log($link);
      } else {
        $link[i].classList.remove("card__link-active");
      }
    }
    //сравниваем значение атрибута с идексом элемента
    for (let i = 0; i < $tabtext.length; i++) {
      if (dataTab == i) {
        $tabtext[i].classList.add("card__text-active");
        console.log($tabtext);
      } else {
        $tabtext[i].classList.remove("card__text-active");
      }
    }
    //функция отображения вкладок
    let content = document.getElementsByClassName("content__box");

    function changeTab(attribute, arr) {
      for (let i = 0; i < arr.length; i++) {
        if (attribute == i) {
          arr[i].style.display = "flex;";
        } else {
          arr[i].style.display = "none;";
        }
      }
    }

    changeTab(dataTab, content);

    //сравниваем значение атрибута с идексом элемента
    for (let i = 0; i < content.length; i++) {
      if (dataTab == i) {
        content[i].style.display = "flex";
      } else {
        content[i].style.display = "none";
      }
    }
    //функция отображения кнопки
    function changeTabItem() {
      let $btn = document.querySelector(".footer__button");
      switch (dataTab) {
        case dataTab == 1:
          console.log("none");
          $btn.style.display = "none";
        case dataTab == 0:
          console.log("block");
          $btn.style.display = "block";
      }
    }
    changeTabItem();
    $link.onclick = changeTabItem;
  }
}
