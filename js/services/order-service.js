import * as shippinService from './shipping-service.js';

export function total(order){

    const shipping = shippinService.shipment(order.basic);
    
    return order.basic - (order.basic * order.discount / 100) + shipping;

}