import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';


let httpClient = new HttpClient();

export class ContactList {
  constructor() {    
    this.contacts = [];
    this.accountBalance = null;

    //style
    this.a = 'text-decoration : none;';
    this.fonts = 'font-size : 18px;';
    
  }

  created() {
    httpClient.fetch('http://localhost:25397/api/AccountBalance/GetAccountBalances',
    {
        method: "POST"
                 
    })
    .then(response => response.json())
    .then(data => {     
                     
        this.accountBalance = data[0];                         
    });
    
  }

  
  
}