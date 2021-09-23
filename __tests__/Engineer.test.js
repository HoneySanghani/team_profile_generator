const { expect, test } = require('@jest/globals');
const Engineer=require('../lib/Engineer');
const engineer=new Engineer('Honey',1,'honeysanghani98@gmail.com','HoneySanghani');

test("it should get proper details from constructor",()=>{
    expect(engineer.name).toBe('Honey');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('honeysanghani98@gmail.com');
    expect(engineer.github).toBe('HoneySanghani');
});

test("check if role is returned or not",()=>{
    expect(engineer.getRole()).toEqual('Engineer');
})