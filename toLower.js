const fs = require('fs');
const path = require('path');

// eslint-disable-next-line no-extend-native
Array.prototype.flatMap = function (lambda) {
  return Array.prototype.concat.apply([], this.map(lambda));
};

function walkSync(dir) {
  if (!fs.lstatSync(dir).isDirectory()) {
    return dir;
  }

  return fs.readdirSync(dir).flatMap((f) => walkSync(path.join(dir, f)));
}

['fairy', 'icon', 'pic', 'spine', 'typeicons'].flatMap((dir) => walkSync(dir)).forEach((dir) => {
  if (/.atlas$/g.test(dir)) {
    let atlas = fs.readFileSync(dir).toString();
    const textureRegex = /.*.png/g;
    atlas = atlas.replace(textureRegex, textureRegex.exec(atlas)[0].toLowerCase());
    fs.writeFileSync(dir, atlas);
  }

  fs.renameSync(dir, dir.toLowerCase());
});
