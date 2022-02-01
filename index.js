function distanceFromHqInBlocks(block1) {
    let distance;
    if(block1 > 42) {
        return distance = block1 - 42;
    }
    else if (block1 < 42) {
        return distance = 42 - block1;
    }
}

function distanceFromHqInFeet(block2) {
     return distanceFromHqInBlocks(block2) * 264;
}

function distanceTravelledInFeet(start,destination) {
    let feetTravelled;
    if(start>destination) {
       return feetTravelled = (start - destination) * 264;
    }
    else {
       return feetTravelled = (destination - start) *264;
    }
}

function calculatesFarePrice(start,destination) {
    let price;
    
    if (distanceTravelledInFeet(start,destination) < 400) {
        return 0;
    }
    
    else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start,destination) < 2000) {
        return price = (distanceTravelledInFeet(start,destination) - 400) * .02;
    }
    
    else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500) {
        return 25;
    }

    else {
        return "cannot travel that far";
    }

}
