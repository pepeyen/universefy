export default function getRecommendations({accessToken, searchType, seed, trackEnergy}) {
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
            case "track":
                fetch(`https://api.spotify.com/v1/recommendations?seed_tracks=${seed}&min_energy=${trackEnergy}`
                , requestOptions)
                .then((response) => {
                    resolve(response.json())
                })
                .catch((error) => {
                    reject(error)
                });
                break;
            case "artist":
                fetch(`https://api.spotify.com/v1/recommendations?seed_artists=${seed}`
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