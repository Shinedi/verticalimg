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
		//��ÿ��СͼƬ���onclick�¼�(���������)
		for(var i=0;i<abtn.length;i++)
		{
			abtn[i].index=i;
			abtn[i].onclick=function()
			{
				for(var j=0;j<abtn.length;j++)
				{
					abtn[j].className='';
				}
				//���õ�ǰСͼƬ����ʽ
				abtn[this.index].className="active";
				//��ֵ
				if(flag==-1)
				{
					m=this.index;
				}
				count=this.index;
				//�ƶ�
				sport(oul,'top',-(this.index)*cssStyle(aimg[0],'height'));
			};
		}
		//����oul�߶�
		cssStyle(oul,'height',cssStyle(aimg[0],'height')*aimg.length);
		//���ö�ʱ��
		timer=setInterval(function(){
			//������
			if(flag==1 && count<aimg.length)
			{
				for(var i=0;i<abtn.length;i++)
				{
					abtn[i].className='';
				}
				abtn[count].className="active";
				sport(oul,'top',-(count++)*cssStyle(aimg[0],'height'));
				//����ƶ������һ����Ƭʱ������flagΪ-1��ȷ���´ν��붨ʱ����������
				if(count==4){flag=-1;}
			}
			else
			{
				//������
				if(flag==-1 && m>=0)
				{
			       for(var i=0;i<abtn.length;i++)
					{
						abtn[i].className='';
					}
				  
				  abtn[m].className="active";
				  sport(oul,'top',-(m--)*cssStyle(aimg[0],'height'));
				  //����ƶ�����һ����Ƭʱ������flagΪ1��ȷ���´ν��붨ʱ����������
				  if(m==-1) {count=1;flag=1;m=2}  
				}	
				
			}
		
		},3000);
	};