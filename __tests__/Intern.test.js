const Intern=require('../lib/Intern');
const intern=new Intern('Honey',1,'honeysanghani98@gmail.com','uoft');

test("it should get proper details from constructor",()=>{
    expect(intern.name).toBe('Honey');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('honeysanghani98@gmail.com');
    expect(intern.school).toBe('uoft');
});

test("check if role is returned or not",()=>{
    expect(intern.getRole()).toEqual('Intern');
})