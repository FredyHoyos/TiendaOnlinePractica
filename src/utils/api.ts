const makePost = (
    url:string,
    body: string,
    method: 'POST' | 'PUT' | 'GET' = 'POST',
    options:{
        headers?: Record<string, string>
    }
)  =>{
    const headers = options.headers || {};
    return fetch (url, {
        body,
        headers,
        method,
    }).then((res) =>{
        if(res.statusText === 'No Content'){
            return res;
        }
        return res.json();
    })
    .catch((error) =>{
        console.error('Error in API request:', error)
        throw error;
    })
};

const makeJSONPost =(
    url: string,
    data: any,
    options: { headers?: Record<string, string>},
    method: 'POST' | 'PUT' | 'GET' = 'POST',
) => {
    const body = JSON.stringify(data);
    const headers = options.headers || {};
    headers['Content-Type'] = 'application/json';
    return makePost(url, body, method,{headers});
}


export const getUsers = async () => {
    try{
        const res = await fetch('/api/users',{
            method: 'GET',
        });
        if(!res.ok){
            throw new Error (`Error fetching users: ${res.statusText}`);
        }
        return res.json;
    } catch (error){
        console.error('Error in getUsers:', error);
        throw error;
    }
}
