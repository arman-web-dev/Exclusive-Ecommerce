import React from 'react'
import Container from './Container'
import Delivery from '../assets/delivery.png'
import MoneyTruck from '../assets/moneyback.png'
import Support from '../assets/service.png'

const Services = () => {
  return (
    <div className='lg:pb-[120px] lg:pt-[60px]'>
        <Container>
            <div className="flex">
                <div className="w-[30%]">
                    <div className="flex justify-center pb-[24px]">
                        <img src={Delivery} alt="Delivery" className='object-cover'/>
                    </div>
                        <h3 className='text-center font-sans font-semibold text-[20px] text-[#000] leading-7'>FREE AND FAST DELIVERY</h3>
                        <h4 className='text-center font-sans font-normal text-[14px] text-[#000] leadin-[21px] pt-2'>Free delivery for all orders over $140</h4>
                </div>
                <div className="w-[30%]">
                    <div className="flex justify-center pb-[24px]">
                        <img src={Support} alt="Delivery" className='object-cover'/>
                    </div>
                        <h3 className='text-center font-sans font-semibold text-[20px] text-[#000] leading-7'>24/7 CUSTOMER SERVICE</h3>
                        <h4 className='text-center font-sans font-normal text-[14px] text-[#000] leadin-[21px] pt-2'>Friendly 24/7 customer support</h4>
                </div>
                <div className="w-[30%]">
                    <div className="flex justify-center pb-[24px]">
                        <img src={MoneyTruck} alt="Delivery" className='object-cover'/>
                    </div>
                        <h3 className='text-center font-sans font-semibold text-[20px] text-[#000] leading-7'>MONEY BACK GUARANTEE</h3>
                        <h4 className='text-center font-sans font-normal text-[14px] text-[#000] leadin-[21px] pt-2'>We return money within 30 days</h4>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Services