/**
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
 */
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
//Accepted
let checkStraightLine = (coordinates) => {
  //straight line is when all of its coordinates follows
  // y=mx+c
  if (coordinates.length < 2) {
    return false;
  }

  else if (coordinates.length === 2)
    return true;
  else if (coordinates.length > 2) {
    let coords1 = coordinates[0];
    let coords2 = coordinates[1];
    let m = 0, c = 0;
    c = ((coords2[1] * coords1[0]) - (coords1[1] * coords2[0])) / ((coords1[0] - coords2[0]));
    if (coords1[0] === 0)
      m = (coords2[1] - c) / coords2[0];
    //Below are the boundary conditions to calculate m . x should be a non zero number to calculate m.
    else if (coords2[0] === 0)
      m = (coords1[1] - c) / coords1[0];
    else
      m = (coords2[1] - c) / coords2[0];
    for (let i = 0; i < coordinates.length; i++) {
      if (coordinates[i][1] - (coordinates[i][0] * m) !== c)
        return false;
    }
    return true;
  }

};

console.log(checkStraightLine([[-10, 84], [0, -6], [7, -69], [-7, 57], [3, -33], [-8, 66], [-12, 102], [10, -96]]));