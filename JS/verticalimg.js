window.onload=function(){
		var obox=document.getElementById("box");
		var oul=obox.getElementsByTagName("ul")[0];
		var aimg=oul.getElementsByTagName("img");
		
		var obtn=document.getElementById("btn");
		var abtn=obtn.getElementsByTagName("a");
		//alert(cssStyle(aimg[0],'height'));
		var timer=null;
		var count=1;
		var m=2;
		var flag=1;
		//给每个小图片添加onclick事件(并添加索引)
		for(var i=0;i<abtn.length;i++)
		{
			abtn[i].index=i;
			abtn[i].onclick=function()
			{
				for(var j=0;j<abtn.length;j++)
				{
					abtn[j].className='';
				}
				//设置当前小图片的样式
				abtn[this.index].className="active";
				//赋值
				if(flag==-1)
				{
					m=this.index;
				}
				count=this.index;
				//移动
				sport(oul,'top',-(this.index)*cssStyle(aimg[0],'height'));
			};
		}
		//设置oul高度
		cssStyle(oul,'height',cssStyle(aimg[0],'height')*aimg.length);
		//设置定时器
		timer=setInterval(function(){
			//向下移
			if(flag==1 && count<aimg.length)
			{
				for(var i=0;i<abtn.length;i++)
				{
					abtn[i].className='';
				}
				abtn[count].className="active";
				sport(oul,'top',-(count++)*cssStyle(aimg[0],'height'));
				//如果移动到最后一张照片时，设置flag为-1，确保下次进入定时器是向上移
				if(count==4){flag=-1;}
			}
			else
			{
				//向上移
				if(flag==-1 && m>=0)
				{
			       for(var i=0;i<abtn.length;i++)
					{
						abtn[i].className='';
					}
				  
				  abtn[m].className="active";
				  sport(oul,'top',-(m--)*cssStyle(aimg[0],'height'));
				  //如果移动到第一张照片时，设置flag为1，确保下次进入定时器是向下移
				  if(m==-1) {count=1;flag=1;m=2}  
				}	
				
			}
		
		},3000);
	};