class Customer {
    constructor(id, customerNumber) {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

//let customer = new Customer();
//console.log(customer); //Customer {}

let customer = new Customer(1, "12345");
//prototyping (instance)
customer.name = "isim";
console.log(customer.name); //isim
//prototyping (class)
Customer.birsey = "Bir şey";
console.log(Customer.birsey); //Bir şey

console.log(customer.customerNumber); //12345


class IndividualCustomer extends Customer {
    customer(firstName, id, customerNumber) {
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer {
    customer(companyName, id, customerNumber) {
        super(id, customerNumber)
        this.companyName = companyName
    }
}