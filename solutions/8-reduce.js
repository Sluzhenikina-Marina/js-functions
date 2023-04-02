// BEGIN
const groupBy = (students, index) => {
    const result = [];
    for (let student of students) {
        if (!result[student[index]]) {
            result[student[index]] = [];
        }
        result[student[index]].push(student);
    }
    return result;
}

export default groupBy;
// END