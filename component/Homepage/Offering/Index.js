import React from 'react'
import Offeringblock from './Offerblog'
import style from './style.module.css';
const Index = () => {

let data=[

{
  "heading":" Buy, sell, and swap crypto in minutes",
  "des":"Verify your identity, add a payment method — like a debit card or bank account — and you’re good to go.Want to buy bitcoin? Swap your Ethereum (ETH) for Stellar Lumens (XLM)? Settle on-chain? We got you covered.",
  "order":[1,2],
  "img":"../../../wallet-buy-phone.png"

},
{
  "heading":"Transfer crypto and watch it grow",
  "des":"Transfer Bitcoin, Ethereum, and other crypto to a Rewards Account and you'll earn up to 13.5% in rewards annually, deposited monthly. ",
  "order":[2,1],
  "img":"../../../wallet-interest-phone.png"

}


]

  return (
    <div className={style.offeringcontainer}>

{data.map((e,i)=>{

return <Offeringblock key={i}  order={e.order} heading={e.heading}  img={e.img} description={e.des}></Offeringblock>

})}
     
      
    </div>
  )
}

export default Index