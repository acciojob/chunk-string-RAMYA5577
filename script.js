function stringChop(str, size) {
  // your code here
	if(str.length<size){
		return str;
	}
	let count=0;
	let arr=[];
	let index=0;
	// let element="";
	for(let i=1;i<str.length;i++){
		if(size%i==0){
			count=i;
			let element=str.splice(0,count);
			arr[index]=element;
			index++;
		}
		if(str.length<size){
			arr[index+]=str;
		}
		
	}
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
