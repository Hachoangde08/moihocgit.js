// //hàm trong js
// //Đặt vấn đề hàm là gì ???
// let n = 5;
// let c = 6;


// //khai báo hàm
// function ktraChanLe(n) { // n là tham số


//     if (n & 2 == 0) //=> chẵn
//     {
//         alert("Đây là số chẵn");
//     } else {
//         alert("Đây là số lẻ");
//     }
// }

// function kiemtra2sochanle(n) {
//     if (n % 2 == 0) {
//         alert(n + " la so chan")
//     }
//     else {
//         alert("la so le")
//     }
// }
// kiemtra2sochanle(2);
//hàm được dùng để đóng gói 1 đoạn chương trình
//hàm mang tính tái sử dụng cao
//hàm có hai loại
//có trả về ==> dấu hiện nhận biết là có return
//không trả về ==> dấu hiệu nhận biết là không có return

//--------------------------Homework-----------------------

// lesson 1
document.writeln("Bài 1:" + "<br>   ")
function chuvihinhchunhat(a, b) {
    document.writeln("chu vi hình chữ nhật(ko return): " + (a + b) * 2 + "<br>")
    console.log("chu vi hình chữ nhật(ko return): " + (a + b) * 2)
}
function dientichhinhchunhat(a, b) {
    document.writeln("dien tich hình chữ nhật(ko return): " + (a * b) + "<br>")
    console.log("dien tich hình chữ nhật(ko return): " + (a * b))
}
function chuvihinhchunhat_return(a, b) {
    return "chu vi hinh chu nhat la(co return): " + (a + b) * 2;
}
function dientichhinhchunhat_return(a, b) {
    console.log("dien tich hinh chu nhat la (co return): " + (a * b))
    return "dien tich hinh chu nhat la (co return): " + (a * b);
}

//lesson 2
function luythua(a, b) {
    document.writeln("<hr>");
    document.writeln("Bài 2:" + "<br>")
    document.writeln("pt can bậc 2 (No Return): " + Math.pow(a, b) + "<br>")
    console.log("pt can bậc 2 (No Return): " + Math.pow(a, b))
}
function luythua_return(a, b) {
    console.log("pt can bac 2 (Have Return): " + Math.pow(a, b))
    return "pt can bac 2 (Have Return): " + Math.pow(a, b)
}

// lesson 3

function delta(a, b, c) {
    if (a === 0 && b === 0) {
        if (c !== 0) {
            document.writeln("pt Vo Nghiem<br>")
            console.log("pt Vo Nghiem")
        } else {
            document.writeln("pt Vo So Nghiem<br>")
            console.log("pt vo so nghiem")
        }
    }

    let delta = b * b - 4 * a * c
    if (delta > 0) {
        document.writeln("<hr>");
        document.writeln("Bài 3:" + "<br>")
        const x1 = (-b - Math.sqrt(delta)) / (2 * a)
        const x2 = (-b + Math.sqrt(delta)) / (2 * a)
        console.log("vay pt co nghiem phan biet(No Return) X1 = " + x1 + ",X2 = " + x2)
        document.writeln("vay pt co nghiem phan biet(No Return) X1 = " + x1 + ",X2 = " + x2 + "<br>")
    }
    else if (delta === 0) {
        const x = -b / (2 * a)
        console.log("Pt co nghiem kep la(No Return) X= " + x)
        document.writeln("Pt co nghiem kep la(No Return) X= " + x + "<br>")
    }
    else {
        console.log("Pt Vo Nghiem")
        document.writeln("Pt Vo Nghiem")
    }
}

function delta_return(a, b, c) {
    if (a === 0 && b === 0) {
        return c !== 0 ? "pt vo nghiem" : "pt vo so nghiem"
    }

    let delta = b * b - 4 * a * c
    if (delta > 0) {
        const x1 = (-b - Math.sqrt(delta)) / (2 * a)
        const x2 = (-b + Math.sqrt(delta)) / (2 * a)
        console.log("vay pt co 2 nghiem (Return) x1= " + x1 + ",x2= " + x2)
        return "vay pt co 2 nghiem (Return) x1= " + x1 + ",x2= " + x2
    }
    else if (delta === 0) {
        const x = -b / (2 * a)
        console.log("pt co 2 nghiem kep (Return)x1,x2 " + x)
        return "pt co 2 nghiem kep (Return)x1,x2 " + x
    }
    else {
        console.log("pt vo nghiem")
        return "pt vo nghiem"
    }
}


chuvihinhchunhat(5, 2)
document.writeln(chuvihinhchunhat_return(2, 3) + "<br>");
dientichhinhchunhat(3, 3)
document.writeln(dientichhinhchunhat_return(5, 2) + "<br>")

luythua(2, 6)
document.writeln(luythua_return(2, 6) + "<br>")

delta(1, -3, 2)
document.writeln(delta_return(1, -3, 2))
