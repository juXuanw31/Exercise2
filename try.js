function Tambah(e)
{

    var Bilangan1;
    var Bilangan2;
    var HasilJumlah=0;

        Bilangan1 = parseInt(document.getElementById("txtBilangan1").value);
        Bilangan2 = parseInt(document.getElementById("txtBilangan2").value);
    
        
        HasilJumlah = Bilangan1 + Bilangan2;
        alert("Jumlah dari " + Bilangan1 + " dan " + Bilangan2  +  " adalah: " + HasilJumlah);  
}

function Kurang(e)
{
    var Bilangan1;
    var Bilangan2;
    var Hasilkurang=0;

        Bilangan1 = parseInt(document.getElementById("txtBilangan1").value);
        Bilangan2 = parseInt(document.getElementById("txtBilangan2").value);

        Hasilkurang = Bilangan1 - Bilangan2;
        alert("Jumlah dari " + Bilangan1 + " dan " + Bilangan2 + " adalah: " + Hasilkurang);
}

function Kali(e)
{
    var Bilangan1;
    var Bilangan2;
    var HasilKali=1;

        Bilangan1 = parseInt(document.getElementById("txtBilangan1").value);
        Bilangan2 = parseInt(document.getElementById("txtBilangan2").value);

        HasilKali = Bilangan1 * Bilangan2 * Bilangan3;
        alert("Jumlah dari " + Bilangan1 + " dan " + Bilangan2 + " adalah: " + HasilKali);
}

function Bagi(e)
{
    var Bilangan1;
    var Bilangan2;
    var HasilBagi=1;

        Bilangan1 = parseInt(document.getElementById("txtBilangan1").value);
        Bilangan2 = parseInt(document.getElementById("txtBilangan2").value);

        HasilBagi = Bilangan1 / Bilangan2 / Bilangan3;
        alert("Jumlah dari " + Bilangan1 + " dan " + Bilangan2 + " adalah: " + HasilBagi);
}