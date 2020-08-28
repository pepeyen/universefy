export default function generateNodeQuadrant(energy){
    if(energy >= 0 && energy <= 0.24){
        return '1';
    } else if(energy >= 0.25 && energy <= 0.49){
            return '2';
        } else if(energy >= 0.50 && energy <= 0.74){
                return '3';
            } else if(energy >= 0.75 && energy <= 1){
                    return '4';
                } else return 0;
}