let h = require('../public/json/posts.json');
class data {
    constructor(duLieu){
        this.duLieu = h;
    }
    get(){
        return this.duLieu;
    }
    find(id){
        return this.duLieu.filter((x)=>x.userId===id).pop();
    }
}

module.exports = data;