var mobil=[
			{merk:'honda',seri:'jazz',tahun:2013,harga:198000000},
			{merk:'toyota',seri:'Yaris',tahun:2015,harga:12300000},
			{merk:'honda',seri:'mobiloe',tahun:2014,harga:143000000}
		];
var buah=['apel','mangga','jeruk','semangka','kudu','anggur','pepaya'];

var pajak=[{tahun:2013,persen:9},{tahun:2014,persen:10},{tahun:2015,persen:15}];

var daftar;
var hargapajak=[];
function cari_harga(nama,harga){
	var persen=harga -( harga * 35 / 100);
	console.log('sedangkan harga second mobil '+nama+' adalah '+ persen);
}
var content='';
function harga_lama(merk,seri,tahun,harga){
	content +=merk+' '+seri+' tahun '+ tahun+' di jual dengan harga ' + harga +'\n';
}

// for(x=0;x<mobil.length;x++){
// 	daftar=mobil[x].merk+' '+mobil[x].seri+' tahun '+ mobil[x].tahun+' di jual dengan harga ' + mobil[x].harga;
// 	harga_lama(mobil[x].merk,mobil[x].seri,mobil[x].tahun,mobil[x].harga);
// }
for(i=0;i<mobil.length;i++){
	cari_harga(mobil[i].merk,mobil[i].harga);
}
// console.log(content)
// var pricelist_mobil = [{mobil:'honda dangdut',tahun:1999, harga:9999, harga_2nd:8888, pajak:2222}]

var pricelist_mobil=[];
var contentku='';
var harga2nd=0;
function harga_pajak(data_mobil){
	var pers,hargapajak;
	for(a=0;a<pajak.length;a++){
		if(pajak[a].tahun == data_mobil.tahun){
			 pers = data_mobil.harga + pajak[a].persen * data_mobil.harga / 100 - (data_mobil.harga * 35/100);
		}
	}
	harga2nd=data_mobil.harga - ((data_mobil.harga * 35) /100);
	// contentku +='harga pajak mobil '+ data_mobil.merk +' adalah '+ pers+'\n';
	pricelist_mobil.push({mobil:data_mobil.merk+' '+ data_mobil.seri, harga:data_mobil.harga , harga_2nd : harga2nd , harga_pajak : pers });
}
for(k=0;k<mobil.length;k++){
	harga_pajak(mobil[k]);
}
console.log(pricelist_mobil);