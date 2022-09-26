document.getElementById('withdraw_btn').addEventListener('click', function(){
    const withdrawButton = document.getElementById('withdraw_box')
    const withdrawFuildElementString = withdrawButton.value
    const withdrawFuildElementNumber = parseFloat(withdrawFuildElementString);

    const withdrawFuild = document.getElementById('widthdraw_total');
    const withdrawFuildString = withdrawFuild.innerText;
    const withdrawFuildNumber = parseFloat(withdrawFuildString)
    const newWithdrawFuild = withdrawFuildElementNumber;
    withdrawFuild.innerText = newWithdrawFuild + withdrawFuildNumber; 


    const totalBlance = document.getElementById('blance_total');
    const totalBlanceString = totalBlance.innerText;
    const totalBlanceNumber = parseFloat(totalBlanceString);
    const totalCurrentBlance = totalBlanceNumber -  withdrawFuildElementNumber;
    totalBlance.innerText = totalCurrentBlance

        withdrawButton.value = '';
})