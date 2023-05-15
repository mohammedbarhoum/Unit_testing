const db = require('./db');
//object 

const getOrederById=(id) => {
if(!id){

throw newError('id is not defined');

}
    return{id: 1 ,price :18};
};


//Async Code

const getOrders  = async () =>{
return (
 {id:1 ,price :10},
 {id:2 ,price :20}

);
};



const applyDiscount =(orderId) => {

    const order1=db.getOrder(orderId);

    if (order1.price >=10){
        order1.price -=order1.price= 1.0;
        db.updateOrder(order1);
    }
    return order1;
};


module.exports={ getOrederById, getOrders,applyDiscount  };