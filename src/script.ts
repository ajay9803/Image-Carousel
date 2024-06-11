import Carousel from "./models/carousel";

// Create Carousel Container on the DOM

const createCarousel = (
  containerId: string,
  images: string[],
  duration: number
) => {
  const container = document.getElementById(containerId) as HTMLElement;

  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("the-carousel");

  const mainWrapper = document.createElement("div");
  mainWrapper.classList.add("main-wrapper");

  const prevButton = document.createElement("div");
  prevButton.classList.add("arrow-icon", "prev");
  prevButton.innerHTML = "<div>&#9664;</div>";

  const nextButton = document.createElement("div");
  nextButton.classList.add("arrow-icon", "next");
  nextButton.innerHTML = "<div>&#9654;</div>";

  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("carousel-container");

  const carouselWrapper = document.createElement("div");
  carouselWrapper.classList.add("carousel-wrapper");

  images.forEach((imageSrc) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "random";
    img.classList.add("carousel-image");
    carouselWrapper.appendChild(img);
  });

  // Append elements in order

  carouselContainer.appendChild(carouselWrapper);
  mainWrapper.appendChild(prevButton);
  mainWrapper.appendChild(carouselContainer);
  mainWrapper.appendChild(nextButton);
  carouselDiv.appendChild(mainWrapper);

  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots-container");
  carouselDiv.appendChild(dotsContainer);

  container.appendChild(carouselDiv);

  // Create a new instance of the Carousel
  new Carousel(carouselDiv, duration);
};

const images1 = [
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
  "https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/covera-gh.jpg",
];

const images2 = [
  "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
  "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/02/23/24/mount-everest.rend.hgtvcom.1280.1280.suffix/1491583263811.jpeg",
  "https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/covera-gh.jpg",
];

const images3 = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg",
  "https://cdn.thecollector.com/wp-content/uploads/2023/11/tallest-mountains-in-the-world.jpg",
  "https://images.immediate.co.uk/production/volatile/sites/30/2014/01/Top-10-foods-to-try-in-Japan-9763a03.jpg?resize=768,574",
];

// Initialize carousels with different images and slide-duration
createCarousel("carousel-container-1", images1, 3000);
createCarousel("carousel-container-2", images2, 5000);
createCarousel("carousel-container-3", images3, 1000);
