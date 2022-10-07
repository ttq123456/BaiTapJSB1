/**
 * Tính diện tích và chu vi hình chữ nhật
 * Khối 1: Input
 *  Nhập vào chiều dài và chiều rộng của hình chữ nhật
 * 
 * Khối 2: Các bước xử lý
 *  B1: Khởi tạo biến và gán giá trị dai, rong
 *  B2: Công thức
 *      dienTich = dai * rong
 *      chuVi = (dai + rong) * 2
 *  B3: Thông báo kết quả
 * 
 */

var dai = 3, rong = 2;
var dienTich = 0, chuVi = 0;

dienTich = dai * rong;
chuVi = (dai + rong) * 2

console.log("Diện tích hình chữ nhật: ", dienTich);
console.log("Chu vi hình chữ nhật: ",chuVi);