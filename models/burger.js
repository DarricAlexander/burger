var orm = require('../config/orm.js');

// export code that will call ORM functions using burger specific input for ORM
var burger =  {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(err) {
            // console.log(res)
            cb(errr)
        })
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(err) {
            // console.log(res)
            cb(err)
        });
    },
    updateOne: function(objColVals, id, cb) {
        orm.updateOne("burgers", objColVals, id, function(err) {
            console.log(id)
            // console.log(err)
            cb(err)
        });
    }
};

module.exports = burger;