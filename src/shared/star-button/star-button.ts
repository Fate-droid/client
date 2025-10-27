import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-star-button',
  imports: [],
  templateUrl: './star-button.html',
  styleUrl: './star-button.css',
})

export class StarButton {
  disabled = input<boolean>()
  clickEvent = output<Event>()
  selected =input<boolean>();

  private isSelected = signal(false);

  onClick(event:Event){

    if (this.disabled()) return; // do nothing if disabled

    // toggle selected state
    this.isSelected.update(value => !value);
    this.clickEvent.emit(event);


  }
}
