// heart count

let count = 0; 
const counter = document.getElementById("heartCounter");
const countSpan = document.getElementById("count");

counter.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});

// 
// call function 
const callBtns = document.getElementsByClassName("call-btn");

 for (const callBtn of callBtns){

    callBtn.addEventListener('click',function(){
        const callCoins = document.getElementById('call-coin').innerText;
        const serviceTitle =  callBtn.parentNode.parentNode.children[0].innerText;
        const serviceNumber = callBtn.parentNode.parentNode.children[2].innerText;
      

        if(callCoins < 20){
            alert('You don\'t have enough coins.');
            return;
        }
        const newCallCoin = Number(callCoins) - 20;;

        
        alert(`📞 Calling ${serviceTitle} ${serviceNumber}...`)
        
        document.getElementById('call-coin').innerText = newCallCoin;
          const callHistory = document.getElementById('call-history-part2');

        const callHistoryCreate = document.createElement('div');

        callHistoryCreate.innerHTML = `
            <div class="card-item bg-[#fafafa] rounded-lg p-3 flex justify-between items-center mt-3">

                <div class="w-2/3">
                    <h2 class="font-bold ">${serviceTitle} </h2>
                    <p class="text-[#5c5c5c]">${serviceNumber}</p>
                </div>

                <div >
                    <p class="text-[#111111] ">${ new Date().toLocaleTimeString() }</p> 
                </div>
            </div>
        `;

        callHistory.appendChild(callHistoryCreate);
    })
}
document.getElementById('clear-history').addEventListener('click',function(){
    document.getElementById('call-history-part2').innerHTML = '';
});


// // Copy Function
const copyBtns = document.getElementsByClassName('copy-btn');

for(const copyBtn of copyBtns){
    copyBtn.addEventListener('click',function(){
        const copyCount = document.getElementById('copy-count').innerText;
        
        const newCopyCount = Number(copyCount)+1;

        document.getElementById('copy-count').innerText = newCopyCount;

        const ServiceNumber = copyBtn.parentNode.parentNode.children[2].innerText;
        
        const copied = navigator.clipboard.writeText(ServiceNumber);
        
        if(copied){
            alert(`The Number is Copied ${ServiceNumber}`)
        }
        else{
            alert('The Number is not Copied')
        }

    })
}