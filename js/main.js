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
    image:
      "../assets/images/categories/crispy-mixed-pizza-with-olives-sausage.svg",
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
  // Add Event Listener to button for mobile menu
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  const categoriesSlices = document.getElementById("categories-slices");
  const productsContainer = document.getElementById("products-container");
  food.map((product) => {
    productsContainer.innerHTML += createProductCard(product);
  });
  categories.map(
    (category) => (categoriesSlices.innerHTML += createCategorySlider(category))
  );
});

// initial swiper slider
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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var categoriesSwiper = new Swiper(".categories-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  speed: 700,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
// fuction for create product card
function createProductCard(product) {
  const productCard = `
     <div class="product-card group relative w-[285px] h-[470px] mx-auto font-almarai">
                <div
                    class="relative w-[285px] h-[347px] flex items-center justify-center overflow-hidden bg-[#F7F2E2] rounded-[55px] transition-all duration-500 ease-in-out group-hover:bg-[#072F25] curved-bg">
                    <!-- Discount badge -->
                    <p class="absolute top-[15%] left-[3%] rounded bg-[#EB1400] text-white text-sm px-3 py-1 z-20">
                        خصم <span>${product.discount}%</span>
                    </p>
                    <!-- Side buttons -->
                    <div
                        class="absolute right-[1%] top-[12%] space-y-3 pr-5 opacity-0 invisible translate-x-5 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 z-20">
                        <button aria-label="favorite"
                            class="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full shadow-md hover:bg-[#FF9924] hover:text-white transition-all duration-300">
                            <img src="assets/icons/buttons/favorite.svg" alt="favorite-icon" loading="lazy"
                                class="w-[18px] h-[18px]">
                        </button>
                        <button aria-label="details"
                            class="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full shadow-md hover:bg-[#FF9924] hover:text-white transition-all duration-300">
                            <img src="assets/icons/buttons/eye.svg" alt="details-icon" loading="lazy"
                                class="w-[18px] h-[18px]">
                        </button>
                    </div>

                    <!-- Product image -->
                    <img src=${product.image}
                        alt=${product.title}
                        class="w-[225px] h-[140px] transition-all duration-500 ease-in-out group-hover:-rotate-[9deg]">
                </div>

                <!-- Add to cart button -->
                <button
                    class="absolute bottom-[25%] left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 bg-[#FF9924] text-black rounded-full w-[169px] h-[48px] font-almarai font-medium shadow-md transition-all duration-500 ease-in-out group-hover:bg-[#EB1400] group-hover:text-white">
                    <i data-lucide="shopping-cart" class="w-[16px] h-[16px]"></i>
                    <span>أضف إلى السلة</span>
                </button>

                <!-- Product details -->
                <div class="font-almarai text-center mt-3 px-4 space-y-1.5">
                    <h6 class="font-bold text-[18px]">${product.title}</h6>
                    <p class="text-[14px] text-[#525252] leading-tight">
                   ${product.description}
                    </p>
                    <div class="flex items-center justify-center gap-2">
                        <p class="text-[#EB1400] font-extrabold text-[16px]">
                        ${
                          product.price -
                          (product.price * product.discount) / 100
                        }
                        رس</p>
                        <del class="text-[#9D9D9D] text-[14px]">
                        ${product.price} رس</del>
                    </div>
                </div>
            </div>
  `;
  return productCard;
}

function createCategorySlider(category) {
  lucide.createIcons();
  const categorySlider = `
       <div class="swiper-slide">
                    <div
                        class="group w-full text-center bg-[#F7F2E2] py-4 px-5 category-card
                       transition-all duration-500 ease-in-out hover:bg-[#3F9065] rounded-xl mx-auto rounded-t-[100px]">
                        <img loading="lazy" src=${category.image}
                            alt=${category.title}
                            class="w-[100px] h-[100px] mb-3 object-contain mx-auto transition-all duration-500 group-hover:-rotate-[12.45deg]" />
                        <div class="font-almarai transition-all duration-300">
                            <h5 class="md:text-[20px] text-black group-hover:text-white transition-all duration-300">
                               ${category.title}
                            </h5>
                            <div
                                class="flex items-center justify-center gap-2 mt-2 text-[#636363] group-hover:text-white transition-all duration-300">
                                <span>${category.avilable}</span>
                                <p>${
                                  category.title === "بيتزا"
                                    ? "نوع متاح"
                                    : "وجبة متاحة"
                                }</p>
                            </div>
                        </div>
                    </div>
                </div>
  `;
  return categorySlider;
}
