import React, from "react";
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';



const PricingTable = props => {
    return (
    
    )
}




<PricingTable  highlightColor='#1976D2'>
    
    
    <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='GROUP' priceText='$24/month'>
        <PricingDetail> Interactive Materials</PricingDetail>
        <PricingDetail> Targeted Activities</PricingDetail>
        <PricingDetail> Feedback </PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='MENTOR' priceText='$99/month'>
        <PricingDetail> <b>100</b> projects</PricingDetail>
        <PricingDetail> <b>30 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>

</PricingTable>