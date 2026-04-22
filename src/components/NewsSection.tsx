import React, { useState } from 'react';

const newsItems = [
  {
    id: 1,
    title: 'Khu B (Vịnh Ngọc): "Thành phố sức khỏe" Vinhomes Cần Giờ',
    image: '/tin-tuc/the-green-bay-vinhomes-green-paradise-can-gio.webp',
  },
  {
    id: 2,
    title: 'Phân khu A (Vịnh Tiên): Thiên Đường Nghỉ Dưỡng Cần Giờ',
    image: '/tin-tuc/the-haven-bay-vinhomes-can-gio.webp',
  },
  {
    id: 3,
    title: 'Tiềm năng vị trí Vinhomes Cần Giờ: Cơ hội đầu tư tỷ đô',
    image: 'https://vinhomesgreenparadies.vn/wp-content/uploads/2025/12/giao-thong-ket-noi-cu-hich-tu-6-du-an-ha-tang-ty-do.webp',
  },
  {
    id: 4,
    title: 'Phân Khu C (Mũi Danh Vọng): Thủ Phủ Tài Chính Mới Cần Giờ',
    image: 'https://vinhomesgreenparadies.vn/wp-content/uploads/2025/12/vi-tri-the-paradise-vinhomes-green-paradise.webp',
  }
];

const NewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <section id="tin-tuc" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-amber-500 text-2xl md:text-3xl font-bold tracking-wide">
              &mdash; Tin tức
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a4d34] leading-tight">
            Vinhomes Green <br className="hidden md:block" />
            Paradise
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Main Image Container */}
          <div 
            className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.5/1]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={newsItems[currentIndex].image}
              alt={newsItems[currentIndex].title}
              className="w-full h-full object-cover transition-opacity duration-500"
              key={currentIndex} // triggers fade if we use css animation, or just simple replace
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 md:p-4 shadow-lg transition-colors focus:outline-none z-10"
              aria-label="Previous news"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 md:p-4 shadow-lg transition-colors focus:outline-none z-10"
              aria-label="Next news"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Title Below Image */}
          <div className="text-center mt-8 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
              {newsItems[currentIndex].title}
            </h3>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;
