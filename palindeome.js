let num=121

let temp=num
let rev=0,n=0

while(num>0)
{
	n=num%10
  rev=(rev*10)+n
  num=num/10
}
  if(temp==rev)
  {
  	console.log("pallindrome no")
  }
  else
  {
  	console.log("not palliindrome no")
  }
