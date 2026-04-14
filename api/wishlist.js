let wishlist = [];
let id = 1;

function getAll() {
    return wishlist;
}

function add(data) {
    if (!data?.name) {
        return null;
    }

    const item = {
        id: id++,
        name: data.name
    };

    wishlist.push(item);
    return item;
}

function remove(wishId) {
    wishlist = wishlist.filter(w => w.id !== Number(wishId));
    return { ok: true };
}

module.exports = { getAll, add, remove };