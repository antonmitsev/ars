class featureF1{
    static getResult(){
        const places = 5;
        const rnd = Math.random() * Math.pow(places, 10);
        const zero = places - rnd.toString().length + 1;
        return 'Feature F1: ' + (Array(+(zero > 0 && zero)).join("0") + rnd).substr(0, places);

    }
}

module.exports = featureF1.getResult();