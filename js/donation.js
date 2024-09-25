const div = document.createElement('div');
const mainBalance = parseFloat(document.getElementById('donation-decrease').innerText);
// Noakhali donate btn
// step 1
const donateBtnOne = document.getElementById('donate-btn').addEventListener('click', function(){
   const noakhaliDonationInput = parseFloat(document.getElementById('donation-input-noakhali').value);
   console.log(noakhaliDonationInput);

   if(noakhaliDonationInput >= 0 && !isNaN(noakhaliDonationInput) && noakhaliDonationInput <= mainBalance){

    const balance = parseFloat(document.getElementById('donation-increase').innerText);

    console.log(balance);

    const newDonation = balance + noakhaliDonationInput;

    document.getElementById('donation-increase').innerText = newDonation;
    //  step 6
    
    //step 7
    const newMainBalance = mainBalance - noakhaliDonationInput;
    document.getElementById('donation-decrease').innerText = newMainBalance;
    
    //History - step - 8
    const div = document.createElement('div');
    div.classList.add( 'w-full', 'border-2', 'border-gray-400', 'flex', 'flex-col', 'justify-center', 'p-5', 'rounded-lg', 'mt-20')
    div.innerHTML = `

    <h4 class= "text-xl font-bold mb-3">${noakhaliDonationInput} Taka is donated for flood at Noakhali </h4>
    <p class= "text-gray-600"> ${Date()} </p>
    `
    document.getElementById('transaction-history').appendChild(div);

   }
   else {
     alert('Invalid Number');
     return;
   }
   my_modal_1.showModal();
})
// Donation button end

// feni donate btn
const donateBtnFeni = document.getElementById('donate-btn-feni').addEventListener('click', function(){
  const feniDonationInput = parseFloat(document.getElementById('feni-donation-input').value);
  console.log(feniDonationInput);

  if(feniDonationInput >= 0 && !isNaN(feniDonationInput) && feniDonationInput <= mainBalance){

   const balance = parseFloat(document.getElementById('feni-donation-increase').innerText);

   console.log(balance);

   const newDonationFeni = balance + feniDonationInput;

   document.getElementById('feni-donation-increase').innerText = newDonationFeni;
   //  step 6
   
   //step 7
   const newMainBalance = mainBalance - feniDonationInput;
   document.getElementById('donation-decrease').innerText = newMainBalance;

    //History - step - 8
    const div = document.createElement('div');
    div.classList.add('w-full', 'border-2', 'border-gray-400', 'flex', 'flex-col', 'justify-center', 'p-5', 'rounded-lg')
    div.innerHTML = `

    <h4 class= "text-xl font-bold mb-3">${feniDonationInput} Taka is donated for Flood Relief in Feni,Bangladesh </h4>
    <p class= "text-gray-600"> ${Date()}  </p>
    `
    document.getElementById('history-feni').appendChild(div);

  }
  else {
    console.log('Invalid Input');
    return;
  }
  my_modal_2.showModal();
});

// Donation button end


/* Quota Donate Button */
// step-1
const donateBtnQuota = document.getElementById('donate-btn-quota').addEventListener('click', function(){
  console.log('quota activated');

  // step-2
  const quotaDonationInput = parseFloat(document.getElementById('quota-donation-input').value);
  console.log(quotaDonationInput);

  //step-3 if and else
  if(quotaDonationInput >= 0 && !isNaN(quotaDonationInput) && quotaDonationInput <= mainBalance){

    //step-4
    const quotaBalance = parseFloat(document.getElementById('quota-donation-increase').innerText);
    console.log(quotaBalance);

    //step - 5
    const newQuotaDonation = quotaBalance + quotaDonationInput;

    document.getElementById('quota-donation-increase').innerText = newQuotaDonation;
    
    //step - 6
  

    //step 7
    const newMainBalance = mainBalance - quotaDonationInput;
    document.getElementById('donation-decrease').innerText = newMainBalance;

    //History - step - 8
    const div = document.createElement('div');
    div.classList.add( 'w-full', 'border-2', 'border-gray-400', 'flex', 'flex-col', 'justify-center', 'p-5', 'rounded-lg')
    div.innerHTML = `

    <h4 class= "text-xl font-bold mb-3">${quotaDonationInput} Taka is Aid for Injured in the Quota Movement </h4>
    <p class= "text-gray-600"> ${Date()} </p>
    `
    document.getElementById('quota-history').appendChild(div);
  }
  else {
    console.log('Invalid Input');
  }
  my_modal_3.showModal();
});

/* Button end */



// History tab functionality

const historyTab = document.getElementById('history-btn');
const donationTab = document.getElementById('donation-btn');

historyTab.addEventListener('click', function () {
  historyTab.classList.add('bg-[#bef264]' );

  donationTab.classList.remove('bg-lime-300');
  donationTab.classList.add('text-gray-500');

   
  // hide donation section
  document.getElementById('donation-section').classList.add('hidden');

   // add transaction section
  //  document.getElementById('transaction-history').classList.remove('hidden');
   document.getElementById('trans-history').classList.remove('hidden');
  
  
  
});

//donation tab functionality

donationTab.addEventListener('click', function(){
  donationTab.classList.add('bg-lime-300');

  historyTab.classList.remove('bg-[#bef264]');
  historyTab.classList.add('text-gray-500');

  document.getElementById('donation-section').classList.remove('hidden');
  
  document.getElementById('trans-history').classList.add('hidden');

  //remove modal

  
});
