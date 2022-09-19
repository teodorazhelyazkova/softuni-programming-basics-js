function circleAreaAndPerimeter(input) {
    const r = Number(input[0]);
    const calculatedArea = Math.PI * Math.pow(r,2);
    const calculatedPerimeter = 2 * Math.PI * r;

    console.log(`${calculatedArea.toFixed(2)}`);
    console.log(`${calculatedPerimeter.toFixed(2)}`);
    
}

circleAreaAndPerimeter([3]);