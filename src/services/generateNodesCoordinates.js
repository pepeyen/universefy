const  generateNodeOrbit = require('./generateNodeOrbit');

export default function generateNodeCoordinates(nodeList){
    const maxRadius = 200,
        minRadius = 50, 
        radian = 6.28;
        
    let nodeCoordinates = [nodeList.length];
    
    nodeList.forEach((element,i) => {
        nodeCoordinates[i] = {
            /**
             * Simple formula as 
             * (50 * generateNodeOrbit(element.tempo)) being the orbit radius
             * and Math.cos() || Math.sin() being the orbit radian
             */
            x: maxRadius + (minRadius * generateNodeOrbit(element.tempo)) * Math.cos((element.energy * radian)),
            y: (minRadius * generateNodeOrbit(element.tempo)) * Math.sin((element.energy * radian))
        }
    });

    return nodeCoordinates;
}