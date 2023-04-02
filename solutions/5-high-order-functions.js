import _ from 'lodash';

// BEGIN
const takeOldest = (users, count = 1) => {
    return _.sortBy(users, (user) => Date.parse(user.birthday)).slice(0, count);
}
export default takeOldest;
// END