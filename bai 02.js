// if (true) {
//   var a = 1;
//   let b = 2;

// }

// // { là 1 scope 

// // }
// console.log(a); // ✅ In ra: 1 (vì var không bị giới hạn trong block)
// console.log(b); // ❌ Lỗi: b is not defined (vì let chỉ tồn tại trong block if)
// for (var i = 0; i < 3; i++) {
//   // ...
// }
// console.log(i); // ✅ In ra: 3

// for (let j = 0; j < 3; j++) {
//   // ...
// }
// console.log(j); // ❌ Lỗi: j is not defined
// let hoten = "thang";
//  hoten = "huy";//lấy cái khai báo mới nhất 
// console.log(hoten);// sử dụng let 

//const ten = "abc"; //không cho thay đổi giá trị 
// ten = "aaa";
// console.log(ten);
// giải phương trình ax^2 + bx + c = 0 
// TH1 : a = 0 , b = 0 ,c = 0 => PT vô số nghiệm 
//TH2 : a = 0 ,b = 0 ,c != 0 => PT vô nghiệm
//TH3 : a = 0 ,b != 0 ,c!=0 bx + c = 0 x = -c/b
//TH4 : a!=0 ,b!=0,c!=0 => tính detal
let a = 10;
let b = 20;
let c = 6
if (a == 0) {
    if (b == 0) {
        if (c == 0) {
            alert("Phương trình có vô số nghiệm");
        } else {
            alert("Phương trình  vô  nghiệm");
        }
    }
    else {
        let x = -c / b;
        alert("Phuong trinh co 1 nghiệm " + x);
    }
} else {
    let delta = b * b - 4 * a * c;
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("Phuong trinh co hai nghiem pha biet x1 =" + x1 + "x2 =" + x2);
    } else if (delta == 0) {
        let x = -b / (2 * a);
        alert("Phuong trinh co nghiem kep x= " + x);
    } else {
        alert("phuong trinh vo nghiem");
    }
}