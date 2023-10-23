
// --------Tạo layout với nút thêm số------------
// Đặt mãng ở ngoài nút onclick vì khi click vào thì sẽ tự tạo mãng riêng biệt
// Tạo biến soNguyen là 1 mãng rổng => sau đó từ nút onclick thêm giá trị vào
var soNguyen = [];

// Tao nút onclick để hiện giá trị
document.getElementById("nut").onclick = function (){
    // input
    var inPut = document.getElementById("nhapSo").value *1;
    
     // Thêm vào mãng
    soNguyen.push(inPut)
    console.log(soNguyen)

    // rander ra giao diện
    document.getElementById("ketQua").innerHTML = soNguyen
}

// --------Tính tổng số chẳn------------
document.getElementById("nut2").addEventListener('click', function(){
    // Duyệt qa từng phần tử có trong mãng để kiểm tra xem số nào là số chẳn
    // Tạo biến tổng để cộng dồn các giá trị
    // Xuất kết quả lên giao diện cho người dung
    var tong =  0;
    for(var i = 0 ; i < soNguyen.length ; i++){
        // kiểm tra số chẳn
        if(soNguyen[i]  > 0){
            tong += soNguyen[i]
        }
    }
    // Rander ra kết quả
    document.getElementById("ketQua2").innerHTML = tong
    
})


// -------Đếm số chẳn------------
// Duyệt qua từng phần tử trong mãng để kiểm tra có bao nhiêu số dương
// Tạo biến số dương và công dồn
// Xuất ra giao diện
document.getElementById("nut3").addEventListener('click',function(){
    var demSoDuong = 0;
    for(var i = 0 ; i < soNguyen.length ; i++){
        // kiểm tra số chẳn
        if(soNguyen[i]  > 0){
            demSoDuong ++;
        }
    }
    document.getElementById("ketQua3").innerHTML = demSoDuong

})


// -------Đếm số nhỏ nhất------------
document.getElementById("nut4").addEventListener('click',function(){
    var demSoNhoNhat = 0;
    var viTriNhoNhat = 0;
    for(var i = 1 ; i < soNguyen.length ; i++){
        // kiểm tra số nhỏ nhất
        if(soNguyen[i]  <  demSoNhoNhat){
            demSoNhoNhat =  soNguyen[i];
            viTriNhoNhat = i
        }
    }
    console.log("Số nhỏ nhất trong mảng là: " + demSoNhoNhat + " và nằm ở vị trí thứ " + viTriNhoNhat);
    document.getElementById("ketQua4").innerHTML = "Số nhỏ nhất trong mảng là: " + demSoNhoNhat + " và nằm ở vị trí thứ " + viTriNhoNhat
})

// -------Tìm số dương nhỏ nhất------------
document.getElementById("nut5").addEventListener('click',function(){
    var soDuongNhoNhat = null; // Biến tạm để lưu số dương nhỏ nhất

    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] > 0) {
            if (soDuongNhoNhat === null || soNguyen[i] < soDuongNhoNhat) {
                soDuongNhoNhat = soNguyen[i];
            }
        }
    }
    var ketQuaSoDuongNhoNhat = document.getElementById("ketQua5");
    if (soDuongNhoNhat !== null) {
        ketQuaSoDuongNhoNhat.innerHTML = "Số dương nhỏ nhất trong mảng là: " + soDuongNhoNhat
        console.log("Số dương nhỏ nhất trong mảng là: " + soDuongNhoNhat);
    } else {
        ketQuaSoDuongNhoNhat.innerHTML = "Không có số dương trong mảng."
        console.log("Không có số dương trong mảng.");
    }
})

// -------Tìm số chẳn cuối cùng------------
document.getElementById("nut6").addEventListener('click',function(){
    var soChanCuoiCung = null; // Bắt đầu với giả định là chưa tìm thấy số chẵn

    for (var i = soNguyen.length - 1; i >= 0; i--) {
    var phanTuHienTai = soNguyen[i]; // Lấy phần tử hiện tại trong mảng

    if (phanTuHienTai % 2 === 0) { // Kiểm tra nếu phần tử là số chẵn
        soChanCuoiCung = phanTuHienTai; // Cập nhật giá trị của số chẵn cuối cùng
        break; // Kết thúc vòng lặp khi đã tìm thấy số chẵn cuối cùng
    }
}
    var ketQuaSoChanCuoiCung = document.getElementById("ketQua6");
    if (soChanCuoiCung !== null) {
        ketQuaSoChanCuoiCung.innerHTML = "Số chẵn cuối cùng trong mảng là: " + soChanCuoiCung
        console.log("Số chẵn cuối cùng trong mảng là: " + soChanCuoiCung);
    } else {
        ketQuaSoChanCuoiCung.innerHTML = "Không có số chẵn trong mảng."
        console.log("Không có số chẵn trong mảng.");
    }
})

// -------Đổi chổ------------
document.getElementById("nut7").onclick = function (){
    // input
    var inPut = document.getElementById("nhapSo").value *1;
    
     // Thêm vào mãng
    soNguyen.reverse(inPut)
    console.log(soNguyen)
    // rander ra giao diện
    document.getElementById("ketQua7").innerHTML = soNguyen
}

// -------Sắp xếp tăng dần------------
document.getElementById("nut8").onclick = function (){
    // input
    var inPut = document.getElementById("nhapSo").value *1;
    
     // Thêm vào mãng
    soNguyen.sort(function (a, b) {
        return a - b;
    });
    console.log(soNguyen)
    // rander ra giao diện
    document.getElementById("ketQua8").innerHTML = soNguyen
}

// -------Tìm số nguyên tố đầu tiên------------
document.getElementById("nut9").onclick = function () {
    // Lấy giá trị nhập từ người dùng
    var inputValue = document.getElementById("nhapSo").value * 1;

    // Thêm giá trị vào mảng soNguyen
    soNguyen.push(inputValue);

    // Tìm số nguyên tố đầu tiên trong mảng
    var soNguyenToDauTien = timSoNguyenToDauTien(soNguyen);

    // Hiển thị kết quả trên giao diện
    var ketQuaElement = document.getElementById("ketQua9");
    if (soNguyenToDauTien !== null) {
        ketQuaElement.innerHTML = "Số nguyên tố đầu tiên trong mảng là: " + soNguyenToDauTien;
    } else {
        ketQuaElement.innerHTML = "Không có số nguyên tố trong mảng.";
    }
}

// Hàm kiểm tra xem một số có phải là số nguyên tố hay không
function laSoNguyenTo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 == 0 || n % 3 == 0) return false;

    for (var i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }

    return true;
}

// Hàm tìm số nguyên tố đầu tiên trong mảng
function timSoNguyenToDauTien(mang) {
    for (var i = 0; i < mang.length; i++) {
        if (laSoNguyenTo(mang[i])) {
            return mang[i];
        }
    }
    return null; // Không tìm thấy số nguyên tố
}



// -------Đếm số nguyên------------
document.getElementById("nut10").onclick = function () {
    // Lấy giá trị nhập từ người dùng
    var inputValue = document.getElementById("nhapSo").value * 1;

    // Thêm giá trị vào mảng soNguyen
    soNguyen.push(inputValue);

    // Đếm số nguyên trong mảng
    var soNguyenDem = demSoNguyen(soNguyen);

    // Hiển thị kết quả trên giao diện
    var ketQuaElement = document.getElementById("ketQua10");
    ketQuaElement.innerHTML = "Số nguyên trong mảng: " + soNguyenDem;
}

// Hàm kiểm tra xem một giá trị có phải là số nguyên không
function laSoNguyen(value) {
    return typeof value === 'number' && Number.isInteger(value);
}

// Hàm đếm số nguyên trong mảng
function demSoNguyen(mang) {
    var dem = 0;
    for (var i = 0; i < mang.length; i++) {
        if (laSoNguyen(mang[i])) {
            dem++;
        }
    }
    return dem;
}

// -------So sánh số lượng số âm và số dương------------
document.getElementById("nut11").onclick = function () {
    // Lấy giá trị nhập từ người dùng
    var inputValue = document.getElementById("nhapSo").value * 1;

    // Thêm giá trị vào mảng soNguyen
    soNguyen.push(inputValue);

    // So sánh số lượng số âm và số dương trong mảng
    var soLuongAm = 0;
    var soLuongDuong = 0;

    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] < 0) {
            soLuongAm++;
        } else if (soNguyen[i] > 0) {
            soLuongDuong++;
        }
    }

    // Hiển thị kết quả trên giao diện
    var ketQuaElement = document.getElementById("ketQua11");
    ketQuaElement.innerHTML = "Số lượng số âm trong mảng: " + soLuongAm + "<br>" +
        "Số lượng số dương trong mảng: " + soLuongDuong;
}