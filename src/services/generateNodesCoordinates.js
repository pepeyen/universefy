import  generateNodeOrbit from './generateNodeOrbit.js';

export default function generateNodeCoordinates(nodes){
    const maxRadius = 80,
          minRadius = 20,
          radianCoef =  6.28;
    let nodesCoordinates = [nodes.length],
        currentMaxRadius = 0,
        radian = 0;
    
    nodes.forEach((element,i) => {
        currentMaxRadius = minRadius * generateNodeOrbit(element.tempo);
        radian = element.energy * radianCoef;

        nodesCoordinates[i] = {
            /**
             * Simple formula as 
             * (50 * generateNodeOrbit(element.tempo)) being the orbit radius
             * and Math.cos() || Math.sin() being the orbit radian
             */
            x: maxRadius + (currentMaxRadius * Math.cos(radian)),
            y: maxRadius + (currentMaxRadius * Math.sin(radian))
        }
    });

    return nodesCoordinates;
}