import WorldModel from "./WorldModel";
import Food from "./Food";
class WorldLoader {
  public readData(levelData: string[], world: WorldModel): void {
    for (let y = 0; y < levelData.length; y++) {
      const row = levelData[y].split("");
      for (let x = 0; x < row.length; x++) {
        const char = row[x];
        if (char === "f") {
          world.addActor;
        }
      }
    }
  }
}
export default WorldLoader;
