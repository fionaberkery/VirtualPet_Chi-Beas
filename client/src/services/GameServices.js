const baseURL = 'http://localhost:9000/api/monsters/'

export const getMonsters = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postMonster = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteMonster = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

