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