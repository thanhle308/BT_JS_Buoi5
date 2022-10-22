// BÀI 1 

function ketqua() {
    var dc = Number(document.getElementById("chuan").value);
    var kv = Number(document.getElementById("selLocation").value);
    var dt = Number(document.getElementById("selUser").value);
    var diem1 = Number(document.getElementById("diem1").value);
    var diem2 = Number(document.getElementById("diem2").value);
    var diem3 = Number(document.getElementById("diem3").value);

    if (diem1 == 0 || diem2 == 0 || diem3 == 0 || ((diem1 + diem2 + diem3) < dc)) {
        document.getElementById("txtkq").innerHTML = "Bạn bị rớt rồi rồi!";
    } else {
        var tongdiem = (diem1 + diem2 + diem3);
        document.getElementById("txtkq").innerHTML = "Bạn đậu với số điểm :"+tongdiem;
    }
}
document.getElementById("btnkq").onclick = ketqua;

// BÀI 2 

const GIA_50KW_DAU = 500;
const GIA_50KW_KE = 650;
const GIA_100KW_KE = 850;
const GIA_150KW_KE = 1100;
const GIA_CONLAI = 1300;

function tinhtongtien() {
    var tongtien = 0;
    var kw = Number(document.getElementById("kw").value);
    var ten = document.getElementById("name").value;

    if (kw <= 50) {
        tongtien = kw *GIA_50KW_DAU;
    } else if (50 < kw && kw <=100){
        console.log("50<kw<=100");
        tongtien = GIA_50KW_DAU*50 + (kw-50)*GIA_50KW_KE;
    }else if (100 < kw && kw<= 200){
        console.log("100<kw<=200");
        tongtien = GIA_50KW_DAU*50 + GIA_50KW_KE*50 +GIA_100KW_KE*(kw-100);
    }else if (200 < kw && kw <= 350){
        tongtien = GIA_50KW_DAU*50 + GIA_50KW_KE*50 +GIA_100KW_KE*100 + GIA_150KW_KE*(kw-200);
    } else if (350 < kw){
        tongtien = GIA_50KW_DAU*50 + GIA_50KW_KE*50 +GIA_100KW_KE*100 + GIA_150KW_KE*200 +GIA_CONLAI*(kw-350);
    }

    document.getElementById("txtkw").innerHTML ="Họ tên : "+ten+" , Tiền điện : "+ tongtien.toLocaleString()+" VNĐ";
}
document.getElementById("btnkw").onclick =tinhtongtien;