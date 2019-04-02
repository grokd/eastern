import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/svc/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  hex;
  constructor(private route: ActivatedRoute, private ds: DataService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.hex = this.ds.getHex(id);
  }

}
