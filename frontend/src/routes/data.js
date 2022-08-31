/**
 * @param {any} timelogs
 */
async function getTimelogs(timelogs) {
    const response = await fetch('http://localhost:8002/api/timelogs/', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    });
    timelogs = await response.json();
    return timelogs;
}
/**
 * @param {any} users
 */
async function getUsers(users) {
    const response = await fetch('http://localhost:8002/api/users/', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    });
    users = await response.json()
    return users
};
/**
 * @param {any} epics
 */
async function getEpics(epics) {
    const response = await fetch('http://localhost:8002/api/epics/', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    });
    epics = await response.json()
    return epics
};
/**
 * @param {any} epicAreas
 */
async function getEpicAreas(epicAreas) {
    const response = await fetch('http://localhost:8002/api/epic_areas/', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    });
    epicAreas = await response.json()
    return epicAreas
};
/**
 * @param {any} capacities
 */
async function getCapacities(capacities) {
    const response = await fetch('http://localhost:8002/api/capacities/', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    });
    capacities = await response.json()
    return capacities
};
async function getClients() {
    const response = await fetch('http://localhost:8002/api/clients/', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    });
    let clients = await response.json()
    return clients
};

async function getSponsors() {
    const response = await fetch('http://localhost:8002/api/sponsors/', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    });
    let sponsors = await response.json()
    return sponsors
};

export { getTimelogs, getUsers, getEpics, getEpicAreas, getCapacities, getClients, getSponsors }