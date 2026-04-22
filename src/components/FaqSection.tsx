import React, { useState } from 'react';

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Câu hỏi 1: Vinhomes Green Paradise Cần Giờ là gì?",
      answer: "Vinhomes Green Paradise (tên thương mại chính thức) là siêu đô thị sinh thái biển quy mô 2.870ha được phát triển bởi Tập đoàn Vingroup tại huyện Cần Giờ, TP.HCM theo mô hình ESG tiên tiến bậc nhất thế giới."
    },
    {
      question: "Câu hỏi 2: Dự án đã có sổ hồng chưa?",
      answer: "Dự án đã hoàn thiện pháp lý với quy hoạch 1/500 được phê duyệt. Các sản phẩm biệt thự, nhà phố sẽ được cấp sổ hồng lâu dài cho người Việt Nam sau khi hoàn tất thủ tục bàn giao."
    },
    {
      question: "Câu hỏi 3: Dự án này khác gì so with các khu đô thị khác?",
      answer: "Vinhomes Green Paradise khác biệt với quy mô khổng lồ 2.870ha, mô hình ESG bền vững, tiện ích biểu tượng (tòa tháp 108 tầng, biển hồ 443ha) và vị trí độc tôn ven biển trong nội thành TP.HCM."
    },
    {
      question: "Câu hỏi 4: Vinhomes Green Paradise có những loại hình sản phẩm nào?",
      answer: "Dự án cung cấp đa dạng sản phẩm gồm biệt thự biển, nhà phố liền kề, shophouse thương mại, căn hộ cao cấp và các tòa tháp hỗn hợp văn phòng – khách sạn phục vụ mọi nhu cầu đầu tư và an cư."
    },
    {
      question: "Câu hỏi 5: Giá bán Vinhomes Green Paradise bao nhiêu?",
      answer: " Hiện tại, giá bán chính thức chưa được công bố chính thức, quý khách theo dõi trang web này để cập nhật bảng giá nhanh nhất."
    },
    {
      question: "Câu hỏi 6: Tiện ích tại Vinhomes Green Paradise có gì đặc biệt?",
      answer: "Các tiện ích biểu tượng bao gồm Tháp 108 tầng, 2 sân golf (thiết kế bởi Tiger Woods, Robert Trent Jones), Nhà hát Sóng Xanh, Biển hồ 800ha, và Bệnh viện Vinmec (hợp tác Cleveland Clinic)."
    },
    {
      question: "Câu hỏi 7: Chủ đầu tư dự án Vinhomes Green Paradise Cần Giờ là ai?",
      answer: "Dự án được phát triển bởi Vinhomes, một thành viên của Tập đoàn Vingroup."
    },
    {
      question: "Câu hỏi 8: Khi nào dự án chính thức mở bán?",
      answer: "Dự án đã chính thức mở bán và có giá chính thức. Liên hệ 091 849 5678 để nhận báo giá sớm nhất."
    },
    {
      question: "Câu hỏi 9: Có nên đầu Vinhomes Green Paradise không?",
      answer: "Có. Theo các chuyên gia , Cần Giờ là địa bàn đáng đầu tư nhất hiện nay, đón đầu “chu kỳ vàng”  và làn sóng hạ tầng (đường sắt cao tốc, cầu Cần Giờ)."
    },
    {
      question: "Câu hỏi 10: Dự án lấn biển này có an toàn (về môi trường) không?",
      answer: "Có. Dự án sử dụng công nghệ lấn biển K-DPM từ Nhật Bản, không dùng cát tự nhiên và tuân thủ tiêu chuẩn ESG++  để bảo vệ môi trường và đảm bảo bền vững."
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          <div className="mb-10">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-amber-600 text-2xl md:text-3xl font-bold tracking-wide">
                &mdash; FAQs
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0a4d34] leading-tight mb-12">
              Câu hỏi thường gặp
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full text-left px-6 py-5 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg md:text-xl font-bold text-[#0a4d34]">
                    {faq.question}
                  </span>
                  <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-6 py-8 bg-white text-gray-700 italic text-lg md:text-xl leading-relaxed border-t border-gray-100">
                    <span className="font-bold mr-2">Trả lời:</span>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-16 space-y-8 text-lg md:text-xl text-gray-800 leading-relaxed font-normal">
              <p className="text-justify">
                Vinhomes Green Paradise không chỉ là siêu đô thị lấn biển, mà là cơ hội đầu tư thế hệ với công nghệ K-DPM tiên tiến, quy hoạch đẳng cấp quốc tế và tiềm năng tăng trưởng vượt trội từ làn sóng hạ tầng tỷ đô.
              </p>

              <div className="space-y-4">
                <p className="font-medium">Liên hệ ngay hotline <span className="font-bold text-[#0a4d34]">091 849 5678</span> để nhận:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bảng giá chính thức & chính sách ưu đãi mới nhất</li>
                  <li>Sơ đồ mặt bằng chi tiết 4 phân khu</li>
                  <li>Tư vấn miễn phí và lịch tham quan thực địa</li>
                </ul>
              </div>

              <p className="text-justify">
                Đừng bỏ lỡ cơ hội sở hữu vị trí đẹp nhất tại Vinhomes Cần Giờ. Để tìm hiểu chi tiết hơn về dự án, mời quý khách tham khảo <a href="/gioi-thieu" className="font-bold text-[#007a43] cursor-pointer hover:underline">trang giới thiệu</a > Vinhomes Green Paradise. Cần hỗ trợ trực tiếp? Truy cập trang <a href="/lien-he" className="font-bold text-[#007a43] cursor-pointer hover:underline">liên hệ</a> để được tư vấn hỗ trợ 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
