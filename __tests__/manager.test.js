const Manager=require('../lib/Manager');
const manager=new Manager('Honey',1,'honeysanghani98@gmail.com','1234');

test("it should get proper details from constructor",()=>{
    expect(manager.name).toBe('Honey');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('honeysanghani98@gmail.com');
    expect(manager.officenumber).toBe('1234');
});

test("check if role is returned or not",()=>{
    expect(manager.getRole()).toEqual('Manager');
})