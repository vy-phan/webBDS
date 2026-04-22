export default function LocationSection() {
  return (
    <section id="vi-tri" className=" lg:py-32 bg-white overflow-hidden mb-5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center space-x-4">
              <span className="w-16 h-[3px] bg-amber-500"></span>
              <h3 className="text-amber-500 font-bold text-2xl md:text-3xl uppercase tracking-wider">
                Vị trí Vinhomes Green Paradise
              </h3>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0a4d34] leading-[1.1] tracking-tighter">
              Trải dài 12km đường <br />
              bờ biển Cần Giờ, TP. HCM
            </h2>
          </div>

          {/* Description Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
            <div className="text-gray-700 text-lg md:text-xl leading-relaxed font-light text-justify">
              <p>
                Vinhomes Green Paradise tọa lạc tại mặt tiền biển xã Long Hòa, thị trấn Cần Thạnh, huyện Cần Giờ với đường bờ biển dài 12km hướng Đông, sở hữu tọa độ độc bản “rừng vàng, biển bạc” đặc biệt hiếm có tại Việt Nam.
              </p>
            </div>
            <div className="text-gray-700 text-lg md:text-xl leading-relaxed font-light text-justify">
              <p>
                Vinhomes Cần Giờ là dự án duy nhất tại TP.HCM giáp biển và liền kề Khu dự trữ sinh quyển thế giới UNESCO rừng ngập mặn Cần Giờ – được mệnh danh là “lá phổi xanh” của thành phố. Diện tích rừng ngập mặn lên đến 75.000 ha cung cấp không khí trong lành với hàm lượng oxy cao hơn 20% so với nội thành, tạo nên môi trường sống lý tưởng cho sức khỏe cư dân. Đây không chỉ mang lại giá trị sống chất lượng cao mà còn đảm bảo tính khan hiếm lâu dài – một đặc tính vàng trong đầu tư bất động sản.
              </p>
            </div>
          </div>

          {/* Map Image */}
          <div className="pt-10 animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden ">
              <img
                src="/map-vi-tri.webp"
                alt="Bản đồ vị trí Vinhomes Green Paradise"
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Connectivity Highlights */}
          <div className="pt-16 lg:pt-24 space-y-10 lg:space-y-12">
            {[
              {
                title: "Cầu TP. HCM – Cần Giờ:",
                desc: "Cây cầu dây văng dài 7,3 km với tổng vốn đầu tư 11.000 tỷ đồng này sẽ cách mạng hóa kết nối giữa Cần Giờ và trung tâm TP.HCM. Thời gian di chuyển từ dự án về Quận 1 chỉ còn 45 – 60 phút (giảm từ 90 phút hiện tại), biến Vinhomes Cần Giờ trở thành đô thị vệ tinh lý tưởng với khả năng tiếp cận nhanh chóng."
              },
              {
                title: "Đường sắt đô thị tốc độ cao TP.HCM – Cần Giờ:",
                desc: "dài gần 49km với khả năng di chuyển tối đa 350km/h sẽ kết nối từ Bến Thành, Quận 1 đến Vinhomes Green Paradise chỉ trong 16 phút, chính thức khởi công vào ngày 19.12.2025 và hoàn thành dự kiến vào Quý III/2028."
              },
              {
                title: "Cao tốc Bến Lức – Long Thành:",
                desc: "kết nối Sân bay quốc tế Long Thành với các tỉnh phía Tây Nam Bộ, đi qua Cần Giờ, tạo nên trục giao thương quan trọng. Khi hoàn thành, Vinhomes Cần Giờ sẽ trở thành điểm giao thoa của ba hệ thống giao thông lớn: Cầu Cần Giờ (kết nối TP.HCM), Cảng quốc tế (kết nối thế giới), và Cao tốc (kết nối miền Tây – Đông Nam Bộ)."
              },
              {
                title: "Cảng quốc tế Cần Giờ:",
                desc: "Với vốn đầu tư 7,2 tỷ USD, cảng trung chuyển quốc tế sẽ là cảng nước sâu lớn nhất miền Nam, công suất 10 triệu TEU/năm, tạo nên trung tâm logistics và kinh tế biển mới của khu vực."
              },
              {
                title: "Cầu Cần Giờ – Vũng Tàu:",
                desc: "Tuyến đường vượt biển Cần Giờ – Vũng Tàu sẽ giúp rút ngắn đáng kể thời gian di chuyển giữa khu vực Cần Giờ và trung tâm du lịch Vũng Tàu hiện cách nhau khoảng 15 km qua vịnh Gành Rái."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 md:space-x-6 group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 mt-1.5">
                  <img src="/icon.png" alt="icon" className="w-full h-full object-contain" />
                </div>
                <div className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed text-justify">
                  <span className="font-black text-[#0a4d34]">{item.title}</span> {item.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10 animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden  group">
              <video
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-[1.03]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/tau-dien-cao-toc.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Final Registration Form */}
          <div className="max-w-4xl mx-auto space-y-10 animate-fade-in-up">
            <div className="text-[#0a4d34] text-lg md:text-xl lg:text-2xl font-bold leading-relaxed text-justify">
              <p>
                Để tiết kiệm thời gian tìm hiểu Vinhomes Green Paradise, quý anh/chị có thể điền đầy đủ thông tin bên dưới để nhận trọn bộ thông tin và báo giá dự án, tận tình sâu sát nhất từ Phòng kinh doanh Vinhomes:
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end pt-8">
              <div className="space-y-1.5">
                <label className="text-[#0a4d34] font-bold text-[10px] uppercase tracking-[0.2em] ml-1">Họ và tên*</label>
                <input
                  type="text"
                  placeholder="Vui lòng nhập họ và tên"
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-[#0a4d34]/20 focus:border-[#0a4d34] outline-none transition-all text-sm font-medium shadow-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[#0a4d34] font-bold text-[10px] uppercase tracking-[0.2em] ml-1">Email</label>
                <input
                  type="email"
                  placeholder="Nhập Email (Không bắt buộc)"
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-[#0a4d34]/20 focus:border-[#0a4d34] outline-none transition-all text-sm font-medium shadow-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[#0a4d34] font-bold text-[10px] uppercase tracking-[0.2em] ml-1">Số điện thoại*</label>
                <input
                  type="tel"
                  placeholder="Vui lòng nhập số điện thoại"
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-[#0a4d34]/20 focus:border-[#0a4d34] outline-none transition-all text-sm font-medium shadow-sm"
                />
              </div>

              <div className="md:col-span-3 pt-4">
                <button className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0a4d34] font-black text-lg md:text-xl rounded-xl shadow-lg transform active:scale-[0.98] transition-all uppercase tracking-widest">
                  Nhận thông tin
                </button>
              </div>
            </form>

            <div className="pt-4">
              <p className="text-[#0a4d34] text-xl font-bold italic">
                Hotline phòng kinh doanh: <a href="tel:0918495678" className="hover:underline">0918 49 5678</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
