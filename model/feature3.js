
class feature3 {
    static get defaults() {
        return {
            result: 'Default feature result'
        }
    }
    static get result(){
        return typeof(_result) == 'undefined' ? this.defaults.result : _result;
    }
    static set result(value){
        var _result = value;
    }
}

module.exports = feature3;