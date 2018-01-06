import { inject } from 'aurelia-framework';
import { areEqual } from './utility';
import { HttpClient, json } from 'aurelia-fetch-client';

let httpClient = new HttpClient();

export class ContactDetail {
  constructor() {
    // names array of transactions
    this.accoutTypes = ["R&D", "Canteen", "CEO\'s Car", "Marketing", "Parking Fines"]
    this.transactions = null;
    this.total = 0;
    this.accountName = "";

    //styles
    this.fonts = 'font-size : 18px;';
  }

  
  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    return this.viewTransactions(params.id);

  }

  //method to get tranasactions
  viewTransactions(accountType) {
    //set account name
    this.accountName = this.accoutTypes[accountType - 1];
    var UserRequest = { "accountType": accountType };
    httpClient.fetch('http://localhost:25397/api/AccountBalance/GetTransactions',
      {
        method: 'post',
        body: json(UserRequest)

      })
      .then(response => response.json())
      .then(data => {
        if (data.length == 0) {
          alert("No transactions for this account type.");
        } else {
          for (var i = 0; i < data.length; i++) {
            var transaction = data[i];
            this.total = this.total + transaction.amount;
          }

          console.log(this.total);
          this.transactions = data;

        }

      });

  }
}