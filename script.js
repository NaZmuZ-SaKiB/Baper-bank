// ---------------------
// Nav Log in/ out functionality
// ---------------------

if (document.getElementById('dashboard').style.display === 'block') {
    const navLink = document.getElementById('nav-link');
    navLink.innerText = 'Log out';
} else {
    document.getElementById('nav-link').innerText = 'Log in';
}

document.getElementById('nav-link').addEventListener('click', () => {
    if (document.getElementById('dashboard').style.display === 'block') {
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
        navLink.innerText = 'Log in';
    }
})

// ---------------------
// Log in functionality
// ---------------------

document.getElementById('log-in-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;

    if (email.length !== 0 && password.length !== 0) {
        if (email === 'sakib@gmail.com' && password === '123456') {
            const form = document.getElementById('login-form');
            const dashBoard = document.getElementById('dashboard');
            form.style.display = 'none';
            dashBoard.style.display = 'block';
        }
        else {
            alert('Wrong email or password')
        }
    }
    else {
        alert('Enter both Email and Password to Log in')
    }
});

// -----------------------
//  Deposit functionality
// -----------------------

document.getElementById('deposit-btn').addEventListener('click', () => {
    const inputAmmount = parseFloat(document.getElementById('diposit').value);

    if (!isNaN(inputAmmount)) {
        // functionality
        const currentDeposit = parseFloat(document.getElementById('deposit-ammount').innerText);
        const currentBalance = parseFloat(document.getElementById('balance-ammount').innerText);
        const finalAmmount = currentDeposit + inputAmmount;

        // output
        document.getElementById('diposit').value = '';
        document.getElementById('deposit-ammount').innerText = finalAmmount;
        document.getElementById('balance-ammount').innerText = currentBalance + inputAmmount;
    }
    else {
        document.getElementById('diposit').value = '';
    };
})

// -------------------------
//  Withdraw functionality
// -------------------------

document.getElementById('withdraw-btn').addEventListener('click', () => {
    const inputAmmount = parseFloat(document.getElementById('withdraw').value);
    const currentBalance = parseFloat(document.getElementById('balance-ammount').innerText);

    if (!isNaN(inputAmmount) && currentBalance >= inputAmmount) {
        // functionality
        const currentWithdraw = parseFloat(document.getElementById('withdraw-ammount').innerText);
        const finalAmmount = currentWithdraw + inputAmmount;

        // output
        document.getElementById('withdraw').value = '';
        document.getElementById('withdraw-ammount').innerText = finalAmmount;
        document.getElementById('balance-ammount').innerText = currentBalance - inputAmmount;
    }
    else if (currentBalance < inputAmmount) {
        alert('! Not Enough Balance.');
        document.getElementById('withdraw').value = '';
    }
    else {
        document.getElementById('withdraw').value = '';
    }
})