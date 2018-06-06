import { assert } from 'chai';
import * as moxios from 'moxios'
import sinon from 'sinon';
import { OpenSkyAdapter } from './OpenSkyAdapter';
import Plane from './model/Plane';
import axios from 'axios';


describe('OpenSky Service', () => {

  beforeEach(() => {
    moxios.install();
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('should return response received from API', (done) => {
    const adapter = new OpenSkyAdapter();
    const fakeResponse =  {
      status: 200,
      response: {
        time: 1234,
        states: [
          ["ac96b8","AAL2770 ","United States",1528285269,1528285269,-92.6283,34.5551,11582.4,false,229.22,251.69,0,null,12054.84,"2072",false,0]
        ]
      }
    }

    moxios.stubRequest('https://opensky-network.org/api/states/all', fakeResponse)

    moxios.wait(() => {
      adapter.getAllStates().then(returnedValue => {
        assert.deepEqual(returnedValue, fakeResponse.response);
        done()
      });
    })


  });

});
