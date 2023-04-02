// BEGIN
const convert = (...dates) => {
    return dates.map(element => {
        let date = new Date(...element)
        let stringDate = date.toDateString();
        return stringDate;
    });
}

export default convert;
// END