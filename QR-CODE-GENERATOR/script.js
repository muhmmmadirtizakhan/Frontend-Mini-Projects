let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");

function generateqr() {
    if (qrtext.value.length > 0) {
      
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext.value);
        
        
        imgbox.classList.add("show-img");
        
        
        qrimage.onload = function() {
            console.log("QR Code generated successfully!");
        };
        
        qrimage.onerror = function() {
            alert("Failed to generate QR code. Please try again.");
        };
    } else {
        qrtext.classList.add('error');
        setTimeout(() => {
            qrtext.classList.remove('error');
        }, 1000);
    }
}
qrtext.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generateqr();
    }
});