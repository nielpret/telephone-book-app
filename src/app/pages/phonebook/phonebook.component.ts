import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Entry } from 'src/app/entry.model';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  phoneBookData: any = { entries: [] };
  searchName: string = '';
  searchNumber: string = '';
  newEntry = new Entry();
  phoneBookId: string = '0';
  constructor(private router: ActivatedRoute, private phoneBook: PhonebookService) { }

  ngOnInit() {
    this.router.params.subscribe(data => {
      this.phoneBookId = data.id;
      this.loadData();

    });
  }

  loadData() {
    this.phoneBook.getPhoneBookById(this.phoneBookId).subscribe((snap: any) => {
      this.phoneBookData = snap;

    });
  }
  phoneBookEntryFilter() {
    
    return this.phoneBookData.entries.filter((e) => {
      const name_number = e.name + e.phoneNumber;
      return name_number.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1 && name_number.toLowerCase().indexOf(this.searchNumber.toLowerCase()) > -1;
      
    })
  }

  addNew() {
    const phonebookEntry = {...this.phoneBookData};
    phonebookEntry.entries = [this.newEntry];
    this.newEntry = {} as Entry;
    this.phoneBook.save(phonebookEntry).subscribe(() => {
      this.loadData();
    })
  }

  remove(id){
    this.phoneBook.remove(id).subscribe( () => {
      this.loadData();
    } )
  }
}
