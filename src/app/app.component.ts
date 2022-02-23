import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Kniznica';
  decNumber: any;
  nums: any;
  isNumber7 = false;
  isNumber6 = false;
  isNumber5 = false;
  isNumber4 = false;
  isNumber3 = false;
  isNumber2 = false;
  isNumber1 = false;
  isNumber0 = false;
  ToBin() {

          if (this.decNumber > 255) {
          this.decNumber = 0
          }
          if  (this.decNumber <= 0){
            this.decNumber = 0

          }else
            this.isNumber7 = false;
          this.isNumber6 = false;
          this.isNumber5 = false;
          this.isNumber4 = false;
          this.isNumber3 = false;
          this.isNumber2 = false;
          this.isNumber1 = false;
         this.isNumber0 = false;
    if (!this.decNumber || this.decNumber === '') return;
            this.nums = this.decNumber.toString(2).split('').reverse();
    if (!this.nums) return;
        if(this.nums[0] && this.nums[0] === '1'){
          this.isNumber0 = true;
        }
          if(this.nums[1] && this.nums[1] === '1'){
            this.isNumber1 = true;
          }
          if(this.nums[2] && this.nums[2] === '1'){
            this.isNumber2 = true;
          }
          if(this.nums[3] && this.nums[3] === '1'){
            this.isNumber3 = true;
          }
          if(this.nums[4] && this.nums[4] === '1'){
            this.isNumber4 = true;
          }
          if(this.nums[5] && this.nums[5] === '1'){
            this.isNumber5 = true;
          }
          if(this.nums[6] && this.nums[6] === '1'){
            this.isNumber6 = true;
          }
          if(this.nums[7] && this.nums[7] === '1'){
            this.isNumber7 = true;
          }

          return this.decNumber.toString(2);
  }


  ToDec() {

            const nums = [];

            if (this.isNumber7) nums.push('1');
            else nums.push('0');
            if (this.isNumber6) nums.push('1');
            else nums.push('0');
            if (this.isNumber5) nums.push('1');
            else nums.push('0');
            if (this.isNumber4) nums.push('1');
            else nums.push('0');
            if (this.isNumber3) nums.push('1');
            else nums.push('0');
            if (this.isNumber2) nums.push('1');
            else nums.push('0');
            if (this.isNumber1) nums.push('1');
            else nums.push('0');
            if (this.isNumber0) nums.push('1');
            else nums.push('0');
            const number = nums.join('');
           return  this.decNumber = parseInt(number, 2).toString(10);

  }



}

