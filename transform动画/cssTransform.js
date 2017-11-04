function cssTransform(element,attr,val){
	//两个参数获取//三个参数设置
	/*element.transform = {
		rotate : 40,
		scale : 100,
		skew : ,
		translate : 
	}
		console.log(element.transform.rotate)
	*/
	if(!element.transform){
		element.transform = {};
	}
	if(typeof val == "undefined"){//获取
		var val = element.transform[attr];
		if(!element.transform[attr]){//没有通过此方法设置果transform,就返回默认值
			switch(attr){
				case "scale":
				case "scaleX":
				case "scaleY":
				case "scaleZ":
					element.transform[attr] = 100;
					break;
				default:
					element.transform[attr] = 0;	
			}
		}
		return element.transform[attr];
		
	}else{//设置
		element.transform[attr] = val;
		//attr scale(val)
		//element.style.WebkitTransform = element.style.transform = attr + "("+ val +")";
		var transformVal = "";
		for(s  in element.transform){
			//console.log(s);
			switch(s){
				case "scale":
				case "scaleX":
				case "scaleY":
				case "scaleZ":
					transformVal += " " + s + "("+ (val/100) +")";
					break;
				case "rotate":
				case "rotateX":
				case "rotateY":
				case "rotateZ":
				case "skewX":
				case "skewY":
					transformVal += " " + s + "("+ val +"deg)";
					break;
				default:
					transformVal += " " + s + "("+ val +"px)";
				
			}
		}
		element.style.WebkitTransform = element.style.transform = transformVal;
	}
}