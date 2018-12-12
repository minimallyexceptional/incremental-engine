const mobx = require('mobx');

const store = mobx.observable({
    name: 'Tank',
    tagline: "Because things need dead",
    total: 0,
    progress: 0,
    min_value: 0,
    max_value: 100,
    job_power: 1,
    job_speed: 0.05,
    automated: true,
    in_progress: false,
    does_require: true,
    cant_afford: false,
    required_resource: 'heat',
    required_resource_cost: 499,
    gather: function () {
        let progress = setInterval (() => {
            if (this.progress < 100) {
                this.in_progress = true;
                this.progress += this.job_speed;
            } else {
                this.in_progress = false;
                this.progress = 0;
                this.addToTotal(this.job_power);
                clearInterval(progress);
            }
        }, this.job_speed)
    },
    gatherRequired: function (requiredResource) {
        if (requiredResource.total >= this.required_resource_cost) {
            let progress = setInterval (() => {
                this.cant_afford = false;
            if (this.progress < 100) {
                this.in_progress = true;
                this.progress += this.job_speed;
            } else {
                this.in_progress = false;
                this.progress = 0;
                this.addToTotal(this.job_power);
                requiredResource.takeFromTotal(this.required_resource_cost);
                clearInterval(progress);
            }}, this.job_speed);   
        } else {
            this.cant_afford = true;
        }
    },
    addToTotal (int) {
        this.total += int;
    },
    takeFromTotal (int) {
        this.total -= int;
    }
})

export default store;