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

function distanceFromHqInFeet (currentBlock){
  let numberOfBlocks
  if (currentBlock>hq){
    numberOfBlocks= currentBlock-hq
  } else{
    numberOfBlocks= hq-currentBlock
  }
  return numberOfBlocks * feetInBlock
}

function distanceTravelledInFeet(block1, block2){
 const numberOfBlocks= Math.abs(block1-block2)
 return numberOfBlocks * feetInBlock 
 
}

function calculatesFarePrice(start, destination){
  //how far//
  const numberOfBlocks = Math.abs(startingBlock- destinationBlock)
  const numberOfFeet= numberOfBlocks* numberInBlock
  
  if (numberOfFeet <=400){
    return 0
  }
  if(number)
  
}