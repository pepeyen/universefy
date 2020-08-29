export default function generateNodeOrbit(tempo){
    if(tempo >= 0 && tempo <= 49.999){
        return 4;
    } else if(tempo >= 50.0 && tempo <= 99.999){
            return 3;
        } else if(tempo >= 100.0 && tempo <= 149.999){
                return 2;
            } else if(tempo >= 150){
                    return 1;
                }else return 0;
}