
var  y;
console.log(y);
if(y==undefined){
 	console.log("undefined");
}

 y=5
if(y==undefined){
	console.log("undefined");
}
else
{
	console.log("defined");
}
var string="hello";
string=string+"world";
console.log(string+"!");
console.log((5+4)/3);

function a()
{
	return
	{
		name:"Sagnic"
	};
}
function b(){
return
	{
		name:"Sagnic"
	}
}
console.log(a());
console.log(b());

var sum=0;
for(var i=0;i<10;i++){
	console.log(i)
	sum=sum+i;
}
console.log("sum is: "+sum);

function chicken(sidedish){
	if(sidedish===undefined)
	{
		sidedish="egg";
	}
	console.log("chicken "+sidedish);
}
chicken("noodle");
chicken();
var company =new Object();
company.name="Me";
 company.ceo=new Object();
company.ceo.firstName="cr7";
company.ceo.favColor="blue";
console.log(company);

var facebook= {
	name: "facebook",
	ceo: {
		name:"sd",
		favColor: "blue"
	},
	$stock:110
};
console.log(facebook.ceo.name);

function mul(x,y){
	return x*y;
}

console.log(mul(5,3));

function mkmul(mul){
	var myfunc=function(x){
		return mul*x;
	};

	return myfunc;

}

var mul3=mkmul(3);
console.log(mul3(10));

function doOperation(x,operation){
	return operation(x);
}
var result= doOperation(5,mul3);
console.log(result);

var a= 7;//passing by value
var b= a;
console.log("a "+a);
console.log("b "+b);

var b= 5;
console.log("a "+a);
console.log("b "+b);

var a={x:7};// passing by referance
var b=a;
console.log(a);
console.log(b);

b.x=5;
console.log(a);
console.log(b);


var array=new Array();
array[0]="Sagnic";
array[1]=2;
array[2]=function(name){
	console.log("hello"+name);
}
array[3]={course:"HTML,CSS & JS"};
console.log(array);
console.log(array[1]);


var names=["sagnic","john","joe"];
console.log(names);

for(var i=0;i<names.length;i++){
	console.log("hello "+names[i]);
}

var name1=["sagnic","john","joe"];
var myObj={
	name: "sagnic",
	course: "HTML",
	platform: "Coursera"
};
for(var prop in myObj){
	console.log(prop+": "+myObj[prop]);
}

for(var name in name1){
	console.log("Hello "+name1[name]);
}



