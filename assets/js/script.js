function InitTabs(container) {
  //ищет внутри контейнера все элементы tab-item и tab-content. Если элементов поровну тогда активирует табы
  const tabContainer = document.querySelector(container);
  if (tabContainer) {
    const tabItems = tabContainer.querySelectorAll(".tab-item");
    const tabContents = tabContainer.querySelectorAll(".tab-content");

    if (
      tabContainer &&
      tabItems.length &&
      tabContents.length &&
      tabItems.length === tabContents.length
    ) {
      // if (!tabItems[0].classList.contains("active")) {
      //   tabItems[0].classList.add("active");
      // }
      // if (!tabContents[0].classList.contains("active")) {
      //   tabContents[0].classList.add("active");
      // }
      tabItems.forEach((tabItem, index) => {
        tabItem.addEventListener("click", (e) => {
          tabItems.forEach((item, index) => {
            item.classList.remove("active");
            tabContents[index].classList.remove("active");
          });
          tabItem.classList.add("active");
          tabContents[index].classList.add("active");
        });
      });
    }
  }
}

function InitFAQItems(FAQItems) {
  if (FAQItems.length) {
    FAQItems.forEach((question) => {
      question.addEventListener("click", () => {
        const questionBlock = question.querySelector(".question");
        const answerBlock = question.querySelector(".answer");

        questionBlock.classList.toggle("opened");
        answerBlock.classList.toggle("opened");

        if (answerBlock.classList.contains("opened")) {
          answerBlock.setAttribute(
            "style",
            `height:${answerBlock.scrollHeight}px;`
          );
        } else {
          answerBlock.setAttribute("style", `height:0;`);
        }
      });
    });
  }
}



document.addEventListener("DOMContentLoaded", () => {
  const headerServicesBtn = document.querySelector('.servicesItem')
  const headerServicesMenu = document.querySelector('.header__servicesMenu')
  const headerServicesMenuBackArr = document.querySelector('.header__servicesMenu-backArr')
  if(headerServicesBtn && headerServicesMenu && headerServicesMenuBackArr){
    headerServicesBtn.addEventListener('click',() =>{
        headerServicesBtn.classList.toggle('active')
        headerServicesMenu.classList.toggle('active')
    })
    headerServicesMenu.addEventListener('click', (e) =>{
        e.stopPropagation()
    })
    headerServicesMenuBackArr.addEventListener('click', () =>{
      headerServicesMenu.classList.remove('active')
    })
    InitTabs('.header__servicesMenu')
  }

  const headerServicesMenuCategoryItem = document.querySelectorAll('.header__servicesMenu-categoryItem')
  const servicesRightBlock = document.querySelector('.header__servicesMenu-rightBlock')
  if(headerServicesMenuCategoryItem.length && servicesRightBlock){
    headerServicesMenuCategoryItem.forEach((item) =>{
      item.addEventListener('click', () =>{
        servicesRightBlock.classList.add('active')
      })
    })
  }

  const headerServicesMenuCategoryNameBackArr = document.querySelectorAll('.header__servicesMenu-categoryNameBackArr')
  if(headerServicesMenuCategoryNameBackArr.length && servicesRightBlock){
    headerServicesMenuCategoryNameBackArr.forEach((item) =>{
      item.addEventListener('click',() =>{
        servicesRightBlock.classList.remove('active')
      })
    })
  }

    InitFAQItems(document.querySelectorAll('.footer__services-item'))
    
    InitFAQItems(document.querySelectorAll('.prices__item-titleBlock'))
    InitTabs('.prices')
});