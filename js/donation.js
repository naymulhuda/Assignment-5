const donateBtnOne = document.getElementById('donate-btn-noakhali').addEventListener('click', function(){
   const noakhaliDonationInput = parseFloat(document.getElementById('donation-input-noakhali').value);
   console.log(noakhaliDonationInput);

   if(noakhaliDonationInput >= 0){

    const balance = parseFloat(document.getElementById('donation-increase').innerText);

    console.log(balance);

    const newDonation = balance + noakhaliDonationInput;

    document.getElementById('donation-increase').innerText = newDonation;
   }
   else {
     alert('Invalid Number');
   }

   
   
})
