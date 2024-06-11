// Represents a Carousel Container

class Carousel {
  carouselElement: HTMLElement;
  slides: NodeListOf<HTMLImageElement>;
  prevButton: HTMLElement;
  nextButton: HTMLElement;
  dotsContainer: HTMLElement;
  counter: number;
  autoSlideInterval: number | null;
  dots: HTMLDivElement[];
  direction: number;
  duration: number;

  constructor(carouselElement: HTMLElement, duration: number) {
    this.carouselElement = carouselElement;
    this.slides = this.carouselElement.querySelectorAll(".carousel-image");
    this.prevButton = this.carouselElement.querySelector(
      ".prev"
    ) as HTMLElement;
    this.nextButton = this.carouselElement.querySelector(
      ".next"
    ) as HTMLElement;
    this.dotsContainer = this.carouselElement.querySelector(
      ".dots-container"
    ) as HTMLElement;

    this.counter = 0;
    this.autoSlideInterval = null;
    this.dots = [];
    this.direction = 1;

    this.duration = duration;
    this.setInitialPosition();
    this.createDots();
    this.startAutoSlide();

    this.prevButton.addEventListener("click", () => this.prevSlide());
    this.nextButton.addEventListener("click", () => this.nextSlide());
  }

  // Initialize the start positioning of the Carousel Container

  setInitialPosition() {
    this.slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
  }

  // Use for loop to slide through the images using the counter variable

  slideImage() {
    this.slides.forEach((slide) => {
      slide.style.transform = `translateX(-${this.counter * 100}%)`;
    });
    this.updateDots();
  }

  // Move to the previous slide
  prevSlide() {
    this.counter--;
    if (this.counter < 0) this.counter = this.slides.length - 1;
    this.slideImage();
    this.resetAutoSlide();
  }

  // Move to the next slide

  nextSlide() {
    this.counter++;
    if (this.counter >= this.slides.length) this.counter = 0;
    this.slideImage();
    this.resetAutoSlide();
  }

  // Update dot-container's active state

  updateDots() {
    this.dots.forEach((dot, index) => {
      dot.classList.toggle(
        "active",
        index === this.counter % this.slides.length
      );
    });
  }

  // Append dots to dots container

  createDots() {
    this.dotsContainer.innerHTML = "";
    this.slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        this.counter = index;
        this.slideImage();
        this.resetAutoSlide();
      });
      this.dotsContainer.appendChild(dot);
      this.dots.push(dot);
    });
    this.updateDots();
  }

  // Assign interval to autoSlideInterval with duration

  startAutoSlide() {
    this.autoSlideInterval = window.setInterval(() => {
      this.counter += this.direction;
      if (this.counter >= this.slides.length) {
        this.direction = -1;
        this.counter = this.slides.length - 2;
      } else if (this.counter < 0) {
        this.direction = 1;
        this.counter = 1;
      }
      this.slideImage();
    }, this.duration);
  }

  // Reset auto slide

  resetAutoSlide() {
    if (this.autoSlideInterval !== null) {
      clearInterval(this.autoSlideInterval);
      this.startAutoSlide();
    }
  }
}

export default Carousel;
