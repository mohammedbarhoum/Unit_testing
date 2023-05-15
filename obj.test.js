const db = require('./db');
const {applyDiscount, updateOrder}= require('./obj');



test ('should applydiscount 10% ',  ()=>{

const myFun= jest.fn();
myFun.mockReturnValueOnce(10).mockReturnValue(5);
console.log(myFun(), myFun());


//db.order1 =function(orderId){

//    return {id :orderId ,price :10};
//};
//const order1=applyDiscount(1);
//expect(order1).toEqual({ id :1, price:9});

});


test('should return value ' , ()=>{
db.getOrder =jest.fn().mockReturnValue({id :1 ,price:10});
db.updateOrder=jest.fn();
const order1= applyDiscount(1);
expect(order1).toEqual({id :1 , price:9});

//expect(db.getOrder.mock.Calls[0][0]).toBe(1);
expect(db.updateOrder.mock.calls.Length).toBe(1);
});