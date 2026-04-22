import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const FloorPlanSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const subdivisions = [
    {
      title: "Khu The Haven Bay (Vịnh Tiên)",
      description: "Thiên đường vui chơi – Giải trí – Thể thao – Nghỉ dưỡng."
    },
    {
      title: "Khu The Green Bay (Vịnh Ngọc)",
      description: "Thành phố sức khỏe – Xanh – Sinh thái."
    },
    {
      title: "Khu The Paradise (Mũi Danh Vọng)",
      description: "Thành phố Cảng – Tài chính – Công nghệ – Trí tuệ quốc tế."
    },
    {
      title: "Khu The Grand Island (Đảo Mặt Trời)",
      description: "Hòn đảo Lễ hội Biển Nhiệt đới."
    }
  ];

  const slides = [
    { src: "/bando.webp", title: "Mặt bằng tổng thể Vinhomes Green Paradise" },
    { src: "/mat-bang/khu-the-haven.webp", title: "Phân khu The Haven Bay (Vịnh Tiên)" },
    { src: "/mat-bang/khu-the-green.webp", title: "Phân khu The Green Bay (Vịnh Ngọc)" },
    { src: "/mat-bang/khu-the-paradise.webp", title: "Phân khu The Paradise (Mũi Danh Vọng)" },
    { src: "/mat-bang/khu-the-grand-island.webp", title: "Phân khu The Grand Island (Đảo Mặt Trời)" },
  ];

  const openLightbox = (idx: number) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <section id="mat-bang" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <span className="text-amber-600 text-2xl md:text-3xl font-bold tracking-wide">
                &mdash; Quy hoạch tổng thể
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a4d34] leading-tight tracking-tight">
              Mặt bằng Vinhomes <br />
              Green Paradise
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
              Vinhomes Green Paradise được quy hoạch thành 4 phân khu chính với chức năng riêng biệt nhưng kết nối hài hòa, tạo nên một siêu đô thị hoàn chỉnh:
            </p>

            <ul className="space-y-6">
              {subdivisions.map((item, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                  <p className="text-lg md:text-xl text-gray-700">
                    <span className="font-bold text-gray-900">{item.title}:</span> {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Content */}
          <div className="relative group">
            <div
              className="overflow-hidden shadow-2xl border-8 border-gray-50 transform transition-transform duration-700 group-hover:scale-[1.02] cursor-pointer"
              onClick={() => openLightbox(0)}
            >
              <img
                src="/bando.webp"
                alt="Mặt bằng tổng thể Vinhomes Green Paradise"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-square "
              />
            </div>
            {/* Subtle decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-full -z-10 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-100 rounded-full -z-10 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        {/* Detailed Subdivision Section: The Haven Bay */}
        <div className="mt-24 md:mt-32 p-6 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-[#fcf7e8] via-[#fcf7e8] to-white shadow-sm border border-amber-100/30 space-y-12">
          <div
            className="overflow-hidden rounded-[2rem] cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => openLightbox(1)}
          >
            <img
              src="/mat-bang/khu-the-haven.webp"
              alt="Mặt bằng khu The Haven Bay"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="max-w-4xl space-y-6">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a4d34] tracking-tight">
              The Haven Bay (Vịnh Tiên)
            </h3>

            <p className="text-2xl md:text-3xl text-[#007a43] font-medium tracking-tight">
              Nhận giữ chỗ ưu tiên chọn căn
            </p>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-normal text-justify">
              The Haven Bay (771,1ha) là trái tim của du lịch nghỉ dưỡng với hệ thống tiện ích giải trí đỉnh cao: VinWonders, Safari 122ha, công viên nước, beach club. Phân khu này được thiết kế theo mô hình resort compound, tập trung các sản phẩm biệt thự nghỉ dưỡng, condotel, shophouse ven biển.
            </p>
          </div>
        </div>

        {/* Detailed Subdivision Section: The Green Bay */}
        <div className="mt-24 md:mt-32 p-6 md:p-12 rounded-[2.5rem] shadow-sm border border-amber-100/30 space-y-12">
          <div
            className="overflow-hidden rounded-[2rem] cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => openLightbox(2)}
          >
            <img
              src="/mat-bang/khu-the-green.webp"
              alt="The Green Bay (Vịnh Ngọc)"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="max-w-4xl space-y-6">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a4d34] tracking-tight">
              The Green Bay (Vịnh Ngọc)
            </h3>

            <p className="text-2xl md:text-3xl text-[#007a43] font-medium tracking-tight">
              Ký TTKQ
            </p>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-normal text-justify">
              The Green Bay (586,9ha) định hướng trở thành khu đô thị xanh – sức khỏe với mật độ xây dựng thấp, diện tích cây xanh chiếm 70%, liền kề rừng ngập mặn Cần Giờ. Phân khu này tập trung biệt thự sinh thái, nhà phố, căn hộ xanh với thiết kế thông minh, thân thiện môi trường. Hệ thống Vinmec (hợp tác Cleveland Clinic), Vinschool quốc tế, và công viên thể thao là trọng tâm tiện ích.
            </p>
          </div>
        </div>

        {/* Detailed Subdivision Section: The Paradise */}
        <div className="mt-24 md:mt-32 p-6 md:p-12 rounded-[2.5rem]  shadow-sm border border-amber-100/30 space-y-12">
          <div
            className="overflow-hidden rounded-[2rem] cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => openLightbox(3)}
          >
            <img
              src="/mat-bang/khu-the-paradise.webp"
              alt="The Paradise (Mũi Danh Vọng)"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="max-w-4xl space-y-6">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a4d34] tracking-tight">
              The Paradise (Mũi Danh Vọng)
            </h3>

            <p className="text-2xl md:text-3xl text-[#007a43] font-medium tracking-tight">
              Chưa mở bán
            </p>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-normal text-justify">
              The Paradise (303,5ha) là CBD (Central Business District) của siêu đô thị, với tòa tháp 108 tầng làm biểu tượng. Phân khu này quy tụ các tòa nhà văn phòng hạng A, trung tâm tài chính, khách sạn 6 sao, shophouse thương mại cao cấp. Được quy hoạch theo mô hình Singapore Marina Bay hoặc Dubai Downtown, đây là nơi làm việc của hàng chục nghìn chuyên gia quốc tế, tạo nhu cầu lớn về văn phòng, dịch vụ và lưu trú.
            </p>
          </div>
        </div>

        {/* Detailed Subdivision Section: The Grand Island */}
        <div className="mt-24 md:mt-32 p-6 md:p-12 rounded-[2.5rem]  shadow-sm border border-amber-100/30 space-y-12">
          <div
            className="overflow-hidden rounded-[2rem] cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => openLightbox(4)}
          >
            <img
              src="/mat-bang/khu-the-grand-island.webp"
              alt="The Grand Island (Đảo Mặt Trời)"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="max-w-4xl space-y-6">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a4d34] tracking-tight">
              The Grand Island (Đảo Mặt Trời)
            </h3>

            <p className="text-2xl md:text-3xl text-[#007a43] font-medium tracking-tight">
              Chưa mở bán
            </p>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-normal text-justify">
              The Grand Island (449,8ha) là phân khu ultra-luxury, định hướng phục vụ giới UHNWI (Ultra High Net Worth Individuals) với các biệt thự biển, villa đảo, resort riêng tư tuyệt đối. Phân khu này được quy hoạch theo mô hình Sentosa Singapore hoặc Palm Jumeirah Dubai, với tính riêng tư và độc quyền cao nhất.
            </p>
          </div>
        </div>




      </div>

      {/* Full-width Vịnh Ngọc Banner */}
      <div className="w-full mt-24 md:mt-32 overflow-hidden">
        <img
          src="/vinhNgoc.webp"
          alt="Vịnh Ngọc - Vinhomes Green Paradise"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Sales Policy Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/sky.webp" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-900/10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="bg-[#fcf7e8] rounded-[3rem] p-8 md:p-16 max-w-5xl mx-auto shadow-2xl border border-amber-100/50">
            <div className="mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-amber-600 text-2xl md:text-3xl font-bold tracking-wide">
                  &mdash; Chính sách bán hàng
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#0a4d34] leading-tight tracking-tight">
                Vinhomes <br />
                Green Paradise
              </h2>
            </div>

            <div className="rounded-4xl overflow-hidden shadow-xl mb-16">
              <img
                src="/chinhsach.webp"
                alt="Chính sách bán hàng Vinhomes Green Paradise"
                className="w-full h-auto"
              />
            </div>

            <div className="text-center space-y-12">
              <p className="text-xl md:text-2xl text-[#007a43] font-medium">
                Giá bán dự kiến chưa bao gồm VAT và KPBT:
              </p>

              <div className="space-y-4">
                <h3 className="text-5xl md:text-7xl font-bold text-[#0a4d34]">
                  Nhà phố
                </h3>
                <p className="text-3xl md:text-5xl text-[#007a43] font-bold">
                  từ 125 triệu/m2
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-5xl md:text-7xl font-bold text-[#0a4d34]">
                  Biệt thự
                </h3>
                <p className="text-3xl md:text-5xl text-[#007a43] font-bold">
                  từ 100 triệu/m2
                </p>
              </div>

              <p className="text-xl md:text-2xl text-[#007a43] font-medium leading-relaxed max-w-3xl mx-auto">
                Để nhận ngay chính sách ưu đãi và giá bán nhanh nhất, tốt nhất, quý anh/chị vui lòng điền đầy đủ thông tin bên dưới.
              </p>
            </div>

            {/* Contact Form */}
            <form className="mt-16 max-w-2xl mx-auto space-y-8">
              <div className="space-y-3">
                <label className="block text-xl font-medium text-[#007a43]">Họ và tên*</label>
                <input 
                  type="text" 
                  placeholder="Vui lòng nhập họ và tên" 
                  className="w-full px-6 py-4 rounded-xl border-2 border-[#007a43]/30 bg-white focus:outline-none focus:border-[#007a43] text-lg placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-xl font-medium text-[#007a43]">Email</label>
                <input 
                  type="email" 
                  placeholder="Nhập Email (Không bắt buộc)" 
                  className="w-full px-6 py-4 rounded-xl border-2 border-[#007a43]/30 bg-white focus:outline-none focus:border-[#007a43] text-lg placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-xl font-medium text-[#007a43]">Số điện thoại*</label>
                <input 
                  type="tel" 
                  placeholder="Vui lòng nhập số điện thoại" 
                  className="w-full px-6 py-4 rounded-xl border-2 border-[#007a43]/30 bg-white focus:outline-none focus:border-[#007a43] text-lg placeholder:text-gray-300"
                />
              </div>

              <button 
                type="button" 
                className="w-full py-5 bg-[#f5c352] hover:bg-[#f3b72e] text-[#0a4d34] font-bold text-2xl rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
              >
                NHẬN THÔNG TIN
              </button>

              <div className="pt-10 text-center">
                <p className="text-2xl font-bold italic text-[#007a43]">
                  Hotline phòng kinh doanh: 0918 49 5678
                </p>
              </div>
            </form>

            {/* Decorative Image */}
            <div className="mt-16 -mx-8 md:-mx-16 -mb-8 md:-mb-16 overflow-hidden rounded-b-[3rem]">
              <img 
                src="/decor.png" 
                alt="Vinhomes Green Paradise Decor" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
   
      </section>


      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Thumbnails, Zoom]}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
        }}
      />
    </section>
  );
};

export default FloorPlanSection;
