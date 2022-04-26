import axios from 'axios'

const Events_ENDPOINT = 'http://localhost:3000/api/events'

export async function fetchEvents (){
    let error = false
    const data = await axios.get(Events_ENDPOINT).then(res => res.data).catch(error => error = true)
    return {
        events: data,
        isLoading: !error && !data,
        isError: error
    }
}

export async function fetchEventsBySearch (){
    let error = false
    const results = await axios.get(Events_ENDPOINT).then(res => res.data).catch(error => error = true)
    
    const data = results[1].content

    return {
        events: data.concat(results[2].content, results[3].content),
        isLoading: !error && !data,
        isError: error
    }
}


