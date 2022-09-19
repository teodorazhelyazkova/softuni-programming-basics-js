function housePainting(input) {
    const greenPaintOneLitre = 3.4; // for walls
    const redPaintOneLitre = 4.3; // for roof
    
    const x = Number(input[0]); 
    const y = Number(input[1]); 
    const h = Number(input[2]); 

    const frontWall = x * x - (1.2 * 2);
    const backWall = x * x;
    const sideWalls = 2 * (x * y) - 2 * (1.5 * 1.5);    
    const totalAreaWalls = frontWall + backWall + sideWalls;
    const totalAreaRoof = 2 * (x * y) + (x * h);

    const greenPaintLiters = totalAreaWalls / greenPaintOneLitre;
    const redPaintLiters = totalAreaRoof / redPaintOneLitre;

    console.log(greenPaintLiters.toFixed(2));
    console.log(redPaintLiters.toFixed(2));
}

housePainting([6, 10, 5.2]);