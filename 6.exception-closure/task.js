function parseCount(count) {
    let parseCount = Number.parseInt(count, 10);
    if (String(parseCount) === 'NaN') {
        throw new Error("Невалидное значение");
    }
    return parseCount;
}

function validateCount(count) {
  try {
    return parseCount(count);
  } catch (error) {
    return error;
  }
}

// Задача 2

class Triangle {
  constructor(side_1, side_2, side_3) {
    this.side_1 = side_1;
    this.side_2 = side_2;
    this.side_3 = side_3;
    if(this.side_1 + this.side_2 < this.side_3 || this.side_1 + this.side_3 < this.side_2 || this.side_2 + this.side_3 < this.side_1) {
      throw Error('Треугольник с такими сторонами не существует')
    }
  }

  getPerimeter() {
    return Number(this.side_1 + this.side_2 + this.side_3);
  }

  getArea() {
    let p = 1/2 * this.getPerimeter();
    return Number(Math.sqrt(p * (p - this.side_1) * (p - this.side_2) * (p - this.side_3)).toFixed(3));
  }
}

function getTriangle(side_1, side_2, side_3) {
  try {
    return new Triangle(side_1, side_2, side_3);
  } catch(error) {
    return {
        getPerimeter: () => "Ошибка! Треугольник не существует",
        getArea: () => "Ошибка! Треугольник не существует",
    }
  }
}

