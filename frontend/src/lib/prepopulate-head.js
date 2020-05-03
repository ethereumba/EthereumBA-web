const fs = require('fs').promises;
const cheerio = require('cheerio');

const metatags = require('../lib/metatags');

const prepopulateHead = async () => {
  const index = await fs.readFile('public/index.html', 'utf8');
  const $ = cheerio.load(index);

  $('head').append(metatags);
  const newIndexHTML = $.html();

  await fs.writeFile('public/index.html', newIndexHTML, 'utf8');
};

prepopulateHead();
