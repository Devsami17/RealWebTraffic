const rangeSlider = document.getElementById("priceRange"),
    selectedAmount = document.getElementById("selectedAmount"),
    amounts = ['5,000', '10,000', '15,000', '20,000', '25,000', '30,000', '35,000','40,000','45,000','50,000','75,000','100,000'],
    rangeTicksContainer = document.querySelector(".range-ticks");

// Initialize the range slider
rangeTicksContainer.innerHTML = "";
rangeSlider.setAttribute("max", amounts.length - 1);
amounts.forEach((e, t) => {
    let s = document.createElement("div");
    s.className = "range-tick-label";
    s.textContent = `${e}`;
    s.style.left = `${t / (amounts.length - 1) * 100}%`;
    rangeTicksContainer.appendChild(s);
});

// Event listener for range slider input
rangeSlider.addEventListener("input", function() {
    let e = parseInt(rangeSlider.value);
    selectedAmount.textContent = `${amounts[e]} - Amount Of Traffic`;

    // Set pricing amount based on selected amount
    if (amounts[e] === '5,000') {
        document.getElementById("pricing-amount").innerHTML = '$16.70';
    }else if(amounts[e] === '10,000'){
        var a = 16.70*2;
        document.getElementById("pricing-amount").innerHTML = `$33.40`;
    }else if(amounts[e] === '15,000'){
        var a = 16.70*3;
        document.getElementById("pricing-amount").innerHTML = `$50.10`;
    }
    else if(amounts[e] === '20,000'){
        var a = 16.70*4;
        document.getElementById("pricing-amount").innerHTML = `$66.80`;
    }
    else if(amounts[e] === '25,000'){
        var a = 16.70*5;
        document.getElementById("pricing-amount").innerHTML = `$83.50`;
    }
    else if(amounts[e] === '30,000'){
        var a = 16.70*6;
        document.getElementById("pricing-amount").innerHTML = `$100.00`;
    }
    else if(amounts[e] === '35,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$116.00`;
    }
    else if(amounts[e] === '40,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$133.60`;
    }
    else if(amounts[e] === '45,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$150.30`;
    }
    else if(amounts[e] === '50,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$167.00`;
    }
    else if(amounts[e] === '75,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$250.00`;
    }
    else if(amounts[e] === '100,000'){
        var a = 16.70*7;
        document.getElementById("pricing-amount").innerHTML = `$325.50`;
    }
     else {
        document.getElementById("pricing-amount").innerHTML = `${amounts[e]}`;
    }

    document.getElementById("pricing-amount-2").innerHTML = `${amounts[e]}`;
    
    let t = e / (amounts.length - 1) * 100;
    rangeSlider.style.background = `linear-gradient(to right, var(--main) 0%, var(--main) ${t}%, #6a90b159 ${t}%, #6a90b159 100%)`;
});

// Initial display setup
selectedAmount.textContent = `${amounts[rangeSlider.value]} - Amount Of Traffic`;
const initialIndex = parseInt(rangeSlider.value),
    initialPercentage = initialIndex / (amounts.length - 1) * 100;
rangeSlider.style.background = `linear-gradient(to right,var(--main) 0%, var(--main) ${initialPercentage}%, #6a90b159 ${initialPercentage}%, #6a90b159 100%)`;

