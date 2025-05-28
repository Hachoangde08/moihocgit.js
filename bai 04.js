
//1 số hàm xử lý chuỗi (string)
// let str = "toi la thang";
//đếm xem trong chuỗi có bao nhiêu ký tự // chiều dài chuỗi
// console.log(str.length);
//cắt chuỗi 
// console.log(str.substring(0,3));
// cat chu la
// console.log(str.substring(4,6));
// cat chu thang
// console.log(str.substring(7,12));
// nối chuỗi concat 
// let str1 = "toi nam nay 29 tuoi";
// let str2 = str.concat(str1);
// console.log(str2);
// viết hoa 
// let strH = str.toUpperCase();
// console.log(strH);
// viết thường
// let strT = str.toLowerCase();
// console.log(strT);
// kiểm tra xem có phải là số hay không 
// let x = 1;
// let check = isNaN(x);
// trả về true/false 
// check == false là số 
// check == true là chuỗi 
// if(check == false) {
//     alert("la so");
// } else {
//     alert("la chu");
// }
// hàm làm tròn số 
// let num = 1.4345;
// let numa = num.toFixed();//làm tron số 2 
// let numb = num.toFixed(2);//làm tron số 2 
// console.log(numb);

//--------------------------HomeWork----------------------------//
// ham in ra
function tramy(em) {
    alert(em)
    document.writeln(em + "<br>")
    console.log(em)
}
function hoang(toi) {
    document.writeln(toi + "<br>")
    console.log(toi)
}


//--------------------------HomeWork----------------------------

//lesson 1
document.writeln("bài 1:" + "<br>")
let str = prompt("bài 1: Nhap 1 chuỗi kí tự nào đó")
alert("Dộ dài chuỗi bạn đang nhập là :" + str.length)
document.writeln("Kết quả là: Dộ dài chuỗi bạn đang nhập là :" + str.length + " từ<br>")
document.writeln("<hr>");
console.log("Kết quả là: Dộ dài chuỗi bạn đang nhập là :" + str.length)

//lesson 2
document.writeln("bài 2:<br>")
let chuoi = "javascriptbasic"
document.writeln("Kết quả từ (0 , 4) là: " + chuoi.substring(0, 4) + "<br>")
document.writeln("Kết quả từ (4 , 10)là: " + chuoi.substring(4, 10) + "<br>")
document.writeln("<hr>");
console.log("Kết quả từ (0 , 4) là: " + chuoi.substring(0, 4))
console.log("Kết quả từ (4 , 10)là: " + chuoi.substring(4, 10))

//lesson 3
document.writeln("bài 3:")
let a = "Xin chào ";
let b = "bạn học JavaScript";
let lien = a.concat(b)
document.writeln(lien + "<br>")
document.writeln("<hr>");
console.log(lien)

//lesson 4
document.writeln("bài 4:<br>")
let str2 = prompt("bài 4: Nhập vào 1 chuỗi in thường bất kì:")
let uper = str2.toUpperCase()
alert("chuỗi kĩ tự là:" + uper)
document.writeln("Kết quả là: " + uper + "<br>")
document.writeln("<hr>");
console.log("chuỗi kĩ tự là:" + uper)

//lesson 5
document.writeln("bài 5:")
let str1 = prompt("bài 5: Nhập vào 1 chuỗi in hoa bất kì:")
let lower = str1.toLowerCase()
alert("chuỗi kĩ tự là:" + "'" + lower + "'")
document.writeln("Kết quả là: " + lower + "<br>")
document.writeln("<hr>");
console.log("chuỗi kĩ tự là:" + "'" + lower)

//lesson 6

document.writeln("bài 6: 🥐")
let input4 = prompt("bài 6: Nhập để kiểm tra số bất kĩ chữ hoạc số nào: 🚌")
let nonum = isNaN(input4)
if (nonum === false) {
    tramy("Xử Lí Thành Công Rồi Nè 👻 Result:  Đây lá số")
}
document.writeln("bài 6:")
let num = prompt("bài 6: Nhập bất kĩ chữ hoạc số nào:")
let konum = isNaN(num)
if (konum === false) {
    alert("Đây lá số")
    document.writeln("Kết quả là: " + "Đây là số" + "<br>")
    console.log("Kết quả là: " + "Đây là số")
}
else {
    alert("ko phải số")
    document.writeln("Kết quả là: " + "ko phải số" + "<br>")
    console.log("Kết quả là: " + "ko phải số")
}
document.writeln("<hr>");

//lesson 7
document.writeln("bài 7:<br>")
let fullname = "Vũ Minh Hoàng"

let dau = fullname.indexOf(" ")
let cuoi = fullname.lastIndexOf(" ")

let ho = fullname.substring(0, dau)
let dem = fullname.substring(dau + 1, cuoi)
let ten = fullname.substring(cuoi + 1)

document.writeln("Kết quả là: " + "Họ là: " + ho + "<br>")
document.writeln("Kết quả là: " + "Đệm là: " + dem + "<br>")
document.writeln("Kết quả là: " + "Tên là: " + ten + "<br>")
document.writeln("<hr>");
console.log("Kết quả là: " + "Họ là: " + ho + dem + ten)

//lesson 8 

document.writeln("Bài 8: 🥪<br>");
const str3 = "Anh Yêu Em ay";
if (str3.includes("a")) {
    hoang("Kết quả là: " + "Chuỗi có chứa chữ 'a'")
    document.writeln("Bài 8:<br>");
}
if (str3.includes("a") || str3.includes("A")) {
    document.writeln("Kết quả là: " + "Chuỗi có chứa chữ 'a'<br>");
    console.log("Kết quả là: " + "Chuỗi có chứa chữ 'a'")
} else {
    document.writeln("Kết quả là: " + "Không có chữ 'a'<br>");
    console.log("Kết quả là: " + "Không có chữ 'a'")
}
document.writeln("<hr>");

//lesson 9 
document.writeln("bài 9:")
let str5 = "TRÀ MY THẦN TƯỢNG CỦA TÔI"
if (str5 === str5.toUpperCase()) {
    document.writeln("Kết quả là: " + "Chuỗi có in hoa" + "<br>")
    console.log("Kết quả là: " + "Chuỗi có in hoa")
}
else {
    document.writeln("Kết quả là: " + "Chuỗi ko in hoa" + "<br>")
    console.log("Kết quả là: " + "Chuỗi ko in hoa")
}
document.writeln("<hr>");

//lesson 10
document.writeln("bài 10:")
let str6 = prompt("bài 10: Nhap vào chuỗi 1 kí tự nào đó")
let str7 = prompt("bài 10: Nhap vào chuỗi 2 kí tự nào đó")
let noi = str6.concat(str7)
alert("chuỗi kí tự có độ dài" + noi.length)
document.writeln("Kết quả là: " + "Kí tự là: '" + noi + "', chuỗi kí tự có độ dài là: " + noi.length + " từ<br>");
console.log("Kết quả là: " + "Kí tự là: '" + noi + "', chuỗi kí tự có độ dài là: " + noi.length) 
