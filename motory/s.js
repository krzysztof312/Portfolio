var okno=document.getElementsByClassName('oknoMenu')[0];
var strz=document.getElementsByClassName('shoMe')[0];
var menu="<form class='sell' action='#' method='post'> <select class='sel'><option>Poland</option><option>England</option><option>London</option><option>Uganda</option><option>Spanish</option></select></form>";
var wraper=document.getElementsByClassName('languageWrapper')[1];


function pokarzmenu(){
	console.log('sss');
	wraper.lastChild.previousSibling.innerHTML=menu;

}
function delet(e){
	var formm=document.getElementsByClassName('sel')[0];
    
	if(e.target !=strz && e.target != formm){
		
wraper.lastChild.previousSibling.innerHTML='';	
		
	}
}

window.addEventListener('click',delet);

strz.addEventListener('click',pokarzmenu);

