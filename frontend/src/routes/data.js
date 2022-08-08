
/**
 * @param {any} timelogs
 */
async function getTimelogs(timelogs) {
    const response = await fetch('http://localhost:8002/api/timelogs', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    });
    timelogs = await response.json();
    return timelogs;
}
export { getTimelogs }