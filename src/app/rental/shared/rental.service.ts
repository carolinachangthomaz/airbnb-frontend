import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import { Rental } from './rental.model';

@Injectable()
export class RentalService{

    private rentals: Rental[] = [{
            id: "1",
            title: "Central Apartment 1",
            city: "New Uork",
            street: "Times Square",
            category: "apartment",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 3,
            description: "Very nice",
            dailyRate: 34,
            shared: false,
            createdAt: "24/12/2018"
          },
          {
            id: "2",
            title: "Central Apartment 2",
            city: "New Uork",
            street: "Times Square",
            category: "apartment",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 3,
            description: "Very nice",
            dailyRate: 34,
            shared: false,
            createdAt: "24/12/2018"
          },
          {
            id: "3",
            title: "Central Apartment 3",
            city: "New Uork",
            street: "Times Square",
            category: "apartment",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 3,
            description: "Very nice",
            dailyRate: 34,
            shared: false,
            createdAt: "24/12/2018"
          },
          {
            id: "4",
            title: "Central Apartment 4",
            city: "New Uork",
            street: "Times Square",
            category: "apartment",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 3,
            description: "Very nice",
            dailyRate: 34,
            shared: false,
            createdAt: "24/12/2018"
    }];

    public getRentals(): Observable<Rental[]> {
        const rentalObservable: Observable<Rental[]> = new Observable((observer) =>{
           setTimeout(() =>{
            observer.next(this.rentals);
           },1000);

           setTimeout(() =>{
            observer.error("Error");
           },2000);

           setTimeout(() =>{
            observer.complete();
           },3000);

        });
        return rentalObservable;
    }

}