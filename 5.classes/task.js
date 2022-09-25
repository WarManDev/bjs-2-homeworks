// Задача №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    checkState() {
        if(this._state < 0) {
            this._state = 0;
        } else if (this._state > 100) {
            this._state = 100;
        }
    }

    fix() {
        this._state *= 1.5;
        this.checkState();
    }

    set state(state) {
        this._state = state
        this.checkState();
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].hasOwnProperty(type) === true && this.books[i][type] === value) {
                return this.books[i];
            } else {
                return null;
            }
        }
    }

    giveBookByName(bookName) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].name === bookName) {
                delete this.books[i];
                return this.books[i];
            } else {
                return null;
            }
        }
    }
}

//Тестовый сценарий
const library = new Library("Моя библиотека");
let myBook = new DetectiveBook(
    "Федор Достоевский",
    "Преступление и наказание",
    2005,
    300
);

library.addBook(myBook);
console.log(library.findBookBy('author', 'Федор Достоевский').name);
console.log(library.giveBookByName('Преступление и наказание'));
myBook.state = 25;
myBook.fix();
console.log(myBook.state);
library.addBook(myBook)


// Задача №2

class Student {
    constructor(name){
        this.name = name;
        this.marks = [];
    }

    addMark(mark, school) {
        let i = 0;
        if(mark > 0 && mark < 6) {
            // debugger;
            do {
                if (this.marks.length === 0) {
                    this.marks.push({schoolName: school, schoolMarks: [mark]});
                    break;
                } else if (this.marks[i].schoolName == school) {
                    this.marks[i].schoolMarks.push(mark);
                    break;
                } else if (this.marks.find(elem => elem.schoolName === school)) {
                    i++;
                } else {
                    this.marks.push({schoolName: school, schoolMarks: [mark]});
                    break;
                }
            } while (i < this.marks.length);
        } else {
            return "Ошибка, оценка должна быть числом от 1 до 5";
        }
    }

    getAverageBySubject(school) {
        let avgMark = 0;
        let sum = 0;
        let desiredSubj = this.marks.findIndex(elem => elem.schoolName === school);

        if(this.marks.length > 0 && desiredSubj >= 0) {
            for (let i = 0; i < this.marks[desiredSubj].schoolMarks.length; i++) {
                sum += this.marks[desiredSubj].schoolMarks[i];
            }
        } else {
            return 'Несуществующий предмет';
        }
        avgMark = sum / this.marks[desiredSubj].schoolMarks.length;
        return `Средний балл по предмету ${school} ${avgMark.toFixed(1)}`;
    }

    getAverage() {
        let sumAll = 0;
        let count = 0;
        for (let i = 0; i < this.marks.length; i++) {
            for (let j = 0; j < this.marks[i].schoolMarks.length; j++) {
                sumAll += this.marks[i].schoolMarks[j];
                count++;
            }
        }
        let avgAllMark = sumAll / count;
        return `Средний балл по всем предметам ${avgAllMark.toFixed(1)}`;
    }

    exclude(report) {
        delete this.name;
        delete this.marks;
        console.log(report);
    }
}

// let student = new Student("Иван Петров");
// student.addMark(5, "algebra");
// student.addMark(5, "algebra");
// student.addMark(5, "geometry");
// student.addMark(4, "geometry");
// console.log(student.addMark(6, "geometry")); 
// console.log(student.getAverageBySubject("geometry"));
// console.log(student.getAverageBySubject("biology"));
// console.log(student.getAverage());
// student.exclude("Исключен за попытку подделать оценки");
