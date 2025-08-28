function getId(id) {
  const element = document.getElementById(id);
  return element;
}

const copyBtns = document.getElementsByClassName("copy-btn").innerText;

getId("contact-box").addEventListener("click", function (e) {
  //task 4
  if (e.target.className.includes("fa-heart")) {
    const heart = e.target;
    const totalHeart = getId("total-heart").innerText;
    const CurrentHeart = Number(totalHeart) + 1;
    getId("total-heart").innerText = CurrentHeart;
  }
  // task 5
  if (e.target.className.includes("call-btn")) {
    const callBtn = e.target;
    const callTitle = callBtn.parentNode.parentNode.children[0].innerText;
    const callService = callBtn.parentNode.parentNode.children[1].innerText;
    const callNumber =
      callBtn.parentNode.parentNode.children[2].children[0].innerText;

    const totalCoin = getId("total-coin").innerText;
    totalCoin - Number(totalCoin);
    if (totalCoin >= 20) {
      const CurrentCoin = Number(totalCoin) - 20;
      getId("total-coin").innerText = CurrentCoin;
      alert(`Calling ${callService} ${callNumber}...`);

      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const currentTime = `${hours}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      const historyContainer = getId("history-container");

      const newHistory = document.createElement("div");
      newHistory.innerHTML = `
            <div class="bg-neutral-50 rounded-xl flex flex-col justify-between gap-2 p-4">
                    <div class="flex flex-col min-[884px]:flex-row justify-between items-center max-[884px]:justify-start gap-2">
                      <div>
                      <h2 class="font-bold ">${callTitle}</h2>
                      <h2 class="text-gray-600">${callNumber}</h2>
                    </div>
                    <h2>${currentTime}</h2>
                    </div>
                  </div>
    `;
      historyContainer.append(newHistory);
    } else {
      alert("Insufficient balance! You need 20 coins to make a call.");
    }
  }

  // Challenge
  if (e.target.className.includes("copy-btn")) {
    const copyBtn = e.target;

    const copyNumber =
      copyBtn.parentNode.parentNode.children[2].children[0].innerText;
    console.log(copyNumber);
    navigator.clipboard
      .writeText(copyNumber)
      .then(function () {
        alert(`Number copied: ${copyNumber}`);
      })
      .catch(function (error) {
        alert("Error copying text: ", error);
      });

    const totalCopy = getId("total-copy").innerText;

    const CurrentCopy = Number(totalCopy) + 1;
    getId("total-copy").innerText = CurrentCopy;
  }
});

getId("btn-clear").addEventListener("click", function () {
  const historyContainer = getId("history-container");
  historyContainer.innerHTML = "";
});
