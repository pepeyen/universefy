export default function getRecommendations({accessToken, searchType, seed, trackPopularity}) {
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
            case "Track":
                if(trackPopularity < 20){
                    trackPopularity = 20;
                }
                fetch(`https://api.spotify.com/v1/recommendations?seed_tracks=${seed}&limit=${trackPopularity}`
                , requestOptions)
                .then((response) => {
                    resolve(response.json())
                })
                .catch((error) => {
                    reject(error)
                });
                break;
            case "Artist":
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