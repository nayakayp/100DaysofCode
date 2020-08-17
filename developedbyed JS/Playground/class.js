// class Enemy {
//   constructor(life, name, level) {
//     this.life = life;
//     this.name = name;
//     this.level = level;
//   }
//   getInfo() {
//     console.log(this.life, this.name, this.level);
//   }
// }

// class Bug extends Enemy {
//   constructor(life, name, level, legs, damage) {
//     super(life, name, level);
//     this.legs = legs;
//     this.damage = damage;
//   }
// }

// FUN STUFF WITH OOP

class Animator {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  fadeOut(time) {
    this.selector.style.transition = `all ${time}s ease`;
    this.selector.style.opacity = 0;
  }
}

const intro = new Animator("h1");
const button = new Animator("button");

intro.fadeOut(1);
button.fadeOut(3);
