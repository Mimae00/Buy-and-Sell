import { Component } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [RouterModule,NgFor],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent {

  listings: Listing[] = [];


  ngOnInit(): void {
    this.listings = fakeListings;
  }
}
