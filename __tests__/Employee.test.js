const { test, expect } = require('@jest/globals');
const Employee=require('../lib/Employee');
const employee=new Employee('Honey',1,'honeysanghani98@gmail.com');

test("it should get proper details from constructor",()=>{
    expect(employee.name).toBe('Honey');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('honeysanghani98@gmail.com');
});

test("to test if it gets name or not",()=>{
    expect(employee.getName()).toEqual('Honey');
});

test("to test if it passes id or not",()=>{
    expect(employee.getId()).toEqual(1);
});

test("to test if it gets email or not",()=>{
    expect(employee.getEmail()).toEqual('honeysanghani98@gmail.com');
});

test("check if returns employee",()=>{
    expect(employee.getRole()).toEqual('Employee');
});