// BEGIN
const getChildren = (users) => {
    let userChildren = users.map(user => user.children)
    return userChildren.flat();
}

export default getChildren;
// END