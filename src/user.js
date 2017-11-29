
class User {

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.zipcode = data.zipcode;
    this.income = data.income;
    this.expenses = [];

    User.all.push(this);
  }

}

User.all = [];
