export default async function GetInfo() {
  const url = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_yankees'
  const requestType = 'GET'
  const response = await fetch(url, {
    method: requestType,
    headers: {
      'Content-Type': 'text/plain',
    }
  })
  const res = await response.json()
  if (res && response.ok) {
    // console.log(res)
    return res.teams[0]
  } else {
    console.log('error', res)
  }
}