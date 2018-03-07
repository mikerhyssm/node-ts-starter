import { Observable } from 'rxjs/Observable';
import { range } from 'rxjs/observable/range';

class App {

  testCases() {
    const treeOne = this.getTree(3, '#', '*');
    const treeTwo = this.getTree(13, '=', '+');

    treeOne.map(line => console.log(line));
    console.log('\n');
    treeTwo.map(line => console.log(line));
  }

  getTree(baseWidth, baseCharacter, leafCharacter) {
    let layers = this.getLayers(baseWidth)
      .map(layer => this.getTreeLayer(layer, leafCharacter, baseWidth));

    layers.push(this.getTreeLayer(3, baseCharacter, baseWidth));
    return layers
  }

  getLayers(baseWidth) {
    let layers = [];
    const layersSource = range(1, baseWidth);

    layersSource.subscribe((value) => {
      if (value % 2 !== 0) {
        layers.push(value);
      }
    });

    return layers;
  }


  getTreeLayer(length, character, baseWidth): string {
    let layer = "";
    const spaceCharacter = " ";
    const indentation = this.getIndentation(baseWidth, length);
    const indentSource = range(1, indentation);
    const lenghtSource = range(1, length);

    indentSource.subscribe(() => layer = layer.concat(spaceCharacter));
    lenghtSource.subscribe(() => layer = layer.concat(character));

    return layer;
  }

  getIndentation(baseWidth, layerWidth) {
    return (baseWidth - layerWidth)/2;
  }

}

export default new App();
