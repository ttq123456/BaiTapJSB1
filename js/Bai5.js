/**
 * Tính tổng các chữ số có hai chữ số
 * Khối 1: Input
 *  Nhập vào số có hai chữ số 
 * 
 * Khối 2: Các bước xử lý
 *     B1: Khởi tạo biến và gán giá trị num
 *     B2: Công thức
 *          phần chục lấy num / 10 và lấy phần nguyên: Math.floor(num/10)
 *          phần đơn vị; lấy num % 10
 *      tong = phần chục + phần đơn vị
 *     B3: Thông báo kết quả
 * 
 * Khối 3: Output
 *  Tổng các chữ số
 * 
 */

var num = 12;
var chuc = 0, dv = 0, tong = 0;

chuc= Math.floor(num/10);
dv = num % 10;
tong = chuc + dv;

console.log("Tổng số các chữ số là: ",tong);