// Code your solution in this file!

const distanceFromHqInBlocks = (block) => {
    return (block >= 42) ? block - 42 : 42 - block ;
}





const distanceFromHqInFeet = (distance)=>{
    return distanceFromHqInBlocks(distance) * 264;
    }
