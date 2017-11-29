class Expense {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.cost = data.cost;
    this.date = data.date;
    this.user_id = data.user_id;

    Expense.all.push(this);
  }
}

Exepense.all = [];
