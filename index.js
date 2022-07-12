// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const appDiv1 = document.getElementById('app1');
const appDiv2 = document.getElementById('app2');
const appDiv3 = document.getElementById('app3');
const appDiv4 = document.getElementById('app4');
const appDiv5 = document.getElementById('app5');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var s = {
  data: [],
  peek:function(){
     console.log(this.data[0]);
  },
  pop:function(){
      if(this.data.length!==0){
          this.data.reverse();
          console.log(delete this.data[this.data.length-1]);
          this.data.length = this.data.length-1;
          this.data.reverse();
          console.log(this.data);
      }
      else{
          console.log("No data found.");
      }
  },
  push:function(input){
      if(input){
          this.data.reverse();
          this.data.length = this.data.length+1;
          this.data[this.data.length-1] = input;
          this.data.reverse();
          console.log(this.data);
      }
       else{
          console.log("Please push proper data.");
      }
  }
}

appDiv1.innerHTML =  `<p>${s.push(1)}</p>`;
s.push(2);
s.push(3);
s.push(4);
s.push(5);

s.peek();

s.pop();
s.pop();
s.pop();
s.pop();
s.pop();

s.pop();

s.push();