// 兼容性获取类名
function aa(selector,obj){
                  obj=obj||document; 
                		if (obj.getElementsByClassName){
                			return obj.getElementsByClassName(selector)
                		}else{
                			var newarr=[];
                			var all=obj.getElementsByTagName("*");
                			for (var i = 0; i < all.length; i++) {
                				
                				if(check(all[i].className,selector)){
                					newarr.push(all[i])
                				}
                			
                			};
                			return newarr;
                		}
                	}
                     function check(str1,str2){
                               str1=str1.split(" ")
                               for (var i = 0; i < str1.length; i++) {
                              if (str1[i]==str2) {
                                      return true;
                                                  };
                                                      };
                                     return false;
                                              }

                    // 兼容性获取或者设置元素文本内
                    var text=function(obj,value){
                      if (value!=undefined) {
                             if (obj.textContent!=undefined) {
                               return obj.textContent=value
                             }else{
                        return obj.innerText=value  
                      }
                    }else{
                      if (obj.textContent!=undefined) {
                        return obj.textContent
                      }else{
                        return obj.innerText
                      }
                    }
     }

                    // 兼容性获取元素行内或外部样式
                    var sty=function (obj,attr){
                      if (obj.currentStyle) {
                        return obj.currentStyle[attr]
                      }else{
                        return  getComputedStyle(obj,null)[attr]
                      }
                    }
           
              // 兼容性以类名、Id、标签名获取元素

              function  $(s,obj) {
                        if (typeof s=="string") {
                          obj=obj||document;
                          if (s.charAt(0)==".") {
                            return aa(s.slice(1),obj)
                          }else if (s.charAt(0)=="#") {
                            return document.getElementById(s.slice(1))
                          }else if(/^[a-z]+[a-z1-6]?$/g.test(s)){
                                  return obj.getElementsByTagName(s)
                          }
                        }else if(typeof s=="function"){
                            window.onload=function(){
                              s()
                            }
                        }
              }
               // 获取所有的子元素节点
               
               function getChild(obj){
                var arr=[];
                    var childs=obj.childNodes;
                    for (var i = 0; i < childs.length; i++) {
                     if (childs[i].nodeType==1){
                       arr.push(childs[i])
                     }
                    }
                    return arr;
               }
               // 获取第一个元素节点
               function getFirst(obj){
                     var first=getChild(obj)[0];
                      return first;
               }
               // 获取最后一个元素节点
               function getLast(obj){
                var last=getChild(obj);
                last=last[last.length-1];
                return last;
               }
               // 获取第一个兄弟元素节点
               function getNext(obj){
                       var next=obj.nextSibling
                       if (next==null) {
                        return
                       };
                       while(next.nodeType!=1){
                           next=next.nextSibling
                           if (next==null) {
                           };
                           return next
                       }
               }
                          