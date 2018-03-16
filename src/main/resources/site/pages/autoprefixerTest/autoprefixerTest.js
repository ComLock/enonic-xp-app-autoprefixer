var D_F = '.d-f{display:flex}';
var M_D_F = '@media(min-width:480px){.d-f-w-mi-480{display:flex}}';
var TEST_STR = '<style type="text/css">' + M_D_F + '</style>' + '\n' +
'<style type="text/css">' + '\n' +
' ' + M_D_F + '\n' +
'  ' + D_F + '\n' +
'   ' + M_D_F + '\n' +
'    ' + D_F + '\n' +
'</style><style type="text/css">' + D_F + '</style>';


exports.get = function() {
  return {
    body: '<html><head><title>Autoprefixer test</title></head><body><h1 class="d-f">Always display: flex;</h1><p class="d-f-w-mi-480">Flex from @media(min-width:480px)</p></body></html>',
    pageContributions: {
      //headBegin: TEST_STR,
      headEnd: [TEST_STR, TEST_STR]//,
      //bodyBegin: TEST_STR,
      //bodyEnd: [TEST_STR]
    } // pageContributions
  }; // return
} // exports.get
