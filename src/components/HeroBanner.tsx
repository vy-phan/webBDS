export default function HeroBanner() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-[url('/banner-mobile.webp')] md:bg-[url('/banner.webp')] bg-cover bg-center">
        <div className="absolute inset-0 "></div>
      </div>
      <div className="relative z-10 text-center px-4 -mt-38 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0a4d34] mb-6 tracking-tight drop-shadow-sm">
          VINHOMES GREEN PARADISE
        </h1>
        <p className="text-lg md:text-2xl mb-10 text-[#0a4d34]  max-w-3xl drop-shadow-sm">
          Nhà phố 4 tầng 308m2 trực diện biển giá chỉ hơn 15 tỷ/căn
        </p>
        <a href="#bao-gia" className="border border-2 border-[#0a4d34] text-[#0a4d34] px-10 py-3 hover:border-yellow-600  hover:text-yellow-600 transition duration-300 font-semibold text-base shadow-sm">
          Nhận báo giá
        </a>
      </div>
    </section>
  );
}
