const  {sum, greeting} = require ('./num');

test ('sum-should return 2+3=5', ()=>{
    const result =sum(2,3);
    expect(result).toBe(5);
});

test ('greeting - should return  hello name',  ()  =>{
    expect(greeting ('hello mohammed')).toMatch(/hello mohammed/); 
});
