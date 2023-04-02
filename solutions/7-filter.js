// BEGIN
const getGirlFriends = (users) => {
    let userFriends = users.map(user => user.friends).flat();
    let femaleFriends = userFriends.filter(user => user.gender === 'female');
    return femaleFriends;
}

export default getGirlFriends;
// END