const accountId = 100100
let accountEmail = "h@google.com"
var accountPassword = "12345"
accountCity = "dilli"
let accountState;

// accountId = 2; // now allowed as constant

accountEmail = "hj@google.com"
accountPassword = "12345678"
accountCity = "bengaluru"

console.log(accountId);

// prefer not to use var
// because of issues in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
