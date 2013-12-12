function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.courseList = []
}

Student.prototype.name = function() {
  return this.firstName + " " + this.lastName;
}

Student.prototype.courses = function() {
  return this.courseList;
}

Array.prototype.excludes = function(course) {
  for(var i = 0; i < this.length; i++) {
    if(this[i].name == course.name) {
      return false;
    };
  };
  return true;
}


Student.prototype.enroll = function(course) {
  if (this.courseList.excludes(course)){
      this.courseList.push(course);
      course.addStudent(this);
  }
}

Student.prototype.courseLoad = function() {
  var load = {};
  for(var i = 0; i < this.courses.length; i++){
    if(load[this.courseList[i].department] == undefined){
      load[this.courseList[i].department] = this.courseList[i].credits;
    } else {
      load[this.courseList[i].department] += this.courseList[i].credits;
    }
  }
  return load;
}


function Course(name, department, credits){
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.enrolledStudents = []
}

Course.prototype.students = function() {
  return this.enrolledStudents
}

Course.prototype.addStudent = function(student) {
  this.enrolledStudents.push(student);
}

s1 = new Student("Mary", "Sheep");
s2 = new Student("Bob", "Ben");

c1 = new Course("math1", "math", 2);
c2 = new Course("english", "eng", 5);

s1.enroll(c1)
s1.enroll(c1)
s1.enroll(c2)
s2.enroll(c1)

console.log(s1.courseList);