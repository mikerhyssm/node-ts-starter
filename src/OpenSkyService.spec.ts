import { assert } from 'chai';
import { OpenSkyService } from './OpenSkyService';
import Plane from './model/Plane';


describe('OpenSky Service', () => {

  it('should convert open sky response into array of planes', () => {
    const response = {
      time: null,
      states: [
        ["ac96b8","AAL2770 ","United States",1528285269,1528285269,-92.6283,34.5551,11582.4,false,229.22,251.69,0,null,12054.84,"2072",false,0],
        ["7c6b2f","JST724  ","Australia",1528285270,1528285270,149.1969,-35.279,10972.8,false,250.42,13.67,0,null,11109.96,"3777",false,0],
        ["3825fa","FWWVL   ","France",1528285270,1528285270,-0.8764,45.3364,2537.46,false,165.05,175.89,-12.03,null,2621.28,"2642",false,0]
      ]
    }

    const service = new OpenSkyService();

    const planes = service.toPlaneData(response);

    assert.lengthOf(planes, 3);

    assert.deepEqual(planes[0], new Plane('ac96b8',-92.6283, 34.5551, 11582.4));
    assert.deepEqual(planes[1], new Plane('7c6b2f',149.1969, -35.279, 10972.8));
    assert.deepEqual(planes[2], new Plane('3825fa',-0.8764, 45.3364, 2537.46));


  });

  it('should filter any planes with no longitude', () => {
    const response = {
      time: null,
      states: [
        ["ac96b8","AAL2770 ","United States",1528285269,1528285269,null,34.5551,11582.4,false,229.22,251.69,0,null,12054.84,"2072",false,0],
        ["7c6b2f","JST724  ","Australia",1528285270,1528285270,149.1969,-35.279,10972.8,false,250.42,13.67,0,null,11109.96,"3777",false,0]
      ]
    }

    const service = new OpenSkyService();

    const planes = service.toPlaneData(response);

    assert.lengthOf(planes, 1);

    assert.equal(planes[0].id, "7c6b2f");
  });

  it('should filter any planes with no latitude', () => {
    const response = {
      time: null,
      states: [
        ["ac96b8","AAL2770 ","United States",1528285269,1528285269,149.1969, null ,11582.4,false,229.22,251.69,0,null,12054.84,"2072",false,0],
        ["7c6b2f","JST724  ","Australia",1528285270,1528285270,149.1969,-35.279,10972.8,false,250.42,13.67,0,null,11109.96,"3777",false,0]
      ]
    }

    const service = new OpenSkyService();

    const planes = service.toPlaneData(response);

    assert.lengthOf(planes, 1);

    assert.equal(planes[0].id, "7c6b2f");
  });

  it('should filter any planes with no altitude', () => {
    const response = {
      time: null,
      states: [
        ["ac96b8","AAL2770 ","United States",1528285269,1528285269,149.1969, 35.27 ,null,false,229.22,251.69,0,null,12054.84,"2072",false,0],
        ["7c6b2f","JST724  ","Australia",1528285270,1528285270,149.1969,-35.279,10972.8,false,250.42,13.67,0,null,11109.96,"3777",false,0]
      ]
    }

    const service = new OpenSkyService();

    const planes = service.toPlaneData(response);

    assert.lengthOf(planes, 1);

    assert.equal(planes[0].id, "7c6b2f");
  });

});
