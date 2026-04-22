import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const IconicWorks: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const items = [
    { name: "NHÀ HÁT LỚN NHẤT ĐÔNG NAM Á", id: "nha-hat" },
    { name: "HỒ BIỂN NHÂN TẠO LỚN NHẤT THẾ GIỚI", id: "ho-bien" },
    { name: "2 SÂN GOLF CHUẨN QUỐC TẾ", id: "san-golf" },
    { name: "THÁP THƯƠNG MẠI 108 TẦNG", id: "thap-thuong-mai" },
    { name: "HỆ THỐNG Y TẾ MỸ CLEVELAND CLINIC", id: "y-te" },
    { name: "SÂN VẬN ĐỘNG", id: "san-van-dong" },
    { name: "CÔNG VIÊN CHỦ ĐỀ VINWONDERS", id: "vinwonders" },
    { name: "KHU VUI CHƠI BĂNG TUYẾT WINTER WONDERS", id: "winter-wonders" },
    { name: "VƯỜN THÚ MỞ SAFARI", id: "safari" },
    { name: "BẾN DU THUYỀN LANDMARK HARBOUR", id: "ben-du-thuyen" }
  ];

  const slides = [
    { src: "/tien-ich/nhahat.webp", title: "Nhà hát sóng xanh Blue Wave theatre" },
    { src: "/tien-ich/bienho.webp", title: "Hồ biển nhân tạo lớn nhất thế giới" },
    { src: "/tien-ich/sangolf.webp", title: "Sân golf quốc tế" },
    { src: "/tien-ich/toathap.png", title: "Tháp thương mại 108 tầng" },
    { src: "/tien-ich/bienvien.webp", title: "Hệ thống y tế Cleveland Clinic" },
    { src: "/tien-ich/trungtam.webp", title: "Sân vận động" },
    { src: "/tien-ich/quanthe.webp", title: "Công viên chủ đề VinWonders" },
    { src: "/tien-ich/thegioi.webp", title: "Khu vui chơi băng tuyết" },
    { src: "/tien-ich/vuonthu.webp", title: "Vườn thú mở Safari" },
    { src: "/tien-ich/cangtau.webp", title: "Bến du thuyền Landmark Harbour" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLightbox = (idx: number) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <div className="bg-[#0a4d34] text-white">
      {/* Main Intro Section */}
      <section id="tien-ich" className="py-16 md:py-24 overflow-hidden border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <div className="mb-10">
              <img
                src="/icon.png"
                alt="Icon"
                className="w-16 h-16 md:w-20 md:h-20 mb-10 object-contain"
              />
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-gray-300 text-2xl md:text-3xl font-light tracking-wide">
                  &mdash; Tiện ích All - in - one
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-[1.2] mb-6">
              Công trình biểu tượng <br />
              lần đầu xuất hiện tại <br />
              Việt Nam
            </h2>

            <div className="mb-16">
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-normal">
                Vinhomes Green Paradise Cần Giờ không chỉ xây dựng nhà, mà kiến tạo một thành phố tiện ích với hàng loạt công trình biểu tượng mang tầm vóc kỷ lục thế giới và đẳng cấp quốc tế. Đây chính là yếu tố tạo nên sức hút vượt trội và đảm bảo giá trị tài sản tăng trưởng bền vững theo thời gian.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="text-lg md:text-xl font-medium tracking-wide uppercase cursor-pointer hover:text-amber-500 transition-colors duration-300 flex items-center space-x-3 group"
                  onClick={() => handleScroll(item.id)}
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      <div className="space-y-12 py-12">
        {/* Section: Nhà hát */}
        <section id="nha-hat" className="container mx-auto px-4 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-6">
            <div
              className="overflow-hidden shadow-2xl cursor-pointer hover:opacity-90 transition"
              onClick={() => openLightbox(0)}
            >
              <img
                src="/tien-ich/nhahat.webp"
                alt="Nhà hát sóng xanh Blue Wave theatre"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal text-justify">
                Nhà hát sóng xanh Blue Wave theatre kiến trúc độc đáo bậc nhất thế giới, trải rộng trên diện tích 7ha, được tư vấn bởi Công ty tư vấn thiết kế nổi tiếng Gensler. Là nơi diễn ra các hoạt động văn hóa nghệ thuật đặc sắc với 02 nhà hát sang trọng tổng sức chứa 5000 chỗ ngồi; cùng với đó là khu hội nghị đẳng cấp quy mô 40 phòng; khu tiệc cưới sang trọng với 8 phòng tiệc lớn; khu triển lãm 45.000m²; quảng trường Nhà hát ngoài trời với sức chứa lên tới 30.000 người; khu nhà hàng và dịch vụ ẩm thực đa dạng, khu cảnh quan đồi cỏ, bãi cỏ đa năng xanh thư giãn.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Hồ biển nhân tạo lớn nhất thế giới */}
        <section id="ho-bien" className="container mx-auto px-4 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-6">
            <div
              className="overflow-hidden shadow-2xl cursor-pointer hover:opacity-90 transition"
              onClick={() => openLightbox(1)}
            >
              <img
                src="/tien-ich/bienho.webp"
                alt="Hồ biển nhân tạo lớn nhất thế giới"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal text-justify">
                Biển hồ nước mặn nhân tạo 4 mùa Paradise Lagoon lớn nhất Thế giới 433ha sử dụng nước biển tự nhiên, giúp cư dân được tận hưởng làn nước biến xanh mát được lọc trực tiếp từ biển Cần Giờ 365 ngày trong năm ngay trước hiên nhà.
              </p>
            </div>
          </div>
        </section>


        {/* Section: Sân golf */}
        <section id="san-golf" className="container mx-auto px-4 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-6">
            <div
              className="overflow-hidden shadow-2xl cursor-pointer hover:opacity-90 transition"
              onClick={() => openLightbox(2)}
            >
              <img
                src="/tien-ich/sangolf.webp"
                alt="Sân golf 2"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal text-justify">
                2 Sân Golf 18 lỗ đẳng cấp số 1 Thế Giới được thiết kế bởi những tên tuổi lừng danh. Sân West – Sunset được tư vấn thiết kế bởi tay Golf huyền thoại Tiger Wood và sân East – Sunrise được tư vấn bởi kiến trúc sư kinh điển Robert Trent Jones, truyền tải cảm hứng Bình minh và hoàng hôn tuyệt đẹp.
              </p>
            </div>
          </div>
        </section>

        {/* Section: thap thuong mai */}
        <section id="thap-thuong-mai" className="container mx-auto px-4 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-6">
            <div
              className="overflow-hidden shadow-2xl cursor-pointer hover:opacity-90 transition"
              onClick={() => openLightbox(3)}
            >
              <img
                src="/tien-ich/toathap.webp"
                alt="thap thuong mai"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal text-justify">
                Tòa tháp chọc trời 108 tầng Top 10 Thế giới – công trình kỳ quan ESG++ mới của toàn cầu, tích hợp đa chức năng với khối để thương mại sôi động, văn phòng cao cấp cùng khách sạn siêu sang dành cho giới thượng lưu.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Benh vien quoc te Vinmec */}
        <section id="y-te" className="container mx-auto px-4 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-6">
            <div
              className="overflow-hidden shadow-2xl cursor-pointer hover:opacity-90 transition"
              onClick={() => openLightbox(4)}
            >
              <img
                src="/tien-ich/bienvien.webp"
                alt="Bienh Vien"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal text-justify">
                Hệ thống bệnh viện Quốc tế Vinmec 5 sao/ Bệnh viện Quốc tế hợp tác phát triển cùng hệ thống y tế số 1 nước Mỹ – Cleveland Clinic đáp ứng mọi nhu cầu chữa trị chăm sóc sức khỏe toàn diện cho cả cư dân & trở thành tâm điểm thu hút mạnh mẽ làn sóng du lịch – chăm sóc sức khỏe từ khắp nơi trên thế giới.
              </p>
            </div>
          </div>
        </section>

        {/* Section: San van dong */}
        <section id="san-van-dong" className="container mx-auto px-4 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-6">
            <div
              className="overflow-hidden shadow-2xl cursor-pointer hover:opacity-90 transition"
              onClick={() => openLightbox(5)}
            >
              <img
                src="/tien-ich/trungtam.webp"
                alt="Trung tâm thể thao"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal text-justify">
                Trung tâm phát triển cộng đồng thế hệ trẻ tiêu chuẩn quốc tế Young Paradise Hub thiên đường dành cho các công dân nhí và thế hệ trẻ toàn cầu với quy mô hơn 4.6ha. Với mô hình “Một điểm đến – Vạn nhu cầu”, trung tâm này đáp ứng đầy đủ các nhu cầu đào tạo giáo dục & trải nghiệm sống Xanh, thể thao văn hóa, vui chơi giải trí, mua sắm, nghỉ dưỡng.
              </p>
            </div>
          </div>
        </section>


        {/* Section: quan the vui choi giai tri */}
        <section id="vinwonders" className="container mx-auto px-4 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-6">
            <div
              className="overflow-hidden shadow-2xl cursor-pointer hover:opacity-90 transition"
              onClick={() => openLightbox(6)}
            >
              <img
                src="/tien-ich/quanthe.webp"
                alt="vinwonders"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal text-justify">
                Quần thể vui chơi giải trí 122 ha được tư vấn bởi những nhà thiết kế trò chơi giải trí hàng đầu thế giới với Công viên chủ đề Lễ hội; Công viên nước Lễ hội nước Hybrid đầu tiên tại Đông Nam Á; đường tàu lượn siêu tốc Motor lần đầu tiên tại Việt Nam; tháp rơi kết hợp trình chiếu phim lần đầu có mặt tại châu Á; rạp phim Vortex vòi rồng 360° đầu tiên ở Đông Nam Á; Nhà hát Trống đồng mang bản sắc Việt.
              </p>
            </div>
          </div>
        </section>

        {/* Section: the gioi */}
        <section id="winter-wonders" className="container mx-auto px-4 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-6">
            <div
              className="overflow-hidden shadow-2xl cursor-pointer hover:opacity-90 transition"
              onClick={() => openLightbox(7)}
            >
              <img
                src="/tien-ich/thegioi.webp"
                alt="winter-wonders"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal text-justify">
                “Thế giới băng giá” nuôi dưỡng hải mã, chim cánh cụt, cáo & sói Bắc Cực; khu Winter Wonderland 30.000m² với núi tuyết nhân tạo cao 60 m, sân băng, khu trượt tuyết, zipline..
              </p>
            </div>
          </div>
        </section>

        {/* Section: safari */}
        <section id="safari" className="container mx-auto px-4 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-6">
            <div
              className="overflow-hidden shadow-2xl cursor-pointer hover:opacity-90 transition"
              onClick={() => openLightbox(8)}
            >
              <img
                src="/tien-ich/vuonthu.webp"
                alt="vuon thu"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal text-justify">
                Vườn thú mở Safari với nhà chim 9.600 m² và nhiều loài quý hiếm.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Ben du thuyen */}
        <section id="ben-du-thuyen" className="container mx-auto px-4 md:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-6">
            <div
              className="overflow-hidden shadow-2xl cursor-pointer hover:opacity-90 transition"
              onClick={() => openLightbox(9)}
            >
              <img
                src="/tien-ich/cangtau.webp"
                alt="ben-du-thuyen"
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-normal text-justify">
                Cảng tàu Quốc tế 5 sao Landmark Habour nơi đón các tàu du lịch danh tiếng Thế giới cùng các du thuyền sang trọng của giới thượng lưu siêu giàu.
              </p>
            </div>
          </div>
        </section>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          plugins={[Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
};

export default IconicWorks;
