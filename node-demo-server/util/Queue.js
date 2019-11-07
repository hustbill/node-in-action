'use strict'

const Dancer = require("./Dancer");

class Queue {
    constructor() {
        this.datastore = [];
    }

    enqueue(element) {
        this.datastore.push(element);
    }

    dequeue() {
        return this.datastore.shift(); //remove element from the front of an array
    }

    front() {
        return this.datastore[0];
    }

    back() {
        return this.datastore[this.datastore.length - 1];
    }

    toString() {
        var retStr = "";
        for (var i = 0; i < this.datastore.length; i++) {
            retStr += this.datastore[i] + "\n";
        }
        return retStr;
    }

    empty() {
        if (this.datastore.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    getDancers(tender, persons) {
        for (var i = 0; i < persons.length; ++i) {
            persons[i] = persons[i].trim();
        }
        for (var i = 0; i < persons.length; ++i) {
            var dancer = persons[i].split(" ");

            var dancerTender = dancer[0];
            var dancerName = dancer[1] + " " + dancer[2];
            if (dancerTender == tender) {
                this.datastore.push(new Dancer(dancerName, dancerTender));
            }
        }
    }
}

// This works
module.exports = Queue;