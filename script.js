let btn = document.querySelector("button");
let ipt = document.querySelector("input");
btn.addEventListener("click", async (dets) => {
    try {
        await navigator.clipboard.writeText(ipt.value);
        btn.textContent = "Copied!"
        setTimeout(() => {
            btn.textContent = "Copy";
        }, 2000);
    } catch {
        console.log("something went wrong!");
    }
})