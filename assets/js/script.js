Fancybox.bind("[data-fancybox]", {});

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
  const headerServicesBtn = document.querySelector(".servicesItem");
  const headerServicesMenu = document.querySelector(".header__servicesMenu");
  const headerServicesMenuBackArr = document.querySelector(
    ".header__servicesMenu-backArr"
  );
  if (headerServicesBtn && headerServicesMenu && headerServicesMenuBackArr) {
    headerServicesBtn.addEventListener("click", () => {
      headerServicesBtn.classList.toggle("active");
      headerServicesMenu.classList.toggle("active");
    });
    headerServicesMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    headerServicesMenuBackArr.addEventListener("click", () => {
      headerServicesMenu.classList.remove("active");
    });
    InitTabs(".header__servicesMenu");
  }

  const headerServicesMenuCategoryItem = document.querySelectorAll(
    ".header__servicesMenu-categoryItem"
  );
  const servicesRightBlock = document.querySelector(
    ".header__servicesMenu-rightBlock"
  );
  if (headerServicesMenuCategoryItem.length && servicesRightBlock) {
    headerServicesMenuCategoryItem.forEach((item) => {
      item.addEventListener("click", () => {
        servicesRightBlock.classList.add("active");
      });
    });
  }

  const headerServicesMenuCategoryNameBackArr = document.querySelectorAll(
    ".header__servicesMenu-categoryNameBackArr"
  );
  if (headerServicesMenuCategoryNameBackArr.length && servicesRightBlock) {
    headerServicesMenuCategoryNameBackArr.forEach((item) => {
      item.addEventListener("click", () => {
        servicesRightBlock.classList.remove("active");
      });
    });
  }

  const headerBurger = document.querySelector(".burger-btn");
  const mobileNav = document.querySelector(".header__nav");
  const mobileNavList = mobileNav.querySelector(".header__nav-list");

  if (headerBurger && mobileNav && mobileNavList) {
    headerBurger.addEventListener("click", () => {
      headerBurger.classList.toggle("active");
      mobileNav.classList.toggle("active");
    });
    mobileNav.addEventListener("click", () => {
      headerBurger.classList.remove("active");
      mobileNav.classList.remove("active");
    });
    mobileNavList.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  InitFAQItems(document.querySelectorAll(".footer__services-item"));

  InitFAQItems(document.querySelectorAll(".prices__item-titleBlock"));

  InitFAQItems(document.querySelectorAll(".advantages2__item"));

  InitFAQItems(document.querySelectorAll(".textWithPanel__services-item"));
  InitFAQItems(document.querySelectorAll(".faqBlock__faq"));
  InitTabs(".prices");

  const howFastSelects = document.querySelectorAll(".howFast__formBlock-input");

  if (howFastSelects.length) {
    howFastSelects.forEach((select) => {
      select.addEventListener("click", () => {
        const selectList = select.querySelector(".howFast__formBlock-list");
        if (selectList) {
          selectList.classList.toggle("active");
        }
      });

      const selectListItems = select.querySelectorAll(
        ".howFast__formBlock-list .howFast__formBlock-select"
      );
      if (selectListItems.length) {
        selectListItems.forEach((item) => {
          item.addEventListener("click", () => {
            const selectText = select.querySelector(".howFast__formBlock-text");
            selectText.innerHTML = item.innerHTML;
          });
        });
      }
    });
  }

  const sircle = document.querySelector(
    ".motivation__sircleBlock-absoluteSircle svg"
  );
  if (sircle) {
    window.addEventListener("resize", () => {
      const containerWidth = document.querySelector(".motivation ").offsetWidth;
      const svgWidth = 430; // viewBox width
      const translateX = Math.round((containerWidth - svgWidth) / 2);

      if (translateX < 0) {
        sircle.setAttribute("style", `transform: translateX(${translateX}px);`);
      } else {
        sircle.setAttribute("style", `transform: translateX(0);`);
      }
    });
  }

  const textblockContents = document.querySelectorAll(
    ".textWithPanel__content ul"
  );
  const textBlocksTitles = document.querySelectorAll(
    ".textBlock h2, .textBlock h3"
  );

  if (textblockContents.length && textBlocksTitles.length) {
    textBlocksTitles.forEach((title, index) => {
      title.setAttribute("id", `title-${index}`);
      textblockContents.forEach((list) => {
        const contentItem = document.createElement("li");
        contentItem.innerHTML = `<a href="#title-${index}">${title.innerHTML}</a>`;
        list.appendChild(contentItem);
      });
    });
  }

  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);
      const targetElement = document.getElementById(blockID);

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  }

  const filters = document.querySelectorAll(".filters-container input");

  const filtersItems = document.querySelectorAll(
    ".filtersItems .doctors__item"
  );

  if (filters.length && filtersItems.length) {
    filters.forEach((filter) => {
      filter.addEventListener('click' , () =>{
        const activeNames = []
       filters.forEach((filter) =>{
        if(filter.checked){
          activeNames.push(filter.getAttribute('name'))
        }
       })

       if(activeNames.includes("all")){
        filtersItems.forEach((item) =>{
          item.classList.add('visible')
        })
       } else{
        filtersItems.forEach((item) =>{
          item.classList.remove('visible')
          if(activeNames.includes(item.getAttribute("data-cat"))){
            item.classList.add('visible')
          }
        })
       }

       console.log(activeNames)
      })
    })
   
  }
  const mobileFilterSelect = document.querySelector('.mobile-filtersSelect')
  const filterContainer = document.querySelector('.filters-container')
  if(mobileFilterSelect && filterContainer){
    mobileFilterSelect.addEventListener('click', () =>{
      mobileFilterSelect.classList.toggle('active')
      filterContainer.classList.toggle('active')
      if(filterContainer.classList.contains('active')){
        filterContainer.style.height =`${filterContainer.scrollHeight+20}px`
      } else{
        filterContainer.style.height ="0"
      }
    })
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let flagMap = false;
  document.addEventListener("scroll", function () {
    const blockMap = document.getElementById("yandex_map");
    if (blockMap) {
      const posTop = blockMap.getBoundingClientRect().top;
      if (
        typeof posTop !== "undefined" &&
        posTop < window.innerHeight &&
        !flagMap
      ) {
        if (
          !document.querySelector(
            '[src="https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU"]'
          )
        ) {
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU";
          document.head.appendChild(script);
        }

        setTimeout(() => {
          ymaps.ready(init);
        }, 1500);

        function init() {
          var myMap = new ymaps.Map(
              "yandex_map",
              {
                center: [55.73109, 37.621291],
                zoom: 16,
              },
              {
                searchControlProvider: "yandex#search",
              }
            ),
            myPlacemark = new ymaps.Placemark(myMap.getCenter());
          myMap.geoObjects.add(myPlacemark);

          myMap.controls.remove("routeButtonControl");
          myMap.controls.remove("routePanelControl");
          myMap.controls.remove("routeEditorControl");
          myMap.controls.remove("searchControl");
          myMap.controls.remove("zoomControl");
          myMap.controls.remove("geolocationControl");
          myMap.controls.remove("trafficControl");
          myMap.controls.remove("typeSelector");
          myMap.controls.remove("fullscreenControl");
          myMap.controls.remove("rulerControl");
          myMap.behaviors.disable("scrollZoom");
        }

        flagMap = true;
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const motivationSlider = new Swiper(
    ".motivation__absoluteSliderBlock-slider",
    {
      spaceBetween: 30,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      mousewheel: true,
      on: {
        slideChange: () => {
          console.log("asdsadasdas");
          const current = motivationSlider.activeIndex + 1;
          const total = motivationSlider.slides.length;
          document.querySelector(
            ".motivation__absoluteSliderBlock-slidesCount .first"
          ).innerHTML = "0" + current;
          document.querySelector(
            ".motivation__absoluteSliderBlock-slidesCount .second"
          ).innerHTML = "0" + total;

          const sircle = document.querySelector(
            ".motivation__sircleBlock-absoluteSircle svg circle"
          );
          const big1 = document.querySelector(
            ".motivation__sircleBlock-absoluteSircle svg rect.big1"
          );
          const small1 = document.querySelector(
            ".motivation__sircleBlock-absoluteSircle svg rect.small1"
          );

          const big2 = document.querySelector(
            ".motivation__sircleBlock-absoluteSircle svg rect.big2"
          );
          const small2 = document.querySelector(
            ".motivation__sircleBlock-absoluteSircle svg rect.small2"
          );

          switch (current) {
            case 1:
              sircle.setAttribute("stroke-dashoffset", "255");
              big1.setAttribute("fill-opacity", "0.1");
              small1.setAttribute("fill-opacity", "0.1");

              big2.setAttribute("fill-opacity", "0.1");
              small2.setAttribute("fill-opacity", "0.1");

              big2.setAttribute("fill", "white");
              small2.setAttribute("fill", "white");

              big1.setAttribute("fill", "white");
              small1.setAttribute("fill", "white");
              break;
            case 2:
              sircle.setAttribute("stroke-dashoffset", "140");
              big1.setAttribute("fill-opacity", "1");
              small1.setAttribute("fill-opacity", "1");

              big1.setAttribute("fill", "white");
              small1.setAttribute("fill", "#472080");

              big2.setAttribute("fill-opacity", "0.1");
              small2.setAttribute("fill-opacity", "0.1");

              big2.setAttribute("fill", "white");
              small2.setAttribute("fill", "white");
              break;
            case 3:
              sircle.setAttribute("stroke-dashoffset", "0");
              big1.setAttribute("fill-opacity", "1");
              small1.setAttribute("fill-opacity", "1");

              big1.setAttribute("fill", "white");
              small1.setAttribute("fill", "#472080");

              big2.setAttribute("fill-opacity", "1");
              small2.setAttribute("fill-opacity", "1");

              big2.setAttribute("fill", "white");
              small2.setAttribute("fill", "#472080");
              break;
          }
        },
      },
    }
  );

  const reviewsSlider = new Swiper(".reviews__slider", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
      1201: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    on: {
      slideChangeTransitionStart: () => {
        if (window.innerWidth > 1250) {
          let activeFlag = false;
          reviewsSlider.slides.forEach((item) => {
            if (item.classList.contains("swiper-slide-active")) {
              activeFlag = true;
              console.log("главный слайд", item);
            }
            if (
              activeFlag &&
              !item.classList.contains("swiper-slide-active") &&
              !item.classList.contains("swiper-slide-next")
            ) {
              item.style.marginLeft = `-${item.clientWidth / 2}px`;
            } else {
              item.style.marginLeft = "0px";
            }
          });
        } else {
          reviewsSlider.slides.forEach((item) => {
            item.style.marginLeft = "0px";
          });
        }
      },
      init: () => {
        setTimeout(() => {
          if (window.innerWidth > 1250) {
            let activeFlag = false;
            reviewsSlider.slides.forEach((item) => {
              if (item.classList.contains("swiper-slide-active")) {
                activeFlag = true;
                console.log("главный слайд", item);
              }
              if (
                activeFlag &&
                !item.classList.contains("swiper-slide-active") &&
                !item.classList.contains("swiper-slide-next")
              ) {
                item.style.marginLeft = `-${item.clientWidth / 2}px`;
              } else {
                item.style.marginLeft = "0px";
              }
            });
          }
        }, 300);
      },
    },
  });
  if (window.innerWidth <= 1250) {
    const reviews__information = document.querySelector(
      ".reviews__information"
    );
    if (reviews__information) {
      reviews__information.style.width = "100%";
      const swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide");
      swiperSlide.appendChild(reviews__information);
      const reviews__slider__wrapper = document.querySelector(
        ".reviews__slider .swiper-wrapper"
      );
      reviews__slider__wrapper.insertBefore(
        swiperSlide,
        reviews__slider__wrapper.querySelector(".swiper-slide")
      );
      reviewsSlider.init();
    }
  }

  const actionSlider = new Swiper(".motivation__bottom-slider", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    scrollbar: {
      el: ".photos__scrollbarWrapper .scrollbar",
    },
    breakpoints: {
      961: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  const licensesSlider = new Swiper(".reviews__licensesSlider", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
      850: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1700: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });

  const servicesLicenseSlider = new Swiper(
    ".textWithPanel__licenses-slider.first-slider",
    {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: {
        nextEl:
          ".textWithPanel__licenses-slider.first-slider .textWithPanel__licenses-btn.next",
        prevEl:
          ".textWithPanel__licenses-slider.first-slider .textWithPanel__licenses-btn.prev",
      },
    }
  );
  const servicesActionsSlider = new Swiper(
    ".textWithPanel__actions-slider.first-slider",
    {
      slidesPerView: 1.2,
      spaceBetween: 10,
      navigation: {
        nextEl:
          ".textWithPanel__actions-slider.first-slider .textWithPanel__actions-btn.next",
        prevEl:
          ".textWithPanel__actions-slider.first-slider .textWithPanel__actions-btn.prev",
      },
    }
  );

  const gallerySlider2 = new Swiper(".gallery__slider2", {
    spaceBetween: 13,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".gallery__slider2-btn.next",
      prevEl: ".gallery__slider2-btn.prev",
    },
    breakpoints: {
      621: {
        slidesPerView: 6,
      },
      1251: {
        slidesPerView: 7,
      },
    },
  });
  const gallerySlider = new Swiper(".gallery__slider1", {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: gallerySlider2,
    },
  });

  let advantages2Slider;
  if (window.innerWidth < 650) {
    if (!advantages2Slider) {
      const advantages2SliderContainer =
        document.querySelector(".doctors__slider");
      if (advantages2SliderContainer) {
        advantages2SliderContainer.classList.add("swiper");
        advantages2SliderContainer
          .querySelector(".doctors__wrapper")
          .classList.add("swiper-wrapper");
        advantages2SliderContainer
          .querySelector(".doctors__wrapper")
          .classList.add("nowrap");
        advantages2SliderContainer
          .querySelectorAll(".doctors__slide")
          .forEach((item) => {
            item.classList.add("swiper-slide");
          });
        advantages2Slider = new Swiper(advantages2SliderContainer, {
          slidesPerView: 1.1,
          spaceBetween: 10,
          autoHeight: true,
        });
      }
    }
  } else {
    if (advantages2Slider) {
      advantages2Slider.destroy(true, true);
      advantages2Slider = null;
      const advantages2SliderContainer =
        document.querySelector(".doctors__slider");
      if (advantages2SliderContainer) {
        advantages2SliderContainer.classList.remove("swiper");
        advantages2SliderContainer
          .querySelector(".doctors__wrapper")
          .classList.remove("swiper-wrapper");
        advantages2SliderContainer
          .querySelector(".doctors__wrapper")
          .classList.remove("nowrap");
        advantages2SliderContainer
          .querySelectorAll(".doctors__slide")
          .forEach((item) => {
            item.classList.remove("swiper-slide");
          });
      }
    }
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth < 650) {
      if (!advantages2Slider) {
        const advantages2SliderContainer =
          document.querySelector(".doctors__slider");
        if (advantages2SliderContainer) {
          advantages2SliderContainer.classList.add("swiper");
          advantages2SliderContainer
            .querySelector(".doctors__wrapper")
            .classList.add("swiper-wrapper");
          advantages2SliderContainer
            .querySelector(".doctors__wrapper")
            .classList.add("nowrap");
          advantages2SliderContainer
            .querySelectorAll(".doctors__slide")
            .forEach((item) => {
              item.classList.add("swiper-slide");
            });
          advantages2Slider = new Swiper(advantages2SliderContainer, {
            slidesPerView: 1.1,
            spaceBetween: 10,
            autoHeight: true,
          });
        }
      }
    } else {
      if (advantages2Slider) {
        advantages2Slider.destroy(true, true);
        advantages2Slider = null;
        const advantages2SliderContainer =
          document.querySelector(".doctors__slider");
        advantages2SliderContainer.classList.remove("swiper");
        advantages2SliderContainer
          .querySelector(".doctors__wrapper")
          .classList.remove("swiper-wrapper");
        advantages2SliderContainer
          .querySelector(".doctors__wrapper")
          .classList.remove("nowrap");
        advantages2SliderContainer
          .querySelectorAll(".doctors__slide")
          .forEach((item) => {
            item.classList.remove("swiper-slide");
          });
      }
    }
  });
});
