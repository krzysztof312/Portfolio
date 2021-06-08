function dod(dd){
	var elemm=document.getElementsByTagName('h1')[0];
	var nowydok=document.createElement('p');
	var textt=document.createTextNode('banannn');
	nowydok.appendChild(textt);
	elemm.appendChild(nowydok);
	
}
function wys(dd){
document.write('ssss');


	
	
}
function ddd(){
	
	return "ffff";
}

var elem=document.getElementsByTagName('ul')[0];
elem.addEventListener('click',dod,false);

elem.addEventListener('DOMNodeInserted',wys,false);

window.addEventListener('beforeunload',ddd);