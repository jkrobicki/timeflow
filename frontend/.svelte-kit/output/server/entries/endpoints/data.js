async function getTimelogs(timelogs) {
  const response = await fetch("http://localhost:8002/api/timelogs/", {
    method: "GET",
    headers: { "Content-type": "application/json" }
  });
  timelogs = await response.json();
  return timelogs;
}
async function getUsers() {
  const response = await fetch("http://localhost:8002/api/users/", {
    method: "GET",
    headers: { "Content-type": "application/json" }
  });
  let users = await response.json();
  return users;
}
async function getEpics() {
  const response = await fetch("http://localhost:8002/api/epics/", {
    method: "GET",
    headers: { "Content-type": "application/json" }
  });
  let epics = await response.json();
  return epics;
}
async function getEpicAreas() {
  const response = await fetch("http://localhost:8002/api/epic_areas/", {
    method: "GET",
    headers: { "Content-type": "application/json" }
  });
  let epicAreas = await response.json();
  return epicAreas;
}
async function getCapacities(capacities) {
  const response = await fetch("http://localhost:8002/api/capacities/", {
    method: "GET",
    headers: { "Content-type": "application/json" }
  });
  capacities = await response.json();
  return capacities;
}
async function getClients() {
  const response = await fetch("http://fastapi:8002/api/clients/", {
    method: "GET",
    headers: { "Content-type": "application/json" }
  });
  let clients = await response.json();
  return clients;
}
async function getSponsors() {
  const response = await fetch("http://localhost:8002/api/sponsors/", {
    method: "GET",
    headers: { "Content-type": "application/json" }
  });
  let sponsors = await response.json();
  return sponsors;
}
async function getTeams() {
  const response = await fetch("http://localhost:8002/api/teams/", {
    method: "GET",
    headers: { "Content-type": "application/json" }
  });
  let teams = await response.json();
  return teams;
}
async function getRoles() {
  const response = await fetch("http://localhost:8002/api/roles/", {
    method: "GET",
    headers: { "Content-type": "application/json" }
  });
  let roles = await response.json();
  return roles;
}
export {
  getCapacities,
  getClients,
  getEpicAreas,
  getEpics,
  getRoles,
  getSponsors,
  getTeams,
  getTimelogs,
  getUsers
};
