export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a4d34] via-[#0a4d34] to-black text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

        {/* Cột 1: Thông tin dự án & Mạng xã hội */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-6 text-center md:text-left">
            <img src="/Logo-Newstarland.svg" alt="Logo" className="h-20 w-auto mb-4 brightness-0 invert" />
            <h3 className="text-xl font-bold uppercase tracking-tighter">Vinhomes Green Paradise</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-10 text-center md:text-left max-w-sm">
            Vinhomes Green Paradise – SIÊU ĐÔ THỊ ESG++ XANH – THÔNG MINH – SINH THÁI & TÁI SINH ĐẲNG CẤP HÀNG ĐẦU THẾ GIỚI sắp hình thành, ôm trọn các báu vật "Rừng vàng Biển bạc" với khu dự trữ sinh quyển Thế giới lên tới 75.000ha rừng ngập mặn và bờ biển dài bao quanh dự án duy nhất tại TP.HCM.
          </p>
          <div className="w-full text-center md:text-left">
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-white border-b border-white/10 pb-2 inline-block">MẠNG XÃ HỘI</h4>
            <div className="flex justify-center md:justify-start space-x-5">
              <a href="#" className="hover:scale-110 transition-transform"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
              <a href="#" className="hover:scale-110 transition-transform"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg></a>
              <a href="#" className="hover:scale-110 transition-transform"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /></svg></a>
              <a href="#" className="hover:scale-110 transition-transform"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
            </div>
          </div>
        </div>

        {/* Cột 2: Chuyên mục */}
        <div className="md:pl-10">
          <h4 className="text-xl font-bold mb-8 uppercase tracking-widest border-b border-white/20 pb-2">CHUYÊN MỤC</h4>
          <ul className="space-y-4 text-gray-300">
            <li><a href="/gioi-thieu" className="hover:text-yellow-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>Giới thiệu</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>Điều khoản hoạt động</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>Quy chế hoạt động</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>Chăm sóc khách hàng</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>Tin tức</a></li>
            <li><a href="/lien-he" className="hover:text-yellow-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột 3: Thông tin liên hệ */}
        <div>
          <h4 className="text-xl font-bold mb-8 uppercase tracking-widest border-b border-white/20 pb-2">THÔNG TIN LIÊN HỆ</h4>
          <div className="space-y-6 text-sm">
            <div className="space-y-1">
              <p className="font-bold text-white text-base">CÔNG TY TNHH PHÁT TRIỂN THƯƠNG MẠI BĐS NEWSTARLAND</p>
              <p className="text-yellow-500 font-medium italic">ĐƠN VỊ PHÂN PHỐI BẤT ĐỘNG SẢN SỐ 1 VIỆT NAM</p>
            </div>

            <div className="space-y-2">
              <p className="flex flex-col">
                <span className="font-bold text-white uppercase text-xs tracking-wider mb-1">Hotline tư vấn dự án:</span>
                <a href="tel:0363998373" className="text-lg font-bold text-yellow-500 hover:underline">0363.998.373</a>
              </p>
              <p className="flex flex-col text-gray-300">
                <span className="font-bold text-white uppercase text-xs tracking-wider mb-1">Hotline tuyển dụng:</span>
                <span>0975.237.796 hoặc 0966.892.998</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <p className="flex flex-col">
                <span className="font-bold text-white uppercase text-xs tracking-wider mb-1">Email:</span>
                <a href="mailto:info@newstarland.com" className="text-gray-300 hover:text-yellow-500 transition-colors">info@newstarland.com</a>
              </p>
              <p className="flex flex-col">
                <span className="font-bold text-white uppercase text-xs tracking-wider mb-1">Website:</span>
                <a href="http://www.newstarland.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500 transition-colors">www.newstarland.com</a>
              </p>
            </div>

            <div className="pt-4 space-y-5 border-t border-white/10">
              <h5 className="font-black text-white uppercase tracking-widest text-xs flex items-center">
                <span className="w-8 h-[1px] bg-yellow-500 mr-3"></span>
                LIÊN HỆ CHÚNG TÔI
              </h5>

              <div className="grid grid-cols-1 gap-4">
                <div className="group cursor-pointer">
                  <p className="font-bold text-white group-hover:text-yellow-500 transition-colors">Trụ sở Hà Nội:</p>
                  <p className="text-gray-300 text-xs mb-1">Tầng 2 CT1 - KĐT Eco Green, 286 Nguyễn Xiển, Thanh Trì, Hà Nội</p>
                  <a href="#" className="text-[10px] text-yellow-600 font-bold hover:underline uppercase tracking-tighter">Xem bản đồ</a>
                </div>
                <div className="group cursor-pointer">
                  <p className="font-bold text-white group-hover:text-yellow-500 transition-colors">Văn Phòng Hồ Chí Minh:</p>
                  <p className="text-gray-300 text-xs mb-1">218 Nguyễn Văn Hưởng Thảo Điền Quận 2, Tp Thủ Đức</p>
                  <a href="#" className="text-[10px] text-yellow-600 font-bold hover:underline uppercase tracking-tighter">Xem bản đồ</a>
                </div>
                <div className="group cursor-pointer">
                  <p className="font-bold text-white group-hover:text-yellow-500 transition-colors">Văn phòng phía tây:</p>
                  <p className="text-gray-300 text-xs mb-1">Newstarland phía tây Hà Nội</p>
                  <a href="#" className="text-[10px] text-yellow-600 font-bold hover:underline uppercase tracking-tighter">Xem bản đồ</a>
                </div>
                <div className="group cursor-pointer">
                  <p className="font-bold text-white group-hover:text-yellow-500 transition-colors">Vinhomes Ocean Park:</p>
                  <p className="text-gray-300 text-xs mb-1">Vinhomes Ocean Park 2</p>
                  <a href="#" className="text-[10px] text-yellow-600 font-bold hover:underline uppercase tracking-tighter">Xem bản đồ</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-xs text-gray-500 tracking-widest uppercase">
          © {new Date().getFullYear()} <span className="text-gray-400 font-bold">NEWSTARLAND</span>. PHÂN PHỐI DỰ ÁN VINHOMES GREEN PARADISE.
        </p>
      </div>
    </footer>
  );
}
