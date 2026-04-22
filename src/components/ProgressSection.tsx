import React from 'react';

const ProgressSection: React.FC = () => {
  return (
    <section id="tien-do" className="py-20 bg-[#e8faed] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <span className="text-amber-600 text-2xl md:text-3xl font-bold tracking-wide">
                &mdash; Tiến độ thần tốc
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a4d34] leading-tight tracking-tight">
              Thực tế tại Vinhomes <br />
              Green Paradise
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-normal text-justify">
              <p>
                Dự án Vinhomes Green Paradise (Vinhomes Cần Giờ) đã đạt được khoảng 70% khối lượng công việc giai đoạn 1 được hoàn thành, vượt xa kỳ vọng ban đầu của chủ đầu tư Vingroup.
              </p>
              <p>
                Công tác san lấp mặt bằng và lấn biển đã hoàn tất 100% diện tích giai đoạn 1, trong đó hệ thống đê kè chống sóng dài hơn 15km đã được xây dựng vững chắc theo tiêu chuẩn quốc tế, đảm bảo an toàn cho toàn bộ khu vực dự án.
              </p>
              <p>
                Về hạ tầng kỹ thuật, hơn 80% hệ thống đường nội khu chính đã được trải nhựa hoàn chỉnh. Đặc biệt, hệ thống cống thoát nước thông minh và lưới điện ngầm đã vận hành ổn định, sẵn sàng phục vụ nhu cầu của dự án trong các giai đoạn tiếp theo.
              </p>
              <p>
                Các phân khu trọng điểm như The Green Bay và The Haven Bay đã thành hình rõ nét với các trục đường chính hoàn thiện. Bên cạnh đó, hạ tầng giao thông kết nối cũng được đẩy mạnh thông qua việc xây dựng cầu Cần Giờ và nâng cấp tuyến đường ven biển, giúp rút ngắn thời gian di chuyển từ trung tâm TP.HCM đến dự án chỉ còn 45 phút.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative group">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl ">
              <video
                src="https://vinhomesgreenparadies.vn/wp-content/uploads/2026/04/AQPhUC0aq0Movr9oqOgrqZ4Mq4v3AOwPQmvXTzeW_Hhih346BUrFA4-q6JlGmhVM300lnlHllVcrQn1NT0YeY4BYlNZKQCAYojJ71O3YVPYYGg.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Statistics Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#0a4d34] text-white p-8 rounded-2xl shadow-xl z-10 hidden md:block animate-bounce-slow">
              <div className="text-5xl font-bold mb-1">70%</div>
              <div className="text-sm uppercase tracking-widest font-medium opacity-80">Giai đoạn 1 hoàn thành</div>
            </div>
            {/* Subtle decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200 rounded-full -z-10 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default ProgressSection;
