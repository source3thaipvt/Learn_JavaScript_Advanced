// super đại diện cho base class
// 

class Hero{
    constructor(name, hp, damage){
        this.name = name;
        this.hp = hp;
        this.damage = damage
    }
    // khi bi tan cong
    applyDamage(damage){
        this.hp -= damage;
    }
    // tan cong enemy nao day
    attack(enemy){
        enemy.applyDamage(this.damage)
    }
}
const heroA = new Hero('A', 100, 10);
const heroB = new Hero('B', 150, 6);
console.log({heroA,heroB})
// {
//     heroA: Hero { name: 'A', hp: 100, damage: 10 },
//     heroB: Hero { name: 'B', hp: 150, damage: 6 }
//   }
console.log(heroA,heroB) // Hero { name: 'A', hp: 100, damage: 10 } Hero { name: 'B', hp: 150, damage: 6 }
heroA.attack(heroB);
console.log({heroA,heroB})
// {
//     heroA: Hero { name: 'A', hp: 100, damage: 10 },
//     heroB: Hero { name: 'B', hp: 140, damage: 6 }
//   }

class RangedHero extends Hero { // subclass
    constructor(name, hp, damage, range){
        super(name,hp,damage); // base class
        this.range = range;
    }
    attack(enemy){
        super.attack(enemy) // goi method, neu ko muon bi ghi de them va giu thuoc tinh cua extends
        this.hp += this.range; // add them thuoc tinh
    }
}
const heroC = new RangedHero('C', 100, 10, 7);
const heroD = new Hero('D', 150, 6);
console.log({heroC,heroD})
heroC.attack(heroD)
console.log({heroC,heroD})