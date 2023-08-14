import axios from 'axios';
import {API_KEY as GOOGLE_API_KEY} from './api';

type GoogleGeocodingResponse = {
    results: {geometry: {location: {lat: number, lng: number}}}[];
    status: 'OK' | 'ZERO_RESULTS' | 'INVALID_REQUEST' | 'UNKNOWN_ERROR' | 'REQUEST_DENIED';
}

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHander(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
    .then(response => { 
        if(response.data.status !== 'OK') {
            throw new Error(`${response.data.status}`);
        }
        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map")!, {
            center: coordinates,
            zoom: 12,
          });
        new google.maps.Marker({position: coordinates, map: map})
    }).catch(err => {
        alert(err);
    })
}

form.addEventListener('submit', searchAddressHander);
 
