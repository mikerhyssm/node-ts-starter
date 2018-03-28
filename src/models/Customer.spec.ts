import { assert } from 'chai';
import  Customer  from "./Customer";


describe('a customer', () => {
  it('should be defined', () => {
    const customer = new Customer();
    assert.isNotNull(customer);
    assert.isDefined(customer);
  });

  it('should have an id and name initially', () => {
    const customer = new Customer(1, 'Dan again');

    assert.equal(customer.id, 1);
    assert.equal(customer.name, 'Dan again');
  });

});

