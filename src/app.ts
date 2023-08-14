import {API_KEY} from './api';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHander(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    console.log(enteredAddress, API_KEY);
}

form.addEventListener('submit', searchAddressHander);
 
