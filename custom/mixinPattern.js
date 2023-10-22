const meleeMixin = {
    meleeAttack() {
        console.log(`${this.name} performs melee attack!`)
    }
}

const magicMixin = {
    castSpell() {
        console.log(`${this.name} casts a spell!`)
    }
}

const healingMixin = {
    heal() {
        console.log(`${this.name} performs a healing action!`)
    }
}

const arrowMixin = {
    shootArrow() {
        console.log(`${this.name} shoots an arrow!`)
    }
}

class Warrior {
    constructor(name) {
        this.name = name;
    }
}

class Mage {
    constructor(name) {
        this.name = name;
    }
}

class Archer {
    constructor(name) {
        this.name = name;
    }
}


Object.assign(Warrior.prototype, meleeMixin, healingMixin);
Object.assign(Mage.prototype, magicMixin, healingMixin);
Object.assign(Archer.prototype, arrowMixin, healingMixin);

const warriorCharacter = new Warrior('Aragorn')
const archerCharacter = new Archer('Legolas')
const mageCharacter = new Mage('Gandalf')


warriorCharacter.meleeAttack();
warriorCharacter.heal();

archerCharacter.shootArrow();
archerCharacter.heal();

mageCharacter.castSpell();
mageCharacter.heal();
