import { Component, OnInit } from '@angular/core';
import { urlData } from '../modal';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  urlList:Array<urlData>=[];
  temp1={
    "longurl":"",
    "shorturl":"",
    "count":0
  }

  constructor(private urlService:UrlServiceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.urlService.getAll().subscribe((data)=>{
      this.urlList=data;
      console.log(this.urlList);
    })
  }

  changeCount(id:number|undefined){
    this.urlService.getAll().subscribe((data)=>{
      data.forEach((temp)=>{
        if(temp.id===id)
        {
          this.temp1={
            "longurl":temp.longurl,
            "shorturl":temp.shorturl,
            "count":temp.count + 1
          }
          console.log(this.temp1.count);
          this.urlService.update(this.temp1,id).subscribe((data)=>{
            this.ngOnInit();
            console.log(data);
          });
        }
      })
    })
  }
}
