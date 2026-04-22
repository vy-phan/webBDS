import React from 'react';

const PotentialSection: React.FC = () => {
  const points = [
    {
      icon: (
        <svg className="w-16 h-16 text-[#007a43]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      title: "Đón Đầu \"Chu Kỳ Vàng\" Thứ Ba Của TPHCM",
      description: "Cần Giờ được xác định là chu kỳ vàng thứ ba của TP.HCM sau thành công vang dội của Phú Mỹ Hưng và Thủ Thiêm. Đây là dự án lấn biển quy mô lớn cuối cùng trong nội thành, biến vùng rừng ngập mặn UNESCO thành đô thị sinh thái biển đẳng cấp quốc tế. Yếu tố khan hiếm cùng chiến lược phát triển rõ ràng tạo nên tiềm năng tăng giá được bảo chứng cho nhà đầu tư thông minh."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-[#007a43]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          <path d="m12 11 1.5-3.5L12 4l-1.5 3.5L12 11z" />
        </svg>
      ),
      title: "Bảo Chứng Tăng Giá Của Vingroup",
      description: "Lịch sử phát triển BĐS của Vingroup chứng minh khả năng tăng giá vượt trội. Việc hoàn thiện đồng bộ hạ tầng trước bàn giao và hệ sinh thái Vincom-Vinschool-Vinmec tích hợp. Với quy mô 2.870 ha, tầm nhìn quốc tế và công nghệ xanh tiên phong, Vinhomes Green Paradise hứa hẹn vượt xa các dự án tiền nhiệm."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-[#007a43]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="18" width="20" height="4" rx="1" />
          <path d="M12 18V6" />
          <path d="m7 11 5-5 5 5" />
          <path d="M12 2v4" />
        </svg>
      ),
      title: "Động Lực Tăng Trưởng Từ Hạ Tầng Tỷ Đô",
      description: "Trên thế giới, bất động sản dọc các tuyến đường sắt tốc độ cao thường tăng giá 15-45% sau khi dự án đi vào vận hành và tiếp tục leo thang trong 3-5 năm tiếp theo. Với Cần Giờ, chu kỳ này thậm chí được dự báo còn mạnh mẽ hơn. Bởi ngoài đường sắt tốc độ cao, hàng loạt hạ tầng quy mô lớn cũng đang đồng loạt bước vào giai đoạn triển khai."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-[#007a43]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      title: "Lợi Nhuận Kép Từ Du Lịch Sinh Thái Và Kinh Tế Biển",
      description: "Du lịch sinh thái Cần Giờ mang lại lợi nhuận cho thuê ngắn hạn 8-12%/năm khi dự kiến đón 40 triệu lượt khách vào 2030. Các sản phẩm biệt thự, nhà phố tại dự án hoàn toàn có thể kinh doanh đa công năng các dịch vụ ăn uống, vui chơi giải trí, lưu trú từ trung đến cao cấp đảm bảo dòng tiền đều đặn cho nhà đầu tư."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-[#007a43]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 7h18" />
        </svg>
      ),
      title: "Pháp Lý Minh Bạch & Quy Hoạch Dài Hạn",
      description: "Pháp lý minh bạch với cam kết 100% sổ hồng lâu dài. Rủi ro giảm thiểu tối đa khi Chính phủ cam kết phát triển Cần Giờ thành Khu kinh tế đặc biệt với chính sách ưu đãi thuế và thủ tục đơn giản, thu hút cả nhà đầu tư trong và ngoài nước."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-[#007a43]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12A10 10 0 0 1 12 2Z" />
          <path d="M12 18v-4" />
          <path d="M12 10V6" />
          <path d="m15 12-3 3-3-3" />
        </svg>
      ),
      title: "Xu Hướng \"Sống Xanh\" Sau Đại Dịch",
      description: "Cần Giờ sở hữu lợi thế vượt trội với chỉ số AQI 25-35 (tốt nhất TP.HCM), nhiệt độ mát mẻ hơn 3-5°C và không khí trong lành từ 75.000ha rừng ngập mặn UNESCO. Vinhomes Green Paradise đáp ứng hoàn hảo với thiết kế biophilic, công nghệ smart home và cam kết ESG++."
    }
  ];

  return (
    <section id="tiem-nang" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          <div className="mb-16">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-amber-600 text-2xl md:text-3xl font-bold tracking-wide">
                &mdash; Tiềm năng đầu tư
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a4d34] leading-tight tracking-tight">
              Siêu đô thị biểu tượng <br />
              mới TP. HCM
            </h2>
          </div>

          <div className="space-y-16">
            {points.map((point, index) => (
              <div key={index} className="space-y-6">
                <div className="mb-4">
                  {point.icon}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-[#007a43] leading-tight">
                  {point.title}
                </h3>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal text-justify">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotentialSection;
