// Code your solution in this file!

const distanceFromHqInBlocks = (block) => {
    return (block >= 42) ? block - 42 : 42 - block ;
}
const distanceFromHqInFeet = (distance)=>{
    return distanceFromHqInBlocks(distance) * 264;
    }
const  distanceTravelledInFeet = (start , destination) =>{
    return start > destination ? (start - destination) * 264 : (destination - start) * 264;


}
const calculatesFarePrice = (start, destination) =>{
    let distance = distanceTravelledInFeet(start,destination)
    if (distance <= 400 ){
        return 0;
    
    }
    else if (distance > 400 && distance <= 2000){
        return ((distance - 400) * 0.02);
    }
    else if ((distance > 2000 && distance <= 2500)){
        return 25;
    }
    else { return 'cannot travel that far'};
    
}