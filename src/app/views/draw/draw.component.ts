import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/svc/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {
  hex;
  data = {
    hex: [null, null, null, null, null, null],
    read: [0,0,0,0,0,0]
  }
  constructor(private ds: DataService, private router: Router) { }

  ngOnInit() {
  }

  enterRead(pos: number, pole: number, read: number, scope){
    scope.setAttribute('class', 'highlighted');
    this.data.hex[pos] = pole;
    this.data.read[pos] = read;
  }

  read() {
    if(this.data.hex.includes(null)){
      console.log('Unfinished hex');
      return 
    } else {
      let hexStr = this.data.hex.join('');
      this.hex = this.ds.updateCurrHex(hexStr, this.data.read);
      this.router.navigate(['/hex/' + hexStr])
    }
  }

}
