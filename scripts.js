function about() {
    $("#about").modal();
}

function info(attack){
    console.log("info("+attack+")");
    $(attack).modal();
}
// we need random numbers and also a way to build random ip addresses
function getRandomInt(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;}
function getOctet() {return Math.round(Math.random()*255);}
function randomIP () { return(getOctet() + '.' + getOctet() + '.' + getOctet() + '.' + getOctet()); }
function getStroke() {return Math.round(Math.random()*100);}
function getDestination() {return Math.round(Math.random()*100);}

function getRandomCountry(countries, weight) {

    var total_weight = weight.reduce(function (prev, cur, i, arr) {
        return prev + cur;
    });

    var random_num = rand(0, total_weight);
    var weight_sum = 0;

    for (var i = 0; i < countries.length; i++) {
        weight_sum += weight[i];
        weight_sum = +weight_sum.toFixed(2);

        if (random_num <= weight_sum) {
            return countries[i];
        }
    }
};

function FixedQueue( size, initialValues ){
      initialValues = (initialValues || []);
      var queue = Array.apply( null, initialValues );
      queue.fixedSize = size;
      queue.push = FixedQueue.push;
      queue.splice = FixedQueue.splice;
      queue.unshift = FixedQueue.unshift;
      FixedQueue.trimTail.call( queue );
      return( queue );
};

FixedQueue.trimHead = function(){
if (this.length <= this.fixedSize){ return; }
    Array.prototype.splice.call( this, 0, (this.length - this.fixedSize) );
};

FixedQueue.trimTail = function(){
    if (this.length <= this.fixedSize) { return; }
        Array.prototype.splice.call( this, this.fixedSize, (this.length - this.fixedSize)
    );
};

FixedQueue.wrapMethod = function( methodName, trimMethod ){
    var wrapper = function(){
        var method = Array.prototype[ methodName ];
        var result = method.apply( this, arguments );
        trimMethod.call( this );
        return( result );
    };
    return( wrapper );
};

FixedQueue.push = FixedQueue.wrapMethod( "push", FixedQueue.trimHead );
FixedQueue.splice = FixedQueue.wrapMethod( "splice", FixedQueue.trimTail );
FixedQueue.unshift = FixedQueue.wrapMethod( "unshift", FixedQueue.trimTail );

function rand(min, max) {
    return Math.random() * (max - min) + min;
};


