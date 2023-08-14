const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHander(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    console.log(enteredAddress);
}

form.addEventListener('submit', searchAddressHander);

