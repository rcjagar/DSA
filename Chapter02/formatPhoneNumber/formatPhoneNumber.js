function formatPhoneNumber(number){
  // Split the comma-separated string into an array
  const digits = number.split(',')
  const areaCode = digits.slice(0, 3).join('')
  const prefix = digits.slice(3, 6).join('')
  const identitycode = digits.slice(6).join('')
  return `(${areaCode})${prefix}-${identitycode}`
}

module.exports = formatPhoneNumber