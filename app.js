/* global instantsearch */

app({
  appId: 'YOUR ALGOLIA ID',
  apiKey: 'YOUR ALGOLIA API KEY',
  indexName: 'YOUR ALGOLIA INDEX NAME'
});

function app(opts) {
  var search = instantsearch({
    appId: opts.appId,
    apiKey: opts.apiKey,
    indexName: opts.indexName,
    searchParameters: {
    	"query": ""
    }
  });

  var widgets = [
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'Search through 16,039 APIs...'
    }),
    instantsearch.widgets.hits({
      container: '#results',
      hitsPerPage: 25,
      templates: {
        item: getTemplate('hit'),
        empty: getTemplate('no-results')
      }
    }),
    instantsearch.widgets.stats({
      container: '#stats'
    }),
    instantsearch.widgets.pagination({
      container: '#pagination',
      scrollTo: '#search-input'
    })
  ];

  widgets.forEach(search.addWidget, search);
  search.start();
}

function getTemplate(templateName) {
  return document.querySelector('#' + templateName + '-template').innerHTML;
}

function getHeader(title) {
  return '<h5>' + title + '</h5>';
}
