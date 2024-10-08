import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ListingDataFormComponent } from '../listing-data-form/listing-data-form.component';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  standalone: true,
  imports: [ListingDataFormComponent, RouterModule],
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent implements OnInit{

  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.listing = fakeMyListings.find(listing => listing.id === id);
  }

  onSubmit(): void {
    alert('Saving changes to the listing. . . ');
    this.router.navigateByUrl('/my-listings');
  }
}
