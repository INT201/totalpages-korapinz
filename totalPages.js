const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if(arrayItems===undefined||arrayItems===null)
    return undefined
  if(rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0)
    return 1
    const items = arrayItems.length
    return Math.ceil(items/rowsPerPage)
  
}

module.exports = totalPages

