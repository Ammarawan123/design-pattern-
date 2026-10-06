function createAtc(){
    return{
        requestLanding(planeName){
            console.log(`atc: ${planeName} is allow to land`);
        }
    };
}
function createPlane(name,atc){
    return{
        land(){
            atc.requestLanding(name);
        }
    };
}
const atc = createAtc();
const plane1 = createPlane("Plane 1", atc);
const plane2 = createPlane("Plane 2", atc);
plane1.land();
plane2.land();