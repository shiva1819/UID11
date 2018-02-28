
var abc = "Shiva";

// Data Types...

// strings, numbers, boolean, null, undefined.

var num = 1212;
var tr = true;
var nul = null; // * object
var und = undefined; // * undefined

console.log(typeof(abc));

// NaN (Not a Number) // * number

// Objects
var pen = {
	color: ['blue', 'red', 'black'],
	price:20,
	"made In": {cntr1: 'India', cntry2:'China'},
	yes:true,
	noDetails : null,
	Transport: undefined,
	descript: function(product){
		// console.log(this);
		return " Our" + product +" is in 3 colors which are " + this.color[0] + ", " + this.color[1] + " and " + this.color[2];
	}


};
console.log(pen); // pen['made In'];

// Arrays

var arr = [123,'blue', 20, "India", {name:"Shiva", color:[12,32,44,['xx', 'yy', 'zz']]}];

console.log(arr.length);

var Pens = [{ name:'Parker', price:'$100'}, { name:"rotomax", price:"$50"}, {name:"camel", price:"$25"}];
console.log(Pens);

// Functions 

(function(){

	alert('12121');
	var abc = 10;
})();

var tst1;
function demo(num){
	// alert('Hai This is alert...!');
	// tst1 = num;
	// alert(tst1);
	return num

}


var demo1 = function(){
	alert('I am Demo 1...')
}

// demo1();
// demo1();
console.log(demo(20) + 180);
demo(50);
demo(70);



// console.log(demo());

