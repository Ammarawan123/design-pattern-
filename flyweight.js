const treeFactory = (() => {
  const treeTypes = {}; 
 return {
    getTreeType: (name, texture, color) => {
      const key = name + texture + color;

      if (!treeTypes[key]) {
        treeTypes[key] = { name, texture, color };
        console.log(`Creating new tree type: '${name}'`);
      }

      return treeTypes[key]; 
    }
  };
})();
function plantTree(treeType, x, y) {
  console.log(`Planting '${treeType.name}' (${treeType.color}) at (${x}, ${y})`);
}
const oakType = treeFactory.getTreeType("Oak", "oak_texture.png", "green");

plantTree(oakType, 10, 20);
plantTree(oakType, 15, 45);

const pineType = treeFactory.getTreeType("Pine", "pine_texture.png", "dark green");
plantTree(pineType, 100, 200);

