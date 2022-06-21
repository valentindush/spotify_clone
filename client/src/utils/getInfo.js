 
export const getTopTracks = (token)=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    let items;
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

}