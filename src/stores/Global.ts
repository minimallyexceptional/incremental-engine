const mobx = require('mobx');

const store = mobx.observable({
   activeTab: 1,
   log: [
       'This is a test',
       'This is a test',
       'This is a test',
       'This is a test',
       'This is a test',
       'This is a test',
       'This is a test',
       'This is a test',
   ],
   clearLog: function () {
        this.log = [];
   },
   setTab: function (int) {
       this.activeTab = int;
   }
})

export default store;