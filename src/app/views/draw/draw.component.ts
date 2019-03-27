import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/svc/data.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {
  hex;
  data = {
    hex: [0, 0, 0, 0, 0, 0],
    read: [0,0,0,0,0,0]
  }
  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  enterRead(pos: number, pole: number, read: number, scope){
    scope.setAttribute('class', 'highlighted');
    this.data.hex[pos] = pole;
    this.data.read[pos] = read;
  }

  read() {
    let hexStr = this.data.hex.join('');
    this.hex = this.ds.getHex(hexStr, this.data.read);
    console.log(hexStr, this.hex);
  }

}
