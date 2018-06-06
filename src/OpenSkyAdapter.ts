import axios from 'axios';

export class OpenSkyAdapter {

  public async getAllStates(): Promise<OpenSkyResponse> {
    return axios.get('https://opensky-network.org/api/states/all')
      .then(response => {
        return <OpenSkyResponse> response.data})
  }
}

export interface OpenSkyResponse {
  time: number;
  states: Array<any>
}
