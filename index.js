const feetInBlock=264
const hq = 42

// Code your solution in this file!
function distanceFromHqInBlocks(currentBlock){
  if(currentBlock>hq){
    return currentBlock-hq 
  } else{
    return hq- currentBlock 
  }
  return currentBlock - hq 
}