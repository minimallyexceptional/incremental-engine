const mobx = require('mobx');

const store = mobx.observable({
   name: 'The Forgotten Master',
   title: 'Astute Camper',
   current_health: 100,
   max_health: 100,
   attack_power: 90,
   attack_modifier: 1,
   is_attacking: false,
   attack_speed: 4000,
   heailing_power: 1,
   is_automated: false,
   is_dead: false,
   heal: function (target) {
       target.current_health += this.heailing_power;
   },
   attack: function (target) {
       this.is_attacking = true;

       if (target.current_health - this.attack_power <= 0) {
            setTimeout(() => {
                target.is_dead = true;
            }, this.attack_speed)
       } else {
        setTimeout(() => {
            target.current_health -= this.attack_power;
            this.is_attacking = false;
           }, this.attack_speed)
       }
   }
})

export default store;