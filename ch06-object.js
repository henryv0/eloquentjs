class Vec {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	
	plus(vector) {
		return {
			x: vector.x + this.x,
			y: vector.y + this.y
		}
	}

	minus(vector) {
		return {
			x: this.x - vector.x,
			y: this.y - vector.y
		}	
	}

	get length() {
		return Math.sqrt((this.x * this.x) + (this.y * this.y))
	}	
}

//console.log(new Vec(1,2).plus(new Vec(2,3)));
////console.log(new Vec(1,2));
//console.log(new Vec(1,2).minus(new Vec(2,3)));
//console.log(new Vec(5,4).length);

/* GROUPS
*/

class Group {
	constructor() {
		this.group = [];
	}

	add(val) {
		if (!this.group.includes(val)) {
			this.group.push(val);
		}	
	}

	del(val) {
        this.group = this.group.filter(v => v !== val);
	}

	has(val) {
        return (this.group.includes(val)) ? true : false;
    }
    
    print() {
        console.log(this);
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

	static from(args) {
        let fromGroup = new Group;
		for (let arg of args) {
			//return this.add(arg);
            //return this.add(arg);
            fromGroup.add(arg);
		}

        return fromGroup;
	}
}

let group = Group.from([10,20]);
//console.log(group);
//group.add(30);
//group.del(30); 
//console.log(group.has(30));
//console.log(group);
//group.print();

/* ITERABLE
 * GROUPS
 */

class GroupIterator {
    constructor(group) {
        this.group = group.group;
        this.index = 0;
    }

    next() {
        //console.log(this.group);
        if (this.index === this.group.length) return {done: true};

        let value = this.group[this.index];
        this.index++;

        return {value, done: false};
    }
}

// for (let value of Group.from(['a','b','c'])) {
//     console.log(value);
// }

let map = {one: true, two: true, hasOwnProperty: true};

Object.prototype.hasOwnProperty;

console.log(Object.prototype.hasOwnProperty.call(map, 'one'))

//console.log(map.hasOwnProperty('one'));
