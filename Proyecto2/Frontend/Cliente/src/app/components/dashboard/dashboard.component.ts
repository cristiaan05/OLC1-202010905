import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';

//import { graphviz } from "d3-graphviz";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  shortLink: string = "";
  public fileContent: string = '';  
  loading: boolean = false; // Flag variable
  file: any = null;
  fileToUpload: File | null = null;
  geText=""
  texting="";
  public cunter:any=  "";

  constructor(private service: UserService) { 
  }

  ngOnInit(): void {
    
  }


  onChange(event: any) {
    this.file = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function (x) {
      console.log(fileReader.result);
    }


    //console.log(fileReader.readAsText(this.file));
  }

  onUpload() {
    var variable:any;
    this.loading = !this.loading;
    var lector = new FileReader();
    lector.readAsText(this.file);
    lector.onload = function (e: any) {
      if (e != null) {
        var contenido = e.target.result;
        variable=contenido;
        //this.cunter=contenido
        //pasando(contenido.toString());
        //console.log(variable)
      }
      
    }

    console.log(variable)
    if (variable!=null) {
      
      this.cunter=variable
    }

  }

  getData() {
    this.service.getdata().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }

    )
  }

  setData(values: any): void {
    console.log("values: ", values.txtarea)
    //let x=JSON.parse(values)
    this.geText=values.txtarea;
    var json = {
      "peticion": values.txtarea
    }
    this.service.setdata(json).subscribe(
      (res: any) => {
        alert("DOT:  " + res.salida)
        //this.d3();
        // d3.select("#grafica").graphviz()
        //     .width(1500)
        //     .height(800)
        //     .renderDot('');
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getDot() {
    this.service.getDot().subscribe(
      (res) => {
        console.log(res);
      }, (err) => {
        console.log(err)
      }
    )
  }

  guardarFile(){
    writeFileSync(join('../../../../../../example.txt', "filename"), this.geText, {
      flag: 'w',
    });

  }

  // d3(){
  //   graphviz("#grafica").renderDot('digraph{a->b}');
  // }

}
