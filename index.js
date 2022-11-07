var demo = document.getElementById('demo');
var num;
var sum=0;
var checkboxes = document.querySelectorAll('.checkbox');
for (var checkbox of checkboxes){
checkbox.addEventListener('click',function(){
  if(this.checked == true){
    num=this.value;
    sum=sum + parseFloat(num);
    demo.innerHTML=sum;
    
   }
  
  else{
    console.log("unchecked!");
    }
  })
}