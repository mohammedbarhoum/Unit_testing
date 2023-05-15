const  {isEven,arrayAnimal} = require ('./truthy');

test('isEven - should return true for 4', ()=>{

    expect(isEven(4)).toBeTruthy();
    
});  

test('arrayAnimal -should return cat' , ()=>{

    expect(arrayAnimal).toContain('cat');
});