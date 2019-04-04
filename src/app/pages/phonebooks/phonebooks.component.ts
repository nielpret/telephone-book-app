import { Component, OnInit } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { PhoneBook } from 'src/app/phone-book.model';
import { Entry } from 'src/app/entry.model';

@Component({
  selector: 'app-phonebooks',
  templateUrl: './phonebooks.component.html',
  styleUrls: ['./phonebooks.component.css']
})
export class PhonebooksComponent implements OnInit {
 
  phonebooks: any;

  constructor(private phonebookService: PhonebookService) { }

  ngOnInit() {
    this.phonebookService.getPhoneBooks().subscribe( data => {
      this.phonebooks = data;
      console.log(this.phonebooks);
    });
  }

  

}
