// написати просту random гру
// додати баланс юзеру, та зміну кольорів

// console.log(1);
//
// setTimeout(() => {
//     console.log(2);
// }, 0)
//
// console.log(3);
const input = document.querySelector('#bet')
const button = document.querySelector('button');
const balanceArea = document.querySelector('#balance');
const resultArea = document.querySelector('#result')
const user = {
    name: 'John',
    balance: 1000,
    updateBalance (value) {
        this.balance += value;
    }
}
balanceArea.textContent = user.balance.toString()

button.addEventListener('click', () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(true)
            } else {
                reject(false)
            }
        }, 1000)
    });

    promise
        .then(onResolve, onReject)
})

function onResolve (result) {
    const inputValue = +input.value;

    user.updateBalance(inputValue)

    balanceArea.style.color = 'green';
    updateBalanceOnScreen(user.balance);
    updateResultMessage(result);
}

function onReject (result) {
    const inputValue = +input.value;
    user.updateBalance(-inputValue)
    updateBalanceOnScreen(user.balance);
    balanceArea.style.color = 'red';
    updateResultMessage(result);
}

function updateBalanceOnScreen (value) {
    balanceArea.textContent = value;
}

function updateResultMessage (isSuccess) {
    if (isSuccess) {
        resultArea.textContent = 'You won';
        resultArea.style.color = 'green';
    } else {
        resultArea.textContent = 'You lose';
        resultArea.style.color = 'red';
    }
}

// const showResult = value => {
//     alert(value);
// }

// promise
//     .then(showResult, showResult)
