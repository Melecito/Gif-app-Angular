import { Component, input } from '@angular/core';
import { GIFListItemComponent } from "./gif-list-item/gif-list-item.component";



@Component({
  selector: 'gif-list',
  imports: [GIFListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GIFListComponent {

  gifs = input.required<string[]>();
}
