import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input()
	gameType:string="Digital PS4"
	@Input()
	gamePrice:string="R$ 129,90"
	@Input()
	gameCover:string=""
	@Input()
	gameLabel:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
