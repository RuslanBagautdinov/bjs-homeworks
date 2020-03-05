function getSoulutions(a, b, c){
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0){
      solution = {
        D: d,
        roots: []
      };
    } else if (d === 0){
      let x1 = -b / (2 * a);
      solution = {
      	D: d,
        roots: [x1]
      }
    } else{
      x1 = (-b + Math.sqrt(d)) / (2 * a);
      let x2 = (-b - Math.sqrt(d)) / (2 * a);
      solution = {
      	D: d,
        roots: [x1, x2]
      }
    }
    return solution;
}


function ShowSolutionMessage(a, b, c){
	let result = getSoulutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0){
      console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0){
      console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else{
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

ShowSolutionMessage(1, 2, 1);