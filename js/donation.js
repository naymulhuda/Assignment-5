const div = document.createElement('div');
// Noakhali donate btn
const donateBtnOne = document.getElementById('donate-btn').addEventListener('click', function(){
   const noakhaliDonationInput = parseFloat(document.getElementById('donation-input-noakhali').value);
   console.log(noakhaliDonationInput);

   if(noakhaliDonationInput >= 0){

    const balance = parseFloat(document.getElementById('donation-increase').innerText);

    console.log(balance);

    const newDonation = balance + noakhaliDonationInput;

    document.getElementById('donation-increase').innerText = newDonation;
    //  step 6
    const mainBalance = parseFloat(document.getElementById('donation-decrease').innerText);
    //step 7
    const newMainBalance = mainBalance - noakhaliDonationInput;
    document.getElementById('donation-decrease').innerText = newMainBalance;
    
    //History - step - 8
    const div = document.createElement('div');
    div.classList.add('h-32', 'w-9/12', 'border-2', 'border-gray-400', 'flex', 'flex-col', 'justify-center', 'p-5', 'rounded-lg')
    div.innerHTML = `

    <h4 class= "text-xl font-bold mb-4">${noakhaliDonationInput} Taka is donated for flood at Noakhali </h4>
    <p class= "text-gray-600"> ${new Date().toLocaleDateString()} </p>
    `
    document.getElementById('transaction-history').appendChild(div);

   }
   else {
     alert('Invalid Number');
   }
})
// Donation button end

// feni donate btn
// step-1
const donateBtnFeni = document.getElementById('donate-btn-feni').addEventListener('click', function(){
  console.log('feni activated');
  // step-2
  const feniDonationInput = parseFloat(document.getElementById('feni-donation-input').value);
  console.log(feniDonationInput);

  //step-3 if and else
  if(feniDonationInput >= 0){

    //step-4
    const feniBalance = parseFloat(document.getElementById('feni-donation-increase').innerText);
    console.log(feniBalance);

    //step - 5
    const newFeniDonation = feniBalance + feniDonationInput;

    document.getElementById('feni-donation-increase').innerText = newFeniDonation;

    //step - 6
    const mainBalance = parseFloat(document.getElementById('donation-decrease').innerText);

    //step 7
    const newMainBalance = mainBalance - feniDonationInput;
    document.getElementById('donation-decrease').innerText = newMainBalance;

    //History - step - 8
    const div = document.createElement('div');
    div.classList.add('h-32', 'w-9/12', 'border-2', 'border-gray-400', 'flex', 'flex-col', 'justify-center', 'p-5', 'rounded-lg')
    div.innerHTML = `

    <h4 class= "text-xl font-bold mb-4">${feniDonationInput} Taka is donated for Flood Relief in Feni,Bangladesh </h4>
    <p class= "text-gray-600"> ${new Date().toLocaleDateString()} </p>
    `
    document.getElementById('history-feni').appendChild(div);

  }
  else {
    console.log('Invalid Input');
  }
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
  if(quotaDonationInput >= 0 && !isNaN(quotaDonationInput) ){

    //step-4
    const quotaBalance = parseFloat(document.getElementById('quota-donation-increase').innerText);
    console.log(quotaBalance);

    //step - 5
    const newQuotaDonation = quotaBalance + quotaDonationInput;

    document.getElementById('quota-donation-increase').innerText = newQuotaDonation;
    
    //step - 6
    const mainBalance = parseFloat(document.getElementById('donation-decrease').innerText);

    //step 7
    const newMainBalance = mainBalance - quotaDonationInput;
    document.getElementById('donation-decrease').innerText = newMainBalance;

    //History - step - 8
    const div = document.createElement('div');
    div.classList.add('h-32', 'w-9/12', 'border-2', 'border-gray-400', 'flex', 'flex-col', 'justify-center', 'p-5', 'rounded-lg')
    div.innerHTML = `

    <h4 class= "text-xl font-bold mb-4">${quotaDonationInput} Taka is Aid for Injured in the Quota Movement </h4>
    <p class= "text-gray-600"> ${new Date().toLocaleDateString()} </p>
    `
    document.getElementById('quota-history').appendChild(div);
  }
  else {
    console.log('Invalid Input');
  }
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
  
});
