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

//lesson 1
document.writeln("Bài 1: 🍕" + "<br>")
const input = prompt("Bài 1: Vui Lòng Nhập 1 Chuỗi Kí Tự Bất Kì! 🥰")
const handle = (input.length)
tramy("Xử Lí Thành Công Rồi Nè 👻 Result: " + handle + " kí tự")
document.writeln("<hr>")

//lesson 2
document.writeln("bài 2 🍔:<br>")
const input1 = "javascriptbasic"
hoang("KÍ Tự: javascriptbasic")
hoang("Kết quả từ (0 , 4) là: " + input1.substring(0, 4))
hoang("Kết quả từ (4 , 10)là: " + input1.substring(4, 10))
document.writeln("<hr>");

//lesson 3
document.writeln("bài 3: 🚓")
let a = "Xin chào ";
let b = "bạn học JavaScript";
let nextto = a.concat(b)
hoang("Kết quả là: " + nextto)
document.writeln("<hr>");

//lesson 4
document.writeln("bài 4: 🥗<br>")
const input2 = prompt("bài 4: Vui Lòng Nhập vào 1 chuỗi kí tự thường bất kì! 👌")
const uper = input2.toUpperCase()
tramy("Xử Lí Thành Công Rồi Nè 👻 Result: " + uper)
document.writeln("<hr>");

//lesson 5
document.writeln("bài 5: 🥖")
const input3 = prompt("bài 5: Vui Lòng Nhập vào 1 chuỗi in hoa bất kì: 💞")
const lower = input3.toLowerCase()
tramy("Xử Lí Thành Công Rồi Nè 👻 Chuỗi Kĩ Tự Là:" + "' " + lower + " '")
document.writeln("<hr>");

//lesson 6
document.writeln("bài 6: 🥐")
let input4 = prompt("bài 6: Nhập để kiểm tra số bất kĩ chữ hoạc số nào: 🚌")
let nonum = isNaN(input4)
if (nonum === false) {
    tramy("Xử Lí Thành Công Rồi Nè 👻 Result:  Đây lá số")
}
else {
    tramy("Xử Lí Thành Công Rồi Nè 👻 Result:  ko phải số")
}
document.writeln("<hr>");

//lesson 7
document.writeln("bài 7: 🥙<br>")
const fullname = "Vũ Minh Hoàng"

const dau = fullname.indexOf(" ")
const cuoi = fullname.lastIndexOf(" ")
const ho = fullname.substring(0, dau)
const dem = fullname.substring(dau, cuoi)
const ten = fullname.substring(cuoi)

hoang("Kết quả là: " + "Họ là: " + ho)
hoang("Kết quả là: " + "Đệm là: " + dem)
hoang("Kết quả là: " + "Tên là: " + ten)
document.writeln("<hr>");


//lesson 8 
document.writeln("Bài 8: 🥪<br>");
const str3 = "Anh Yêu Em ay";
if (str3.includes("a")) {
    hoang("Kết quả là: " + "Chuỗi có chứa chữ 'a'")
} else {
    hoang("Kết quả là: " + "Không có chữ 'a'");
}
document.writeln("<hr>");

//lesson 9 
document.writeln("bài 9 🍧:")
const str5 = "TRÀ MY THẦN TƯỢNG CỦA TÔI"
if (str5 === str5.toUpperCase()) {
    hoang("Kết quả là: " + "Chuỗi có in hoa")
}
else {
    hoang("Kết quả là: " + "Chuỗi ko in hoa")
}
document.writeln("<hr>");

//lesson 10
document.writeln("bài 10 🍙:")
const input5 = prompt("bài 10:  Vui Lòng Nhập vào chuỗi 1 kí tự nào đó 😝")
const input6 = prompt("bài 10:  Vui Lòng Nhập vào chuỗi 2 kí tự nào đó 😎")
const noi = input5.concat(input6)
tramy("Xử Lí Thành Công Rồi Nè 👻 Result: " + noi.length + "từ")
hoang("Kết quả là: " + "Kí tự là: '" + noi + "', chuỗi kí tự có độ dài là: " + noi.length + " từ");


