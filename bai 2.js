let a = prompt("Nhap vao ten Sv")
let manganh
let sokyhoc

while (true) {
    manganh = prompt("Nhap vao chuyen nganh")

    if (manganh === "PTPM") {
        sokyhoc = "7"
        break;
    }
    if (manganh === "TKDH") {
        sokyhoc = "6"
        break;
    }
    if (manganh === "DiMA") {
        sokyhoc = "5"
        break;
    }
    else {
        alert("vui long nhap lai")
    }
}
document.writeln(a + " - Số kỳ học là: " + sokyhoc);

