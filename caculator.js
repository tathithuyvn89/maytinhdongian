
function cong() {
    let sothunhat= document.getElementById("number1").value;
    let sothuhai= document.getElementById("number2").value;

    let ketqua= Number(sothunhat)+Number(sothuhai);
    document.getElementById("ketqua").innerHTML= ketqua;

}
function tru() {
    let sothunhat = document.getElementById("number1").value;
    let sothuhai = document.getElementById("number2").value;

    let ketqua = Number(sothunhat) - Number(sothuhai);
    document.getElementById("ketqua").innerHTML = ketqua;
}
    function nhan() {
    let sothunhat= document.getElementById("number1").value;
    let sothuhai= document.getElementById("number2").value;

    let ketqua= Number(sothunhat)*Number(sothuhai);
    document.getElementById("ketqua").innerHTML= ketqua;

}
function chia() {
    let sothunhat= document.getElementById("number1").value;
    let sothuhai= document.getElementById("number2").value;

    let ketqua= Number(sothunhat)/Number(sothuhai);
    document.getElementById("ketqua").innerHTML= ketqua;

}