import axios from 'axios';

export default function ajax(url,data={},type="GET"){
 
  return new Promise((resolve,reject)=>{
	    let prome;
		if(type == 'GET'){
			var datastr = '';
			for(var k in data){
				datastr += k +'='data[k]+'&'
			}
			if(datastr !== ''){
				url = '?'+datastr.substring(0,datastr.lastIndexOf('&'));
			}
			prome = axios.get(url)
		}else{
			prome = axios.post(url,data)
		}
		prome.then((respones)=>{
		   resolve(respones.data)
		}).catch((err)=>{
			reject(err)
		})
  })
	
}