export const getLocalStorage = (key) => {return JSON.parse(localStorage.getItem(key))}

export const updateLocalStorage = (key, items) => {
    localStorage.setItem(key, JSON.stringify(items))
}

export const setItemToLocalStorage = (key, item) => {
    const storage = getLocalStorage(key);
    const itemId = item.id;
    if (storage) {
        storage[itemId] = item
        localStorage.setItem(key, JSON.stringify(storage));
    } else {
        storage = {}
        storage[itemId] = item
        localStorage.setItem(key, JSON.stringify(storage));
    }
}

export const deleteFromLocalStorage = (key, id) => {
    const storage = getLocalStorage(key);
    delete storage[id];
    return storage;
}
