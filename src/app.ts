import axios from 'axios';
import {API_KEY as GOOGLE_API_KEY} from './api';

type GoogleGeocodingResponse = {
    results: {geometry: {location: {lat: number, lng: number}}}[]
}

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHander(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
    .then(response => {
        const coordinates = response.data.results[0].geometry.location;
    }).catch(err => {
        console.log(err);
    })
}

form.addEventListener('submit', searchAddressHander);
 
