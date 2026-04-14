let favorites = [];
let id = 1;

function getAll() {
    return favorites;
}

function add(data) {
    if (!data?.name) {
        return null;
    }

    const item = {
        id: id++,
        name: data.name
    };

    favorites.push(item);
    return item;
}

function remove(favId) {
    favorites = favorites.filter(f => f.id !== Number(favId));
    return { ok: true };
}

module.exports = { getAll, add, remove };