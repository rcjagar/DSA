function formatPhoneNumber(number){
// split and join the 0 to 3
const areaCode = number.slice(0, 3).join('')
const prifix = number.slice(3, 6).join('')
const identitycode = number.slice(6).join('')
return `(${areaCode})${prifix}-${identitycode}`
}

module.exports = formatPhoneNumber