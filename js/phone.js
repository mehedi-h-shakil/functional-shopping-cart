function updatePhoneNumber(isIncreased) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if (isIncreased === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber) {
    const newPhonePrice = newPhoneNumber * 1219;
    const phoneTotalPrice = document.getElementById('phone-total');
    phoneTotalPrice.innerText = newPhonePrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhonePrice(newPhoneNumber);

    calculateSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhonePrice(newPhoneNumber);

    calculateSubTotal();
})