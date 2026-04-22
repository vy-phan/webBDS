import React, { useEffect } from 'react';

// Khai báo kiểu dữ liệu cho object Tally toàn cục
declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: any) => void;
      loadEmbeds: () => void;
    };
  }
}

interface Props {
  formId: string;
}

const FloatingTallyBtn: React.FC<Props> = ({ formId }) => {
  // Hàm xử lý mở popup Tally thông qua API
  const handleOpenForm = () => {
    if (window.Tally) {
      window.Tally.openPopup(formId, {
        layout: 'modal',
        width: 600, // Độ rộng tối đa của form popup
        autoClose: 0,
      });
    } else {
      console.warn("Tally script chưa được tải hoàn tất.");
    }
  };

  // Đảm bảo các script nhúng của Tally được khởi tạo khi component mount
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <button
      onClick={handleOpenForm}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#0a4d34] text-[#f5c352] rounded-full shadow-2xl shadow-[#0a4d34]/40 hover:bg-[#007a43] hover:scale-110 transition-all duration-300 group ring-4 ring-white/50"
      aria-label="Đăng ký tư vấn"
    >
      {/* Icon tin nhắn / form */}
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>

      {/* Tooltip gợi ý (hiện ra khi hover) */}
      <span className="absolute right-full mr-4 bg-white text-[#0a4d34] text-sm md:text-base font-bold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Đăng ký nhận báo giá
      </span>

      {/* Hiệu ứng ping nhấp nháy thu hút sự chú ý */}
      <span className="absolute flex h-full w-full rounded-full -z-10">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0a4d34] opacity-30"></span>
      </span>
    </button>
  );
};

export default FloatingTallyBtn;
