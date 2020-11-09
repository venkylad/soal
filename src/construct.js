function SchoolDetails(name, learners, address) {
  this.name = name;
  this.learners = learners;
  this.address = address;
}

let schoolOne = new SchoolDetails(
  "soal",
  ["venkatesh", "shiva", "john"],
  "hyderabad"
);

console.log(schoolOne);
