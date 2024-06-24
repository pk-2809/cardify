import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LovService {

  bankNames: any[] = [
    {
      id: 101,
      name: 'Arya Bank'
    },
    {
      id: 102,
      name: 'Bank of Maharashtra'
    },
    {
      id: 103,
      name: 'Bank of India'
    },
    {
      id: 104,
      name: 'Indian Bank'
    },
    {
      id: 105,
      name: 'Allahbad Bank'
    },
    {
      id: 106,
      name: 'Jio Bank'
    },
    {
      id: 107,
      name: 'Bank of Chennai'
    },
    {
      id: 108,
      name: 'Central Bank of India'
    },
    {
      id: 109,
      name: 'State Bank of India'
    },
    {
      id: 110,
      name: 'Kotak Mahindra Bank'
    },
  ]

  bankCardNames: any[] = [

    {
      id: 100,
      name: 'Axis Ace Credit Card'
    },
    {
      id: 101,
      name: 'SBI Card Elite'
    },
    {
      id: 102,
      name: 'Flipkart Axis Bank Credit Card'
    },
    {
      id: 103,
      name: 'HSBC Visa Platinum Card'
    },
    {
      id: 104,
      name: 'Citibank cashback Credit Card'
    },
    {
      id: 105,
      name: 'Amazon Pay ICICI Credit Card'
    },
    {
      id: 106,
      name: 'Standard Chartered Super Value Titanium Credit Card'
    },
    {
      id: 107,
      name: 'Simply CLICK SBI Card'
    },
    {
      id: 108,
      name: 'Axis Bank Neo Credit Card'
    },
    {
      id: 109,
      name: 'Cashback SBI Card'
    },
    {
      id: 110,
      name: 'IndusInd Bank Platinum Card'
    },

  ]

  yourCard: any[] = [
    {
      id: 101,
      cardName: 'Flipkart Axis Bank Credit Card',
      cardId: 301,
      bankName: 'Jio Bank',
      bankId: 313,
      cardType: 'credit',
      cardVariant: 'Visa',
      cardLimit: '2000000',
      cvvCode: '210',
      cardNumber: '2019029039202331',
      cardExpiry: '03/29',
    },
    {
      id: 102,
      cardName: 'Cashback SBI Card',
      cardId: 201,
      bankName: 'Bank of Chennai',
      bankId: 105,
      cardType: 'debit',
      cardVariant: 'Rupay',
      cardLimit: '500000',
      cvvCode: '187',
      cardNumber: '3293029930202386',
      cardExpiry: '08/26',
    }
  ];

  constructor() { }
}
