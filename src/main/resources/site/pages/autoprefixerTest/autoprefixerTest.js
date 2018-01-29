exports.get = function() {
  return {
    body: '<html><head><title>Autoprefixer test</title></head><body><h1 class="d-f">Autoprefixer test</h1></body></html>',
    pageContributions: {
      headBegin: '<style type="text/css">.d-f{display:flex}</style>',
      headEnd: ['<style type="text/css">.d-f{display:flex}</style>'],
      bodyBegin: '<style type="text/css">.d-f{display:flex}</style>',
      bodyEnd: ['<style type="text/css">.d-f{display:flex}</style>']
    } // pageContributions
  }; // return
} // exports.get
