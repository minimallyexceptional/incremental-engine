const mobx = require('mobx');

const store = mobx.observable({
    name: 'Heat',
    tagline: "Because it's cold",
    total: 0,
    progress: 0,
    min_value: 0,
    max_value: 100,
    job_power: 500,
    job_speed: 0.1,
    automated: true,
    in_progress: false,
    does_require: false,
    cant_afford: false,
    required_resource: '',
    required_resource_cost: 0,
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
        let progress = setInterval (() => {
            if (requiredResource.total >= this.required_resource_cost) {
                this.cant_afford = false;
                if (this.progress < 100) {
                    this.in_progress = true;
                    this.progress += this.job_speed;
                } else {
                    this.in_progress = false;
                    this.progress = 0;
                    this.addToTotal(this.job_power);
                    requiredResource.takeFromTotal(this.job_power);
                    clearInterval(progress);
                }    
            } else {
                this.cant_afford = true;
            }
        }, this.job_speed)
    },
    addToTotal (int) {
        this.total += int;
    },
    takeFromTotal (int) {
        this.total -= int;
    }
})

export default store;