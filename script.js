const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'acdea67ac0msh471ca1527e7d323p1d80a6jsnfd7e76ea2376',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};


async function puneeth(){
    const response=await fetch(url,options)
    const data=await response.json();

    console.log(data)
console.log(data[0])

}
puneeth();
