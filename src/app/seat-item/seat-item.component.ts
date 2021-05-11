import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Seat } from '../models/seat';

@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.css']
})
export class SeatItemComponent implements OnInit {
  @Input() seat: Seat;
  @Output() seatEmitter = new EventEmitter();

  isBooking = false;

  onSelect(){
    if(this.seat.TrangThai) return;
    this.seatEmitter.emit(this.seat)
    this.isBooking = !this.isBooking;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
