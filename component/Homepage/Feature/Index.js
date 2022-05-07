/** @format */

import React, { useState } from 'react';

import Bitcoinfor from './Bitcoinfor';


const Index = () => {
    const featuredata=[{  heading:"Bitcoin for Individuals",
    subheading:"Bitcoin is the easiest way to transact at a very low cost.",
     data : [
        {
          icon: '../../../homepage/feature/businessman.png',
          title: 'Mobile payments made easy',
          des: `Bitcoin when used on a mobile device allows you to pay with a simple two-step scan-and-pay. There's no need to sign up, swipe your card, type a PIN, or sign anything. All you need to receive Bitcoin payments is to display the QR code in your Bitcoin wallet app and let the other party scan your mobile, or touch the two phones together (using NFC radio technology).`,
        },
        {
          icon: '../../../homepage/feature/online-shop.png',
          title: 'Security and control over your money',
          des: 'Bitcoin transactions are secured by mathematics and energy. Cryptographic signatures prevent other people from spending your money. Energy spent by proof of work (PoW) prevents other people from undoing, rearranging or losing your transactions. So long as you take the required steps to protect your wallet, Bitcoin can give you control over your money and a strong level of protection against many types of fraud.',
        },
        {
          icon: '../../../homepage/feature/portfolio.png',
          title: 'Fast international payments',
          des: 'Sending bitcoins across borders is as easy as sending them across the street. There are no banks to make you wait three business days, no extra fees for making an international transfer, and no special limitations on the minimum or maximum amount you can send.',
        },
        {
          icon: '../../../homepage/feature/portfolio.png',
          title: 'Works everywhere, anytime',
          des: `Similarly to email, you don't need to ask recipients you're sending bitcoin to, to use the same software, wallets or service providers. You just need their bitcoin address and then you can transact with them anytime. The Bitcoin network is always running and never sleeps, even on weekends and holidays.`,
        },
        {
          icon: '../../../homepage/feature/portfolio.png',
          title: 'Choose your own fees',
          des: `There is no fee to receive bitcoins, and many wallets let you control how large a fee to pay when spending. Most wallets have reasonable default fees, and higher fees can encourage faster confirmation of your transactions. Fees are unrelated to the amount transferred, so it's possible to send 100,000 bitcoins for the same fee it costs to send 1 bitcoin.`,
        },
        {
          icon: '../../../homepage/feature/portfolio.png',
          title: 'Protect your identity',
          des: `With Bitcoin, there's no credit card number that malicious actors can collect in order to steal from you. In fact, it's even possible in some cases to send a payment without revealing your identity, almost like with physical money. You should, however, take note that some effort can be required to protect your privacy.`,
        },
      ]
},
{  heading:"Bitcoin for Bussiness",
    subheading:"Bitcoin is a very secure and inexpensive way to handle payments.",
     data : [
        {
          icon: '../../../homepage/feature/businessman.png',
          title: 'Choose your own fees',
          des: `There is no fee to receive bitcoins, and many wallets let you control how large a fee to pay when spending. Most wallets have reasonable default fees, and higher fees can encourage faster confirmation of your transactions. Fees are unrelated to the amount transferred, so it's possible to send 100,000 bitcoins for the same fee it costs to send 1 bitcoin.`,
        },
        {
          icon: '../../../homepage/feature/online-shop.png',
          title: 'Protection against fraud',
          des: 'Any business that accepts credit cards or PayPal knows the problem of payments that are later reversed. Chargeback frauds result in limited market reach and increased prices, which in turn penalizes customers. Bitcoin payments are irreversible and secure, meaning that the cost of fraud is no longer pushed onto the shoulders of the merchants.',
        },
        {
          icon: '../../../homepage/feature/portfolio.png',
          title: 'Fast international payments',
          des: 'Sending bitcoins across borders is as easy as sending them across the street. There are no banks to make you wait three business days, no extra fees for making an international transfer, and no special limitations on the minimum or maximum amount you can send.',
        },
        {
          icon: '../../../homepage/feature/portfolio.png',
          title: 'No PCI compliance required',
          des: `Accepting credit cards online typically requires extensive security checks in order to comply with the PCI standard. Bitcoin still requires you to secure your wallet and your payment requests, however, you do not carry the costs and responsibilities that come with processing sensitive information from your customers like with credit card numbers.`,
        },
        {
          icon: '../../../homepage/feature/portfolio.png',
          title: 'Get some free visibility',
          des: `Bitcoin is an emerging market of new customers who are searching for ways to spend their bitcoins. Accepting them is a good way to get new customers and give your business some new visibility. Accepting a new payment method has often shown to be a clever practice for online businesses.`,
        },
        {
          icon: '../../../homepage/feature/portfolio.png',
          title: 'Multi-signature',
          des: `Bitcoin also includes a multi-signature feature which allows bitcoins to be spent only if a subset of a group of people authorize the transaction. This can be used by a board of directors, for example, to prevent members from making expenditures without enough consent from other members, as well as to track which members permitted particular transactions.`,
        },
      ]
},

]
  return (
    featuredata.map((each,index)=>{
return <Bitcoinfor key={index} featuredataprop={each}/>
   })
   
  );
};

export default Index;
