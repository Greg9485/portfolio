import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/common/card';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  cards: Card[];
  pageClick: number;

  constructor() { }

  ngOnInit(): void {

  this.loadCards()

  this.pageClick = undefined;
  
  this.cards = [
    {
      id: 1,
      imgSource: "assets/images/developer3.jfif",
      title:"Software",
      text: "Check out some of the work I've done. Lorem ipsum dolor sit amet, " + 
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
      "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
       "nisi ut aliquip ex ea commodo consequat.",
       link: ""
    },
    {
      id: 2,
      imgSource: "/assets/images/ancientBuddhistMusic1.jfif",
       title:"Music",
      text: "Check out some of the work I've done. Lorem ipsum dolor sit amet, " + 
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
      "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
       "nisi ut aliquip ex ea commodo consequat.",
       link: ""
    },
    {
      id: 3,
      imgSource: "../assets/images/cyborgBuddhistReading1.jfif",
       title:"Reading List",
      text: "Check out some the work I've done. Lorem ipsum dolor sit amet, " + 
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
      "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
       "nisi ut aliquip ex ea commodo consequat.",
       link: ""
    }, 
    {
      id: 4,
      imgSource: "../assets/images/buddhistCyborgPhilosopherWriting1.jfif",
       title:"Writing and Thoughts",
      text: "Check out some the work I've done. Lorem ipsum dolor sit amet, " + 
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
      "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
       "nisi ut aliquip ex ea commodo consequat.",
       link: ""
    },
    {
      id: 5,
      imgSource: "../assets/images/travel1.jfif",
       title:"Travel",
      text: "Check out some the work I've done. Lorem ipsum dolor sit amet, " + 
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
      "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
       "nisi ut aliquip ex ea commodo consequat.",
       link: ""
    }, 
    {
      id: 6,
      imgSource: "../assets/images/doctor4.jfif",
       title:"Health",
      text: "Check out some the work I've done. Lorem ipsum dolor sit amet, " + 
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
      "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
       "nisi ut aliquip ex ea commodo consequat.",
       link: ""
    }, 
    {
      id: 7,
      imgSource: "../assets/images/scientist2.jfif",
       title:"Science",
      text: "Check out some the work I've done. Lorem ipsum dolor sit amet, " + 
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
      "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
       "nisi ut aliquip ex ea commodo consequat.",
       link: ""
    }, 

    {
      id: 8,
      imgSource: "../assets/images/tinkerer4.jfif",
       title:"Other Interests",
      text: "Check out some the work I've done. Lorem ipsum dolor sit amet, " + 
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
      "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
       "nisi ut aliquip ex ea commodo consequat.",
       link: ""
    }, 
    {
      id: 9,
      imgSource: "../assets/images/cyborg god.jfif",
       title:"Weird Art",
      text: "Check out some the work I've done. Lorem ipsum dolor sit amet, " + 
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
      "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
       "nisi ut aliquip ex ea commodo consequat.",
       link: ""
    }, 
  ]
  }

  loadCards(){
    this.cards = [
      {
        id: 0,
        imgSource: "assets/photos/cyborg god.jfif",
        title:"Software",
        text: "Check out some of the work I've done. Lorem ipsum dolor sit amet, " + 
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
        "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
         "nisi ut aliquip ex ea commodo consequat.",
         link: ""
      },
      {
        id: 1,
        imgSource: "/assets/photos/music2.png",
         title:"Music",
        text: "Check out some of the work I've done. Lorem ipsum dolor sit amet, " + 
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
        "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
         "nisi ut aliquip ex ea commodo consequat.",
         link: "#"
      },
      {
        id: 2,
        imgSource: "../assets/photos/books.png",
        title:"Books",
        text: "Check out some of the work I've done. Lorem ipsum dolor sit amet, " + 
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "+
        "magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
         "nisi ut aliquip ex ea commodo consequat.",
         link: "#"
      }

    ]

    this.cards.forEach(card => JSON.stringify(card, null, 4))

  }

  pageClicked(id: number){
    switch(id){
      case(0):{
        this.pageClick = 0;
        break;
      }
      case(1):{
        this.pageClick = 1;
        break;
      }
      case(2):{
        this.pageClick = 2;
        break;
      }
      case(3):{
        this.pageClick = 3;
        break;
      }
      case(4):{
        this.pageClick = 4;
        break;
      }
      case(5):{
        this.pageClick = 5;
        break;
      }
      case(6):{
        this.pageClick = 6;
        break;
      }
      case(7):{
        this.pageClick = 7;
        break;
      }
      case(8):{
        this.pageClick = 8;
        break;
      }
      case(9):{
        this.pageClick = 9;
        break;
      }
      default:{
        this.pageClick = undefined;
      }
    }

  }

}
