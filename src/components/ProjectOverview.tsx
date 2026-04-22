export default function ProjectOverview() {
  return (
    <section id="tong-quan" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Cột trái: Hình ảnh/Video & Tiêu đề chính */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex items-center space-x-3">
              <span className="w-14 h-[2px] bg-amber-600"></span>
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent font-black tracking-[0.1em] text-xl md:text-2xl">
                Chào mừng bạn đến
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a4d34] leading-[1.1] tracking-tighter">
              Đô thị hàng đầu thế giới <br />
              <span className="text-[#0a4d34]">Vinhomes Green Paradise</span>
            </h2>

            <div className="relative group">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                <video
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/video-banner.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>


            </div>
          </div>

          {/* Cột phải: Thông tin chi tiết & Thông số */}
          <div className="space-y-10 lg:pt-32">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                <strong className="font-black text-[#0a4d34]">Vinhomes Green Paradise</strong> – Siêu đô thị lấn biển ESG++ xanh – thông minh – sinh thái&tái sinh hàng đầu Thế giới, quy mô 2.870 hecta được tư vấn bởi Tập đoàn quản lý quốc tế Boston Consulting Group, đã chính thức khởi công ngày 19/04/2025, đánh dấu cột mốc lịch sử quan trọng trong chiến lược phát triển khu đô thị lấn biển của TP.HCM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="group">
                <h4 className="text-[#0a4d34] font-black uppercase text-xs md:text-sm tracking-[0.2em] mb-1">Vị trí</h4>
                <p className="text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent transition-all leading-tight">TT Cần Thạnh, H. Cần Giờ, TP. HCM</p>
              </div>
              <div className="group">
                <h4 className="text-[#0a4d34] font-black uppercase text-xs md:text-sm tracking-[0.2em] mb-1">Quy mô</h4>
                <p className="text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent transition-all">2.870 ha</p>
              </div>
              <div className="group">
                <h4 className="text-[#0a4d34] font-black uppercase text-xs md:text-sm tracking-[0.2em] mb-1">Vốn đầu tư</h4>
                <p className="text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent transition-all">Hơn 10 tỷ USD</p>
              </div>
              <div className="group">
                <h4 className="text-[#0a4d34] font-black uppercase text-xs md:text-sm tracking-[0.2em] mb-1">Dân số</h4>
                <p className="text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent transition-all">230.000</p>
              </div>
              <div className="group">
                <h4 className="text-[#0a4d34] font-black uppercase text-xs md:text-sm tracking-[0.2em] mb-1">Sản phẩm</h4>
                <p className="text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent transition-all">Nhà phố, biệt thự</p>
              </div>
              <div className="group">
                <h4 className="text-[#0a4d34] font-black uppercase text-xs md:text-sm tracking-[0.2em] mb-1">Khởi công</h4>
                <p className="text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent transition-all">19/04/2025</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* --- Phần Marquee (Chữ chạy) - Full Width --- */}
      <div className="mt-24 lg:mt-32 overflow-hidden border-t-[6px] border-[#0a4d34]">
        {/* Hàng 1: Từ Phải sang Trái */}
        <div className="py-3 bg-white overflow-hidden whitespace-nowrap flex border-b border-gray-100">
          <div className="animate-marquee flex items-center">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-[#0a4d34] font-black uppercase text-xl md:text-4xl lg:text-5xl mx-12 tracking-tighter">
                Chính thức nhận giữ chỗ chọn căn
              </span>
            ))}
          </div>
        </div>

        {/* Hàng 2: Từ Trái sang Phải */}
        <div className="py-4 bg-[#0a4d34] overflow-hidden whitespace-nowrap flex shadow-2xl">
          <div className="animate-marquee-reverse flex items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center mx-12">
                <span className="text-white font-black uppercase text-xl md:text-4xl lg:text-5xl tracking-tighter"> NHÀ PHỐ&BIỆT THỰ PHÂN KHU A - VỊNH TIÊN LIỀN KỀ SÂN GOLF VÀ CÔNG VIÊN 122HA</span>
                <div className="w-4 h-4 md:w-5 md:h-5 bg-amber-500 rounded-full mx-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* --- Phần Video Giới Thiệu (Overlap) - Full Width --- */}
      <div className="relative  min-h-[600px] lg:min-h-[1000px] flex flex-col items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/tongquan.webp"
            alt="Tổng quan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/40"></div>
        </div>

        {/* Hộp nội dung dính liền với Video (Sharp & Connected) */}
        <div className="relative z-10 w-full container mx-auto px-4 py-10 lg:py-20">
          <div className="bg-white max-w-5xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-l-[12px] border-[#0a4d34] animate-fade-in-up overflow-hidden">
            {/* Phần văn bản */}
            <div className="p-8 md:p-16 lg:p-20 space-y-6">
              <div className="flex items-center space-x-4">
                <span className="w-16 h-[2px] bg-amber-600"></span>
                <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent font-black tracking-[0.15em] text-sm md:text-lg lg:text-xl uppercase leading-tight">
                  Video giới thiệu chính thức Vinhomes Green Paradise
                </span>
              </div>

              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black text-[#0a4d34] leading-[1.1] tracking-tighter">
                Siêu đô thị lấn biển <br /> Cần Giờ
              </h3>

              <div className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light pt-4 text-justify">
                <p>
                  Vinhomes Green Paradise sở hữu những điểm nhấn độc đáo chưa từng có tại Việt Nam: quy mô khổng lồ 2.870ha trải dài trên 121km tổng chiều dài bờ biển, mô hình ESG (Environmental – Social – Governance) được tư vấn bởi Boston Consulting Group, và tòa tháp 108 tầng, nhà hát 5.000 chỗ ngồi, biển hồ nhân tạo 443ha lớn nhất thế giới. Đây chính là lời giải đáp hoàn hảo cho khát vọng kiến tạo một siêu đô thị sinh thái biển đẳng cấp quốc tế, nơi hài hòa giữa thiên nhiên nguyên bản và công nghệ hiện đại, giữa phát triển kinh tế và bảo tồn sinh thái.
                </p>
              </div>
            </div>

            {/* Phần Video nhúng (Dính liền, không khoảng cách) */}
            <div className="w-full aspect-video bg-black">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1122717752?h=e6f293c57b"
                className="w-full h-full"
                frameBorder="0"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* --- Phần Báo Giá & Đăng Ký (Horizontal on Desktop) --- */}
      <section id="bao-gia" className="relative min-h-screen py-20 lg:py-40 flex flex-col items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/clarkequay.webp"
            alt="Clarke Quay"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto bg-[#f8faf9] rounded-[2.5rem] md:rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden border border-white/30 animate-fade-in-up">
            <div className="p-8 md:p-16 lg:p-24 space-y-16">

              {/* Header & Checklist + Image (Grid on Tablet+) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h4 className="text-[#0a4d34] font-bold text-lg md:text-xl uppercase tracking-[0.2em] leading-tight opacity-80">
                      Tải ngay báo giá mới nhất
                    </h4>
                    <span className="text-3xl md:text-5xl font-black text-[#007a43] tracking-tighter">22/04/2026</span>

                    <div className="flex items-start space-x-3 bg-white p-5 rounded-xl border-l-4 border-amber-500 shadow-sm mt-4">
                      <div className="text-2xl mt-1">💎</div>
                      <p className="text-[#0a4d34] font-bold text-lg md:text-xl leading-tight">
                        Đặc biệt nhà phố Tương Lai trục xuyên tâm lộ giới 50m
                      </p>
                    </div>
                  </div>

                  {/* Checklist */}
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {[
                      "Báo giá chính thức từ Chủ đầu tư",
                      "Nhà phố 75m2 trục AS giá chỉ từ 11 tỷ",
                      "Nhà phố 100m2 Tương lai chỉ từ 16 tỷ",
                      "Nhà phố 100m2 trực diện biển chỉ từ 15 tỷ",
                      "Nhà phố 2 mặt tiền 125m2 có cam kết thuê",
                      "Miễn gốc lãi đến 36 tháng"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-[#00a651] rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#0a4d34] font-medium text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ảnh bảng báo giá (Excel Image) */}
                <div className="relative group lg:pl-10">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src="/bang-bao-gia.jpg" alt="Bảng báo giá" className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>

              {/* Form Đăng Ký (Horizontal Row on Tablet+) */}
              <div className="border-t border-gray-100">
                <form className="flex flex-col lg:flex-row items-end gap-5">
                  <div className="w-full lg:flex-1 space-y-1.5">
                    <label className="text-[#0a4d34] font-bold text-[10px] uppercase tracking-[0.2em] ml-1 ">Họ và tên*</label>
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-[#007a43] focus:ring-4 focus:ring-[#007a43]/5 outline-none transition-all text-sm font-medium shadow-sm placeholder:opacity-50"
                    />
                  </div>
                  <div className="w-full lg:flex-1 space-y-1.5">
                    <label className="text-[#0a4d34] font-bold text-[10px] uppercase tracking-[0.2em] ml-1 ">Email</label>
                    <input
                      type="email"
                      placeholder="Email (Không bắt buộc)"
                      className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-[#007a43] focus:ring-4 focus:ring-[#007a43]/5 outline-none transition-all text-sm font-medium shadow-sm placeholder:opacity-50"
                    />
                  </div>
                  <div className="w-full lg:flex-1 space-y-1.5">
                    <label className="text-[#0a4d34] font-bold text-[10px] uppercase tracking-[0.2em] ml-1 ">Số điện thoại*</label>
                    <input
                      type="tel"
                      placeholder="Số điện thoại"
                      className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 focus:border-[#007a43] focus:ring-4 focus:ring-[#007a43]/5 outline-none transition-all text-sm font-medium shadow-sm placeholder:opacity-50"
                    />
                  </div>
                  <button className="w-full lg:w-auto px-10 py-4 bg-[#007a43] hover:bg-[#00a651] text-white font-bold text-sm rounded-xl shadow-lg shadow-green-900/5 transform active:scale-95 transition-all uppercase tracking-widest whitespace-nowrap mb-[2px]">
                    Nhận thông tin
                  </button>
                </form>

                {/* Footer Form */}
                <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-[#0a4d34] font-medium text-base md:text-lg">
                    Hotline tư vấn dự án: <a href="tel:0918495678" className="font-black text-[#007a43] text-xl md:text-2xl ml-1 hover:underline transition-all">0918 49 5678</a>
                    Hỗ trợ 24/7 - Phản hồi ngay lập tức
                  </p>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </section>
  );
}
