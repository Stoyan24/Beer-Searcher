import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {FilterPipe} from "../filter.pipe";
import {DataService} from "../data.service";
import { Observable } from 'rxjs';

declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService]
})
export class DirectoryComponent implements OnInit {

  beers:any = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    //this.dataService.fetchData().subscribe((data) => this.beers = data)

    this.fbGetData();
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot) =>{
      this.beers.push(snapshot.val())
    })
  }

  fbPostData(brand, country, imgUrl){
    firebase.database().ref('/').push({brand: brand, country: country, imgUrl: imgUrl})
  }

  removeBeer(key){
    console.log(key.snapshot)

    firebase.database().ref('/').child('/'+key).remove();
}


  }
