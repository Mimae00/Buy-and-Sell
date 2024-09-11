import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent {

  name: string ='';
  description: string ='';
  price: string ='';

  constructor(
    private router: Router,
  ){}

  onSubmit(): void {
    alert('Creating a new listing . . .');
    this.router.navigateByUrl('/my-listings');
  }
}
