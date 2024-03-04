class User {
    
    static total = 0

    constructor(a, b) { //a - name, b- city
        this.name = a
        this.city = b
        User.total++
    }

    score = 0

    getHello() {
        console.log('hello')
    }

    static getTotal() {
        return User.total
    }
}

const userA = new User('Kolian', 'Kyiv')
const userB = new User('Liana', 'Kirovograd')
const userB1 = new User('Liana', 'Kirovograd')
const userB2 = new User('Liana', 'Kirovograd')
const userB3 = new User('Liana', 'Kirovograd')
const userB4 = new User('Liana', 'Kirovograd')

console.log(userA)
console.log(userB)
console.log(User.getTotal())
console.log(User.total)
console.log(Object.keys(User))
userA.getHello()
