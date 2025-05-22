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


// lesson 1
function chuvihinhchunhat(a, b) {
    document.writeln("chu vi hình chữ nhật(ko return): " + (a + b) * 2 + "<br>")
}
function dientichhinhchunhat(a, b) {
    document.writeln("dien tich hình chữ nhật(ko return): " + (a * b) + "<br>")
}
function chuvihinhchunhat_return(a, b) {
    return `chu vi hinh chu nhat la(co return): ${(a + b) * 2}`;
}
function dientichhinhchunhat_return(a, b) {
    return `dien tich hinh chu nhat la (co return): ${(a * b)}`;
}

//lesson 2
function ptcanbac2(a, b) {
    document.writeln("pt can bậc 2 (No Return): " + Math.pow(a, b) + "<br>")
}
function ptcanbac2_return(a, b) {
    return `pt can bac 2 (Have Return):${Math.pow(a, b)}`
}

//lesson 3
function delta(a, b, c) {
    if (a === 0 && b === 0) {
        if (c !== 0)
            document.writeln("pt Vo Nghiem<br>")
        else {
            document.writeln("pt Vo So Nghiem<br>")
        }
    }
    let delta = b * b - 4 * a * c
    if (delta > 0) {
        const x1 = (-b - Math.sqrt(delta)) / (2 * a)
        const x2 = (-b + Math.sqrt(delta)) / (2 * a)
        document.writeln("vay pt co nghiem phan biet X1 = " + x1 + ",X2 = " + x2)
    }
    else if (delta === 0) {
        const x = -b / (2 * a)
        document.writeln("Pt co nghiem kep la X= " + x + "<br>")
    }
    else {
        document.writeln("Pt Vo Nghiem")
    }
}

function delta_return(a, b, c) {
    if (a === 0 && b === 0) {
        if (c !== 0)
            return `pt Vo Nghiem`
        else {
            return `pt Vo So Nghiem`
        }
    }
    let delta = b * b - 4 * a * c
    if (delta > 0) {
        const x1 = (-b - Math.sqrt(delta)) / (2 * a)
        const x2 = (-b + Math.sqrt(delta)) / (2 * a)
        return `pt co 2 nghiem x1= ${x1}; x2 = ${x2}`
    }
    else if (delta === 0) {
        const x = -b / (2 * a)
        return `pt co 2 nghiem kep x1,x2 ${x}`
    }
    else {
        return `pt Vo Nghiem`
    }
}

chuvihinhchunhat(5, 4)
dientichhinhchunhat(2, 4)
document.writeln(chuvihinhchunhat_return(2, 3) + "<br>")
document.writeln(dientichhinhchunhat_return(3, 4) + "<br><br>")

ptcanbac2(3, 2)
document.writeln(ptcanbac2_return(5, 8) + "<br><br>")

delta(1, 2, 1)
document.writeln(delta_return(1, -5, 6) + "<br>")
