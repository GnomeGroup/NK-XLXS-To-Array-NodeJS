const XLSX = require( 'xlsx' )

const onlyNums = string => string.replace( /[^0-9]/g, "" )

module.exports = ( fileName ) => {
  let sheets = []
  let workSheets = XLSX.readFile( fileName, {} ).Sheets
  for( let x in workSheets )  {
    sheets[x] = []
    for( let n in workSheets[x] )  {
      let rowNumber = parseInt( onlyNums( n ) )
      if( rowNumber > 0 ) {
        if( !sheets[x][rowNumber] ) {
          sheets[x][rowNumber] = []
        }
        sheets[x][rowNumber][n.replace( rowNumber, '' )] = workSheets[x][n].v
      }
    }
  }
  return sheets
}
