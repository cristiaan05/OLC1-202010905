import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { graphviz } from "d3-graphviz";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //public txtarea;
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }

  getData(){
    this.service.getdata().subscribe(
      (res)=>{
        console.log(res);
      }, 
      (err)=>{
        console.log(err);
      }

    )
  }

  setData(values:any):void{
    console.log("values: ",values.txtarea)
    //let x=JSON.parse(values)
    var json={
      "peticion": values.txtarea
    }
    this.service.setdata(json).subscribe(
      (res:any)=>{
        alert("DOT:  "+res.salida)
        this.d3();
        // d3.select("#grafica").graphviz()
        //     .width(1500)
        //     .height(800)
        //     .renderDot('');
      }, 
      (err)=>{
        console.log(err);
      }
    )
  }

  d3(){
    graphviz("#grafica").renderDot('digraph{a->b}');
  }


}
