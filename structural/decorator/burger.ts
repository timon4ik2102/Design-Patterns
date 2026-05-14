export interface IBurger {
    getCost(): number;
    getDescription(): string
}

class Burger implements IBurger {

     getCost(): number {
        return 100
     };
    getDescription(): string {
        return 'It is  burger'
    }
}

export default Burger;
