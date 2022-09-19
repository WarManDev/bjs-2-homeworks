function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

new Student('Вася', 'мужской', 20);
new Student('Ваня', 'мужской', 22);
new Student('Маша', 'женский', 18);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...marks) {
  this.marks = [];
  for(let mark of marks) {
    this.marks.push(mark);
  }
  // for(let i = 0; i < marks.length; i++) {
  //   this.marks.push(marks[i]);
  // }
}

Student.prototype.getAverage = function() {
  let sum = 0;
  let avgMark;
  for(let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  return avgMark = sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}