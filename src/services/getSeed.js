export default function getSeed ({accessToken, searchType, searchText}){
    return new Promise((resolve, reject) =>{   
        var myHeaders = new Headers();
        
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${accessToken}`);
            
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        switch (searchType) {
            case "Artist":
                fetch(`https://api.spotify.com/v1/search?query=${searchText}&type=artist&offset=0&limit=1`
                , requestOptions)
                .then((response) => {
                    resolve(response.json())
                })
                .catch((error) => {
                    reject(error)
                }); 
                break;
            case "Track":
                fetch(`https://api.spotify.com/v1/search?query=${searchText}&type=track&offset=0&limit=1`
                , requestOptions)
                .then((response) => {
                    resolve(response.json())
                })
                .catch((error) => {
                    reject(error)
                });
                break;
            default:
                break;
        }               
   });
}