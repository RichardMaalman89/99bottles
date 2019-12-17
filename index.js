let printBottles = bottles => {
    let bottleString = bottles => {
        return bottles > 1 ? `${bottles} bottles` : `${bottles} bottle`;
    }

    let lyricLineOne = `${bottleString(bottles)} of beer on the wall, ${bottleString(bottles)} of beer. Take one down, pass it around, `;

    bottles--;
    
    lyricLineOne += bottles !== 0 ? `${bottleString(bottles)} of beer on the wall...` : `No more bottles of beer on the wall`;

    console.log(lyricLineOne);

    if (bottles !== 0) {
        printBottles(bottles);
    }
}

printBottles(100);