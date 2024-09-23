const donateBtnOne = document.getElementById('donate-btn-noakhali').addEventListener('click', function(){
   const noakhaliDonationInput = parseFloat(document.getElementById('donation-input-noakhali').value);
   console.log(noakhaliDonationInput);

   if(noakhaliDonationInput >= 0){

    const balance = parseFloat(document.getElementById('donation-increase').innerText);

    console.log(balance);

    const newDonation = balance + noakhaliDonationInput;

    document.getElementById('donation-increase').innerText = newDonation;

    const mainBalance = parseFloat(document.getElementById('donation-decrease').innerText);

    const newMainBalance = mainBalance - noakhaliDonationInput;
    document.getElementById('donation-decrease').innerText = newMainBalance;
   }
   else {
     alert('Invalid Number');
   }
   
   
   
})


// History tab functionality

// const historyTab = document.getElementById('history-btn');
// historyTab.addEventListener('click', function () {

//   historyTab.classList.add('bg-lime-300');
// });

const historyTab = document.getElementById('history-btn');
const donationTab = document.getElementById('donation-btn');

historyTab.addEventListener('click', function () {
  historyTab.classList.add('bg-[#bef264]' );

  donationTab.classList.remove('bg-lime-300');
});

