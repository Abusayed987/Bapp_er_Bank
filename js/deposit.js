// step:01 onclick a button
document.getElementById('deposit_btn').addEventListener('click', function () {
    // step:02 connect with input fuild
    const depositFuild = document.getElementById('deposit_box');
    // step :03 set value from input Fuild (.value)
    const newDepositAmmountString = depositFuild.value;
    // step:04 depositFuild string from number
    const newDepositAmmountNumber = parseFloat(newDepositAmmountString);
    depositFuild.value = '';
    if (isNaN(newDepositAmmountNumber)) {
        alert('Please provide a valid Number ');
        return;
    }
    // step:05 connect with input fuild 
    const depositTotalAmmount = document.getElementById('deposit_total');
    // step :06 set element from tag (.innerText)
    const previousDepositTotalString = depositTotalAmmount.innerText;
    // step:07 depositFuild string from number
    const previousDepositTotalNumber = parseFloat(previousDepositTotalString);
    // step 08: added total valu ( Input-number +  tag-number) 
    const CurrentTotalDeposit = newDepositAmmountNumber + previousDepositTotalNumber;
    //step 09 : set total value in deposit fuild
    depositTotalAmmount.innerText = CurrentTotalDeposit;


    // step:10 connect with blance total
    const totalBlance = document.getElementById('blance_total');
    //step:11 set blance total in buttton
    const totalBlanceString = totalBlance.innerText;
    // step:12  string to number convert 
    const totalBlanceNumber = parseFloat(totalBlanceString);

    const totalCurrentBlance = totalBlanceNumber + newDepositAmmountNumber;

    totalBlance.innerText = totalCurrentBlance;

    // totalBlance.innerText = totalCurrentBlance;


})
