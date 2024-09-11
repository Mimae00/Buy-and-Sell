import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listing-detail-page',
  standalone: true,
  imports: [RouterModule,NgFor],
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})
export class ListingDetailPageComponent{

  listing: Listing;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
  }

}
