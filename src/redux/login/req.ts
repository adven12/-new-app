
// export default function req(url:string, method:string,body?:object){
//     return (fetch(`http://localhost:3001/users`,{method: method,
//   headers:{'Contant-Type':'application/json', 'Accept': 'application/json'},
// body: JSON.stringify(body)}).then(response => response.json()));
//   }
export const environment = {
  apiUrl : 'http://localhost:3002',
  };

export async function callApi(method: string, path: string, data ?: object, url: string = environment.apiUrl) {
  const response = await fetch(`${url}/${path}`, {
    method : method,
    headers:{ 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body: !(method === "GET") ? JSON.stringify(data) : null
  }).then(d => d.json()) 
   return await response
}
