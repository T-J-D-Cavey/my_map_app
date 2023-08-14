import axios from 'axios';
import {API_KEY as GOOGLE_API_KEY} from './api';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHander(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
    .then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    })
}

form.addEventListener('submit', searchAddressHander);
 
