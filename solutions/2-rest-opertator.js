import _ from 'lodash';

// BEGIN
const average = (...args) => {
    return args.length === 0 ? null : _.sum(args) / args.length
}

export default average;
// END