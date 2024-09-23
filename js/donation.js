
// Noakhali donate btn
const donateBtnOne = document.getElementById('donate-btn').addEventListener('click', function(){
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
    
    //History
    const div = document.createElement('div');
    div.classList.add('h-32', 'w-9/12', 'border-2', 'border-gray-400', 'flex', 'flex-col', 'justify-center', 'p-5', 'rounded-lg')
    div.innerHTML = `

    <h4 class= "text-xl font-bold mb-4">${newDonation} Taka is donated for flood at Noakhali </h4>
    <p class= "text-gray-600"> ${new Date().toLocaleDateString()} </p>
    `
    document.getElementById('transaction-history').appendChild(div);


    // p.innerText = `Added : ${newDonation} Taka is donated for flood at Noakhali`;
    // console.log(p);

    // document.getElementById('transaction-history').appendChild(p);
   }
   else {
     alert('Invalid Number');
   }
  //  // clear before history function 
  //  // noakhali
  //  const historyItem = document.createElement('div');
  //  historyItem.className = 'bg-white border-2 border-gray-600 p-4 rounded-md';

  //  historyItem.innerHTML = `
   
  //     <p class= "text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
  //     <p class= "text-xs text-gray-500"> Donate: $${newDonation.toFixed(2)}</p>
  //  `;
  //  const historyContainer = document.getElementById('transaction-history');

  //  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
   
})


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
   document.getElementById('transaction-history').classList.remove('hidden');
  
});

donationTab.addEventListener('click', function(){
  donationTab.classList.add('bg-lime-300');

  historyTab.classList.remove('bg-[#bef264]')
  historyTab.classList.add('text-gray-500');

  document.getElementById('donation-section').classList.remove('hidden');
  
  // remove transaction section
  document.getElementById('transaction-history').classList.add('hidden');
  
})
