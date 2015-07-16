// Fill in the object constructor with the methods specified in the tests.
var Person = function(firstAndLast) {
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];
    fullName = firstName + ' ' + lastName;
    
    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function() {
        return lastName;
    };
    this.getFullName = function() {
        return fullName;
    };
    this.setFirstName = function(first) {
        firstName = first;
    };
    this.setLastName = function(last) {
        lastName = last;
    };
    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();