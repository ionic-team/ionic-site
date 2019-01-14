const collectionDir = './server/data/integrations';

const { lstatSync, readdirSync, readFileSync } = require('fs');
const marked = require('marked');
const { join } = require('path')


// combine data and parse the descriptions of each integration
const integrations = readdirSync(collectionDir)
  .filter(name => lstatSync(join(collectionDir, name)).isDirectory())
  .map(dirName => {
    const currentDir = join(collectionDir, dirName)
    const data = JSON.parse(
      readFileSync(join(currentDir, 'data.json'))
    );
    data.id = dirName;
    data['long-description'] = data['direct-link'] ? 
      null : marked(readFileSync(join(currentDir, 'description.md')).toString());
    data.img = {
      path: join(__dirname, `${data.id}/logo.png`),
      url: `/integrations/logo/${data.id}.png`
    }
    return data;
  })

module.exports = integrations;