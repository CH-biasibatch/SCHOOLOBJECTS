var id = 1;

function Student(firstName,lastName,grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.id = id++;
}

function Teacher(firstName,lastName,subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id = id++;
}

function Section(name,max) {
    this.name = name;
    this.count = 0
    this.students = [];
    this.teacher = 0;
    this.max = max;
    this.id = id++;

    this.addTeacher = function(teacher) {
        this.teacher.push(teacher);
    }

    this.addStudent = function(student) {
        this.students.push(student);
    }
}
