
    window.onload=function(){
		var btns=document.getElementsByTagName('button');
		for(var i=0;i<btns.length;i++){
			btns[i].onclick=function(){
				var str=this.value; 
				switch(str){
					case"=":
					calculate();
					break;
					case"C":
					document.getElementById('reslut').innerHTML="0";
					break;
					default:
					var reslut=document.getElementById('reslut');
				if(reslut.innerHTML==0){
					reslut.innerHTML="";
				}
                   reslut.innerHTML+=str;
                   break;
				}
				
					
			}
		}
		function calculate(){
			var str1=document.getElementById('reslut').innerHTML;
			var reslut=eval(str1);
			document.getElementById('reslut').innerHTML=reslut;
		}
	}