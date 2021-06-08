var menuButton=document.getElementsByClassName('icon-menu')[0];
var menuSearch=document.getElementsByClassName('icon-magnifier')[0];
menuButton.addEventListener('click',function(e){scrollMenuSearch(e,getScrollBarWidth);});
menuSearch.addEventListener('click',function(e){scrollMenuSearch(e,getScrollBarWidth);});

function scrollMenuSearch(e,bloc){
    
    if(e.target==menuSearch){
    var subMen=document.getElementsByClassName('searchBarWraper')[0];
    var menuIcon=document.getElementsByClassName('iconSwaper2')[0];
    var menyRightPad=document.getElementsByClassName('menuWraper')[0];
     var blurElem=document.getElementsByClassName('blurUnderMenu')[0];
        
    }else{
         var subMen=document.getElementsByClassName('subMenu')[0];
        var menuIcon=document.getElementsByClassName('iconSwaper')[0];
        var menyRightPad=document.getElementsByClassName('menuWraper')[0];
        var blurElem=document.getElementsByClassName('blurUnderMenu')[0];
        
        
    }
    var widthBar=bloc();
    
    var heighMenu=menyRightPad.offsetHeight + subMen.offsetHeight;
    
    var actuHeigh=subMen.scrollHeight;
    if(subMen.style.maxHeight){
       
         if(e.target==menuSearch){
         menuIcon.classList.remove('icon-close');
         menuIcon.classList.add('icon-magnifier');
         }
        else{
         menuIcon.classList.remove('icon-close');
         menuIcon.classList.add('icon-menu');
        }
        
         subMen.style.maxHeight=null;
         document.body.style.position = '';
         document.body.style.top = '';
         menyRightPad.style.paddingRight='0px';
       
         blurElem.style.backgroundColor='rgba(255, 255, 255, 0)';
        setTimeout(()=> blurElem.style.height='0px',500 );
         

       }
    else{
        
            if(e.target==menuSearch){
          menuIcon.classList.remove('icon-magnifier');
          menuIcon.classList.add('icon-close');
                
            }
        else{
              menuIcon.classList.remove('icon-menu');
          menuIcon.classList.add('icon-close');
            
        }
          subMen.style.maxHeight=`${actuHeigh}px`; 
         document.body.style.position = 'fixed';
         document.body.style.top = `${window.scrollY}px`;
         menyRightPad.style.paddingRight=`${widthBar}px`;
        
        blurElem.style.top=heighMenu;
            blurElem.style.height='900000px';
        blurElem.style.backgroundColor='rgba(255, 255, 255, 0.7)';
        
       
       
        
    }
    
   
}

function getScrollBarWidth(){
    var scrollDiv = document.createElement("div");
scrollDiv.className = "scrollbar-measure";
document.body.appendChild(scrollDiv);
var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
document.body.removeChild(scrollDiv);
    return scrollbarWidth;
}
