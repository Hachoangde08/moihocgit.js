// object trong js
// doi tuong gom 1 phan :
// dac diem cua doi tuong do gop phan thinh thanh va 
// nhanh dang doi tuong.
// thuc hien 
//khai bao trong js
// let sv1 = {
//     ten: "Vu tra My",
//     tuoi: 19,
//     maSv: "TM807",
//     di: function () {
//         alert("di bang minh hoang")
//     },
//     hienthi: function () {
//         return this.ten + "<br>" + this.tuoi;
//     },

// }
// console.log(sv1.ten)
// let a = sv1.hienthi();
// document.writeln(a);

//----------------------homework--------------------
function Toinho(VuTraMy) {
    alert(VuTraMy)
}

//lesson 2:
const dongho = {
    thuonghieu: "Rojack",
    gia: "5.000.000$",
    mausac: "bac ma vang + titan",
    hienthi: function () {
        return "Thương Hiệu: " + this.thuonghieu + "\n" +
            "Mầu sắc là: " + this.mausac + "\n" +
            "giá:" + this.gia
    },
}
const My = dongho.hienthi()
Toinho("lesson 2:" + "\n" + My)
console.log(My)

//Lesson 3:
const mayTinh = {
    hang: "Nvidia Corporation",
    ram: "500 Brontobyte(Bb)",
    ssd: "Kingston",
    hienthi: function () {
        return "hãng: " + this.hang + "\n" +
            "Ram: " + this.ram + "\n" +
            "SSD: " + this.ssd + "\n    "
    },
}
const Nvidia = mayTinh.hienthi()
Toinho("lesson 3:" + "\n" + Nvidia)
console.log(Nvidia)

//lesson 4:
const sinhVien = {
    ten: "Vũ Trà My",
    tuoi: "17",
    maSV: "CC2008",
    chao: function () {
        alert("Lesson 4:\n Chào thầy, em tên là " + this.ten + ",tuổi " + this.tuoi + ",Mã Sinh Viên là " + this.maSV)
    }
}
const VuTraMy = sinhVien.chao()
console.log(VuTraMy)

//lesson 5:
const car = {
    hang: "Rolls-Royce",
    dongCo: "V12 Twin-Turbo",
    namSX: 2024,
    start: function () {
        alert("Lesson 5:" + "\n" + "Xe đang khởi động...")
    }
};
const kerra = car.start()
console.log(kerra)

//lesson 6:
const subject = {
    tenMon: "Lam Quen CNTT",
    soTinChi: "5",
    hienthi: function () {
        alert("Lesson 6: " + "\n" + "Môn học: " + this.tenMon + "\n" +
            "Tín chỉ: " + this.soTinChi + "\n")
    }
}
const mon = subject.hienthi()
console.log(mon)

//lesson 7:
const giaovien = {
    tenGV: "Hoang Quang Thang",
    boMon: "CNTT",
    sdt: "0999999999999",
    goiDien: function () {
        return "Lesson 7:Đang gọi tới: " + this.sdt
    }
}
const giaoviencc = giaovien.goiDien()
Toinho(giaoviencc)
console.log(giaoviencc)

//lesson 8:
const dienThoai = {
    ten: "IPHONE 16 PRO MAX",
    mauSac: "Titan",
    gia: "3999$",
    unlock: function () {
        alert("Lesson 8:Điện thoại đã mở khóa!")
    }
}
const show = dienThoai.unlock()
console.log(show)

//lesson 9:
const hoadon = {
    maHD: "Lexus rx350",
    khachHang: "Người giầu",
    tongTien: "50.000$",
    thanhToan: function () {
        alert("Lesson 9:\nKhách " + this.khachHang + ",đã thanh toán " + this.tongTien + "VNĐ")
    }
}
const bill = hoadon.thanhToan()
console.log(bill)

//lesson 10:
const taikhoan = {
    username: "Minh Hoang",
    password: "manhuccrr!!",
    dangNhap: function () {
        if (username === "admin") {
            alert("Đăng nhập thành công")
        }
        else {
            alert("Sai thông tin")
        }
    }
}
const xacnhan = taikhoan.dangNhap()
console.log(xacnhan)




