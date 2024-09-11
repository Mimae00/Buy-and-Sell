import { Component } from '@angular/core';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-my-listings-page',
  standalone: true,
  imports: [RouterModule,NgFor],
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent {
  
  listings: Listing[] = [];

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingId: string): void { //not working
    alert(`Deleting your listing with id ${listingId}`);
  }
}
