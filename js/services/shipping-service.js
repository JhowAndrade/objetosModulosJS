export function shipment(order){

    if (order < 100){
        return 20;
    } 
    if(order < 200) {
        return 12;
    } 
    else{
        return 0;
    }
    
}