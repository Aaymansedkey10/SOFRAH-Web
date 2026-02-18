const food = [
  {
    id: 1,
    title: "كلوب ساندوتش تركي",
    description:
      "كلوب ساندوتش كبيرة، طبقات البيض، التركي، الخضار الطازجة والجبن بخبز محمص.",
    image:
      "../assets/images/products/yummy-delicious-club-sandwich-isolated-white-background.svg",
    price: 24,
    discount: 20,
  },
  {
    id: 2,
    title: "ساندوتش ستيك فيليه",
    description: "ساندوتش فيليه ستيك طري، مشوي بعانية مع خضار طازجة وصوص مميز.",
    image: "../assets/images/products/burger.svg",
    price: 24,
    discount: 20,
  },
  {
    id: 3,
    title: "سانوتش فيلي ستيك",
    description: "ساندوتش فيليه لحم بقري طري مع البصل، فلف وصوص جبنة لذيذ.",
    image:
      "../assets/images/products/delicious-spicy-philly-cheesesteak-isolated-white-background.svg",
    price: 24,
    discount: 20,
  },
  {
    id: 4,
    title: "ساندوتش تركي مدخن ",
    description: "شرائح تركي مدخن مع مخلل وصوص خاص داخل خبز تست محمص شهي.",
    image:
      "../assets/images/products/delicious-cubano-sandwich-isolated-transparent-background.svg",
    price: 24,
    discount: 20,
  },
];
const categories = [
  {
    id: 1,
    title: "لحوم",
    image: "../assets/images/categories/grilled-steak-with-lemon-tomatoes.svg",
    avilable: 23,
  },
  {
    id: 2,
    title: "برجر",
    image:
      "../assets/images/categories/classic-fast-food-meal-with-burger-fries-soda-transparent-background.svg",
    avilable: 23,
  },
  {
    id: 3,
    title: "بيتزا",
    image: "../assets/images/categories/crispy-mixed-pizza-with-olives-sausage.svg",
    avilable: 23,
  },
  {
    id: 4,
    title: "فراخ كرسبي",
    image:
      "../assets/images/categories/closeup-crispy-fried-chicken-drumsticks-white-plate.svg",
    avilable: 23,
  },
  {
    id: 5,
    title: "المقبلات",
    image: "../assets/images/categories/french-fries-with-ketchup.svg",
    avilable: 23,
  },
  {
    id: 6,
    title: "فطائر",
    image:
      "../assets/images/categories/fresh-crostata-isolated-transparent-background.svg",
    avilable: 23,
  },
];
const reviews = [
  {
    id: 1,
    customerName: "فهد سالم",
    customerPosition: "مدير فني",
    customerReview:
      "طلبت أونلاين من سفرة، وتوقعت يتأخر أو يوصل بارد... بالعكس، وصل بدري وحار كأني آكل داخل المطعم. البرجر خطير، اللحم عصاري والجبنة سايحة، والبطاطس مقرمشة مثل ما أحب. من جد يهتمون بأدق التفاصيل.",
  },
  {
    id: 2,
    customerName: "محمود حربي",
    customerPosition: "مدير مالي",
    customerReview:
      "طلبت أونلاين من سفرة، وتوقعت يتأخر أو يوصل بارد... بالعكس، وصل بدري وحار كأني آكل داخل المطعم. البرجر خطير، اللحم عصاري والجبنة سايحة، والبطاطس مقرمشة مثل ما أحب. من جد يهتمون بأدق التفاصيل.",
  },
  {
    id: 3,
    customerName: "سعود العنزي",
    customerPosition: "محلل نظم",
    customerReview:
      "طلبت أونلاين من سفرة، وتوقعت يتأخر أو يوصل بارد... بالعكس، وصل بدري وحار كأني آكل داخل المطعم. البرجر خطير، اللحم عصاري والجبنة سايحة، والبطاطس مقرمشة مثل ما أحب. من جد يهتمون بأدق التفاصيل.",
  },
  {
    id: 10,
    customerName: "سارة عبدالعزيز",
    customerPosition: "مصممة جرافيك",
    customerReview:
      "طلبت أونلاين من سفرة، وتوقعت يتأخر أو يوصل بارد... بالعكس، وصل بدري وحار كأني آكل داخل المطعم. البرجر خطير، اللحم عصاري والجبنة سايحة، والبطاطس مقرمشة مثل ما أحب. من جد يهتمون بأدق التفاصيل.",
  },
  {
    id: 20,
    customerName: "رهف المطيري",
    customerPosition: "مديرة تسويق",
    customerReview:
      "طلبت أونلاين من سفرة، وتوقعت يتأخر أو يوصل بارد... بالعكس، وصل بدري وحار كأني آكل داخل المطعم. البرجر خطير، اللحم عصاري والجبنة سايحة، والبطاطس مقرمشة مثل ما أحب. من جد يهتمون بأدق التفاصيل.",
  },
  {
    id: 30,
    customerName: "نوف الحربي",
    customerPosition: "طالبة جامعية",
    customerReview:
      "طلبت أونلاين من سفرة، وتوقعت يتأخر أو يوصل بارد... بالعكس، وصل بدري وحار كأني آكل داخل المطعم. البرجر خطير، اللحم عصاري والجبنة سايحة، والبطاطس مقرمشة مثل ما أحب. من جد يهتمون بأدق التفاصيل.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  // variables
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const customers = document.querySelectorAll(".customer-image");
  const productsContainer = document.getElementById("products-container");
  const categoriesSlices = document.getElementById("categories-slices");

  // Event for Menu button in the small screen
  menuBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("max-h-0")) {
      mobileMenu.classList.remove("max-h-0", "opacity-0");
      mobileMenu.classList.add("max-h-[500px]", "opacity-100");
    } else {
      mobileMenu.classList.remove("max-h-[500px]", "opacity-100");
      mobileMenu.classList.add("max-h-0", "opacity-0");
    }
  });

  // create the produts section content
  food.map((product) => {
    productsContainer.innerHTML += createProductCard(product);
  });

  // generate the categories sliders content
  categoriesSlices.innerHTML += categories
    .map((category) => createCategorySlider(category))
    .join("");

  // Events for customers review section
  customers.forEach((c) => {
    c.addEventListener("click", () => {
      const reviewId = Number(c.getAttribute("data-review-id"));
      selectCustomerReview(reviewId, c);
    });
  });
});

// create the Hero section slider
const heroSwiper = new Swiper(".hero-swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".next-hero-swiper",
    prevEl: ".prev-hero-swiper",
  },
  observer: true,
  observeParents: true,
});

// create the categories slider
var categoriesSwiper = new Swiper(".categories-swiper", {
  slidesPerView: 3,
  spaceBetween: 15,
  speed: 700,
  grabCursor: true,
  navigation: {
    nextEl: ".next-categories-swiper",
    prevEl: ".prev-categories-swiper",
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },

    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

// fuction for create product card
function createProductCard(product) {
  const { title, description, image, price, discount } = product;
  return `
    <div class="product-card group relative w-[162px] h-[320px] lg:w-[255px] lg:h-[470px] mx-auto font-almarai overflow-visible">
        <div class="relative mb-4 lg:h-[347px]">
            <div class="w-full h-[196px] lg:h-[327px] bg-light transition-all duration-500 ease-in-out group-hover:bg-accent flex items-center justify-center relative shadow-sm overflow-hidden curved-card">
                <p class="absolute top-[14%] -left-1 rounded-tr-xl rounded-bl-xl bg-danger text-white text-[12px] lg:text-[16px] px-3 py-1 z-20 font-bold">
                    خصم <span>${discount}%</span>
                </p>

                <div class="absolute right-[8%] top-[10%] space-y-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button aria-label="أضف للمفضلة" class="bg-white w-[35px] h-[35px] flex items-center justify-center rounded-full shadow-sm border border-gray-100 hover:bg-orange-400 transition-colors">
                        <img src="assets/icons/buttons/favorite.svg" class="w-4" alt="">
                    </button>
                    <button aria-label="عرض التفاصيل" class="bg-white w-[35px] h-[35px] flex items-center justify-center rounded-full shadow-sm border border-gray-100 hover:bg-orange-400 transition-colors">
                        <img src="assets/icons/buttons/eye.svg" class="w-4" alt="">
                    </button>
                </div>

                <img src="${image}" alt="${title}"
                    class="w-[120px] lg:w-[200px] object-cover z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 drop-shadow-[0_15px_10px_rgba(0,0,0,0.1)]">
            </div>

            <button
                class="w-[124px] h-[36px] lg:w-[169px] lg:h-[50px] flex items-center justify-center gap-2 bg-dark-warning text-black rounded-full font-bold shadow-lg group-hover:bg-danger group-hover:text-white absolute -bottom-4 lg:bottom-0 right-1/2 translate-x-1/2 z-30">
                <img src="assets/icons/buttons/shopping-cart.svg" class="w-4 group-hover:invert" alt="">
                <span class="text-[12px] lg:text-[16px]">أضف إلى السلة</span>
            </button>
        </div>

        <div class="text-center w-full mt-6">
            <h6 class="font-bold text-[14px] lg:text-[18px] text-dark-gray">${title}</h6>
            <p class="text-[10px] lg:text-[14px] text-gray-500 leading-[14px] mt-1 h-[32px] overflow-hidden">
                ${description}
            </p>
            <div class="flex items-center justify-center gap-1 mt-2">
                <span class="text-danger text-[18px] lg:text-[24px]">
                    ${price} <span class="lg:text-[16px]">رس</span>
                </span>
                <del class="text-meduin-gray text-[12px] lg:text-[16px]">
                    ${Math.round(price * 1.3)} رس
                </del>
            </div>
        </div>
    </div>
  `;
}

// create the category card.
function createCategorySlider(category) {
  return `
        <div class="swiper-slide">
            <div class="group w-[105px] h-[125px] md:w-[155px] md:h-[220px] flex flex-col items-center justify-center gap-2 md:gap-4 bg-light pt-[10px] pb-[10px] md:pt-[16px] md:pb-[16px] px-[22px] category-card transition-all duration-500 ease-in-out rounded-b-[24px] rounded-t-full mx-auto cursor-pointer hover:bg-accent">
                <img loading="lazy" src="${category.image}"
                    alt="${category.title}"
                    class="w-[62px] h-[55px] md:w-[109px] md:h-[102px] object-contain relative z-10 transition-all duration-500 ease-in-out group-hover:-rotate-12" />
                <div class="font-almarai text-center">
                    <h5 class="text-[14px] md:text-[20px] font-bold text-dark-gray group-hover:text-white transition-colors duration-300">
                        ${category.title}
                    </h5>
                    <div class="text-[10px] md:text-[16px] w-full text-light-gray group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-1">
                        <span>${category.avilable}</span>
                        <span>${category.title === "بيتزا" ? "نوع متاح" : "وجبة متاحة"}</span>
                    </div>
                </div>
            </div>
        </div>
  `;
}

// select the customer review and update the active image url
function selectCustomerReview(id, clickedImgElement) {
  const activeImage = document.querySelector(".active-review-image");
  const reviewName = document.getElementById("review-name");
  const reviewText = document.getElementById("review-text");
  const reviewPosition = document.getElementById("review-position");
  const newSrc = clickedImgElement.getAttribute("src");
  activeImage.style.transform = "scale(0.9)";
  const oldSrc = activeImage.getAttribute("src");

  setTimeout(() => {
    activeImage.setAttribute("src", newSrc);
    clickedImgElement.setAttribute("src", oldSrc);
    const isFounded = reviews.find((rev) => rev.id === id);
    if (isFounded) {
      reviewName.innerText = isFounded.customerName;
      reviewText.innerText = isFounded.customerReview;
      reviewPosition.innerText = isFounded.customerPosition;
    }
    activeImage.style.opacity = "1";
    activeImage.style.transform = "scale(1)";
  }, 300);
}
