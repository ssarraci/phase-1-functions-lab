// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    let resultblocks = 42 - blocks;
    return Math.abs(resultblocks);
}

function distanceFromHqInFeet(blocks) {
    let feet = distanceFromHqInBlocks(blocks);
    return feet * 264;
}

function distanceTravelledInFeet(start, finish) {
    let totalDistance = (finish - start) * 264;
    return Math.abs(totalDistance);
}

function calculatesFarePrice(start, destination) {
    let d = distanceTravelledInFeet(start, destination);
    let farePrice;
        if (d <= 400){
            farePrice = 0;
        }
        else if (d > 400 && d < 2000){
            farePrice = .02 * (d - 400);
        }
        else if (d > 2000 && d < 2500 ){
            farePrice = 25;
        }
        else if (d > 2500){
            farePrice = 'cannot travel that far';
        }
        return farePrice;
}