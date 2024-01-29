const fs = require('fs'),
  seo = require('./config/seo.config.json'),
  indexPath = './src/index.html',
  names = [
    'description',
    'twitter:card',
    'twitter:title',
    'twitter:description',
    'twitter:image',
  ],
  properties = [
    'og:url',
    'og:type',
    'og:title',
    'og:description',
    'og:image',
    'twitter:domain',
    'twitter:url',
  ];

fs.readFile(indexPath, 'utf-8', (err, data) => {
  console.log('Start update meta tags seo');

  if (err) {
    console.error(`Error read ${indexPath}: `, err);
    process.exit(1);
  }

  let updatedData = data;

  const title = seo?.['title']
  if (title)
    updatedData = data.replace(/<title>(.*?)<\/title>/gi, `<title>${title}</title>`)

  const metaTagsList = data.match(/<meta\b[^>]*>/gi);

  if (metaTagsList) {
    metaTagsList.forEach((meta) => {
      const metaCleaned = meta.replace(/\n/g, '').replace(/\s+/g, ' ');
      let attribute =
        names.find((name) => metaCleaned.includes(`name="${name}"`)) ||
        properties.find((property) =>
          metaCleaned.includes(`property="${property}"`)
        );

      if (attribute) {
        attribute = (attribute.replace(/^[^:]+:/, ''))
        if (attribute in seo) {
          const updatedMeta = metaCleaned.replace(
            /content="([^"]*)"/,
            `content="${seo[attribute.replace(/^[^:]+:/, '')]}"`
          );
          updatedData = updatedData.replace(meta, updatedMeta);
        }
      }
    });

    fs.writeFile(indexPath, updatedData, 'utf-8', (writeErr) => {
      if (writeErr) {
        console.error(`Error write ${indexPath}: `, err);
        process.exit(1);
      }
      console.log('End update meta tag seo');
      process.exit(0);
    });
  }
});
