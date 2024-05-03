import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  longText = `India is the highest milk producer and ranks first position in the world contributing 24% of global milk production in the year 2021-22. The milk production of India has registered 51 % increase during the last eight years i.e., during the year 2014-15 and 2021-22 and increased to 221.06 Mn tonnes in the year 2021-22. The milk production has increased by 5.29% over the previous year 2020-21.

  The top 5 milk-producing states are: Rajasthan (15.05%), Uttar Pradesh (14.93%), Madhya Pradesh (8.6%), Gujarat (7.56%) and Andhra Pradesh (6.97%).  They together contribute 53.11% of total Milk production in the country.
  
  Export of dairy products recorded a growth of 19.45 % as its export rose to $471 Mn in FY 2022-23 till now (April-December 2022) from $395 Mn in April-December 2021 of the last fiscal year. 
  
  The market growth in Dairy requires support of significant infrastructure investment across processing, chilling, logistics, cattle feed etc. Further, lucrative untapped opportunities exist in areas such as value-added dairy products, organic/ farm fresh milk and exports. To facilitate the infrastructure growth, Central/ State Governments have released various incentives to attract investments in this sector.  Animal Husbandry Infrastructure Development fund (AHIDF). AHIDF is one of the flagship schemes by DAHD, Government of India`;
}
