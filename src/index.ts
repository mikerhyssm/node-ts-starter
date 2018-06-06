import { OpenSkyAdapter } from './OpenSkyAdapter';
import { OpenSkyService } from './OpenSkyService';

const openSkyAdapter = new OpenSkyAdapter();
const openSkyService = new OpenSkyService();

openSkyAdapter.getAllStates().then(response => {
  console.log(openSkyService.toPlaneData(response));
});
