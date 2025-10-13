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

  InitFAQItems(document.querySelectorAll('.advantages2__item'))
  InitTabs('.prices')

  const howFastSelects = document.querySelectorAll('.howFast__formBlock-input')

  if(howFastSelects.length){
    howFastSelects.forEach((select) =>{
      select.addEventListener('click',()=>{
        const selectList = select.querySelector('.howFast__formBlock-list')
        if(selectList){
          selectList.classList.toggle('active')
        }
      })

      const selectListItems = select.querySelectorAll('.howFast__formBlock-list .howFast__formBlock-select')
      if(selectListItems.length){
        selectListItems.forEach((item) =>{
          item.addEventListener('click',() =>{
            
            const selectText = select.querySelector('.howFast__formBlock-text')
            selectText.innerHTML = item.innerHTML
          })
        })
      }
    })
  }

});



document.addEventListener('DOMContentLoaded', function() {
		let flagMap = false;
		document.addEventListener('scroll', function() {
			const blockMap = document.getElementById('yandex_map');
      if(blockMap){
        const posTop = blockMap.getBoundingClientRect().top;
        if (typeof posTop !== "undefined" && posTop < window.innerHeight && !flagMap) {
          if (!document.querySelector('[src="https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU"]')) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';
            document.head.appendChild(script);
          }
          
            setTimeout(() => {
              ymaps.ready(init);
            }, 1500);
          

          function init() {
            var myMap = new ymaps.Map("yandex_map", {
                center: [55.73109,37.621291],
                zoom: 16
              }, {
                searchControlProvider: 'yandex#search',
                
              }),
              myPlacemark = new ymaps.Placemark(myMap.getCenter());
            myMap.geoObjects
              .add(myPlacemark);
            

              myMap.controls.remove('routeButtonControl');   
              myMap.controls.remove('routePanelControl');   
              myMap.controls.remove('routeEditorControl');   
              myMap.controls.remove('searchControl');
              myMap.controls.remove('zoomControl');
              myMap.controls.remove('geolocationControl');
              myMap.controls.remove('trafficControl');
              myMap.controls.remove('typeSelector');
              myMap.controls.remove('fullscreenControl');
              myMap.controls.remove('rulerControl');
               myMap.behaviors.disable('scrollZoom')
          }

          flagMap = true;
        }
      }
		});
	});