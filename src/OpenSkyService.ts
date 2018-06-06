import Plane from "./model/Plane";
import { OpenSkyResponse } from "./OpenSkyAdapter";

export class OpenSkyService {

  toPlaneData(response: OpenSkyResponse): Array<Plane> {
    return response.states
    .filter(planeResponse => planeResponse[5] !== null && planeResponse[6] !== null && planeResponse[7] !== null)
    .map(planeResponse => new Plane(planeResponse[0], planeResponse[5], planeResponse[6], planeResponse[7]));
  }

}
