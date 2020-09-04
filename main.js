let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
let even = false;
let index = [5, 5, 5, 5, 5, 5, 5];
let i = 0;
let result;
let ID;
let element, c, r;

function check(vv, rr, cc) {
  console.log(vv, rr, cc);
  //Down
  let z = 0;
  for (let r = rr; r <= 5; r++) {
    console.log("D-EXEC");
    if (arr[r][cc] == vv) {
      z++;
    } else {
      break;
    }
    if (z == 4) {
      return vv;
    }
  }

  z = 0;
  //RIGHT
  for (let c = cc; c <= 6; c++) {
    console.log("R-EXEC");
    if (arr[rr][c] == vv) {
      z++;
    } else {
      break;
    }
    if (z == 4) {
      return vv;
    }
  }
  //LEFT
  for (let c = cc - 1; c >= 0; c--) {
    console.log("R-EXEC");
    if (arr[rr][c] == vv) {
      z++;
    } else {
      break;
    }
    if (z == 4) {
      return vv;
    }
  }

  z = 0;
  //BOTTOM LEFT
  c = cc;
  r = rr;
  while (c >= 0 && r <= 5) {
    console.log("BL-EXEC");
    if (arr[r][c] == vv) {
      z++;
      r++;
      c--;
    } else {
      break;
    }
    if (z == 4) {
      return vv;
    }
  }
  //TOP RIGHT
  c = cc + 1;
  r = rr - 1;
  while (c <= 6 && r >= 0) {
    console.log("TR-EXEC");
    if (arr[r][c] == vv) {
      z++;
      r--;
      c++;
    } else {
      break;
    }
    if (z == 4) {
      return vv;
    }
  }

  z = 0;
  //BOTTOM RIGHT
  c = cc;
  r = rr;
  while (c <= 6 && r <= 5) {
    console.log("BR-EXEC");
    if (arr[r][c] == vv) {
      z++;
      r++;
      c++;
    } else {
      break;
    }
    if (z == 4) {
      return vv;
    }
  }
  //TOP LEFT
  c = cc - 1;
  r = rr - 1;
  while (c >= 0 && r >= 0) {
    console.log("TL-EXEC");
    if (arr[r][c] == vv) {
      z++;
      r--;
      c--;
    } else {
      break;
    }
    if (z == 4) {
      return vv;
    }
  }

  // FINALLY
  return 0;
}

function clicked(ind) {
  ID = "";
  col = parseInt(ind[1]);

  if (index[col] < 0) {
    return;
  }

  if (even) {
    arr[index[col]][col] = 1;
    ID = ID + index[col] + col;
    document.getElementById("_INDICATOR").style.backgroundColor = "#E3040A";
    document.getElementById(ID).innerHTML = `<img src="./images/blue.png" />`; //blue
    even = false;
    result = check(1, index[col], col);
  } else {
    arr[index[col]][col] = -1;
    ID = ID + index[col] + col;
    document.getElementById("_INDICATOR").style.backgroundColor = "#0E59CB";
    document.getElementById(ID).innerHTML = `<img src="./images/red.png" />`; //red
    even = true;
    result = check(-1, index[col], col);
  }

  if (result == 1) {
    document.getElementById("_WIN").innerHTML = "Blue Wins";
    document.getElementById("_WIN").style.color = "#0E59CB";
    console.log("BLUE WINS");
  } else if (result == -1) {
    console.log("RED WINS");
    document.getElementById("_WIN").innerHTML = "Red Wins";
    document.getElementById("_WIN").style.color = "#E3040A";
  }
  index[col] -= 1;
}
