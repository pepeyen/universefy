export default function getTrackEnergy (accessToken, trackSeed){
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

        fetch(`https://api.spotify.com/v1/audio-features?ids=${trackSeed}`
        , requestOptions)
        .then((response) => {
            resolve(response.json())
        })
        .catch((error) => {
            reject(error)
        });                
   });
}