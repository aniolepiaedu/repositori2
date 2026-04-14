let history = [];
let id = 1;

function getAll() {
    return history;
}

function add(data) {
    if (!data?.country) {
        return null;
    }

    const item = {
        id: id++,
        country: data.country,
        date: new Date().toLocaleString()
    };

    history.push(item);
    return item;
}

module.exports = { getAll, add };