export default function generateSeedList(trackList){
    let seedList = [trackList.length];

    trackList.forEach((element,i) => {
        seedList[i] = element.id;
    });

    let seedListString = seedList.join(",");
    seedListString = encodeURIComponent(seedListString);

    return seedListString;
}