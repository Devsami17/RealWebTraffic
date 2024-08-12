const rangeSlider = document.getElementById("priceRange"),
    selectedAmount = document.getElementById("selectedAmount"),
    amounts = ['5,000', '10,000', '15,000', '20,000', '25,000', '30,000', '35,000'],
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
    selectedAmount.textContent = `${amounts[e]} - emails/month`;

    // Set pricing amount based on selected amount
    if (amounts[e] === '5,000') {
        document.getElementById("pricing-amount").innerHTML = '$16.7';
    }else if(amounts[e] === '10,000'){
        var a = 16.7*2;
        document.getElementById("pricing-amount").innerHTML = `$${a}`;
    }else if(amounts[e] === '15,000'){
        var a = 16.7*3;
        document.getElementById("pricing-amount").innerHTML = `$${50.1}`;
    }
    else if(amounts[e] === '20,000'){
        var a = 16.7*4;
        document.getElementById("pricing-amount").innerHTML = `$${a}`;
    }
    else if(amounts[e] === '25,000'){
        var a = 16.7*5;
        document.getElementById("pricing-amount").innerHTML = `$${a}`;
    }
    else if(amounts[e] === '30,000'){
        var a = 16.7*6;
        document.getElementById("pricing-amount").innerHTML = `$${100}`;
    }
    else if(amounts[e] === '35,000'){
        var a = 16.7*7;
        document.getElementById("pricing-amount").innerHTML = `$${116}`;
    }

     else {
        document.getElementById("pricing-amount").innerHTML = `${amounts[e]}`;
    }

    document.getElementById("pricing-amount-2").innerHTML = `${amounts[e]}`;
    
    let t = e / (amounts.length - 1) * 100;
    rangeSlider.style.background = `linear-gradient(to right, var(--main) 0%, var(--main) ${t}%, #6a90b159 ${t}%, #6a90b159 100%)`;
});

// Initial display setup
selectedAmount.textContent = `${amounts[rangeSlider.value]} - emails/month`;
const initialIndex = parseInt(rangeSlider.value),
    initialPercentage = initialIndex / (amounts.length - 1) * 100;
rangeSlider.style.background = `linear-gradient(to right,var(--main) 0%, var(--main) ${initialPercentage}%, #6a90b159 ${initialPercentage}%, #6a90b159 100%)`;

// Additional DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
    let e = document.querySelectorAll(".plan-selector button"),
        t = document.getElementById("recommanded-section"),
        s = document.getElementById("package-name"),
        o = {
            "website-dev-btn": [{
                text: "Daily email volume (marketing & transactional)",
                description: "Upgrade to remove daily sending limit."
            }, {
                text: "SMS & WhatsApp campaigns",
                description: "Price based on volume and destination of messages."
            }, {
                text: "Email credits",
                description: "Price based on monthly email volume."
            }, {
                text: "Dedicated IP",
                description: "Billed annually."
            }],
            "crm-erp-dev-btn": [{
                text: "SMS & WhatsApp campaigns",
                description: "Price based on volume and destination of messages."
            }, {
                text: "Email credits",
                description: "Price based on monthly email volume."
            }, {
                text: "Dedicated IP",
                description: "Billed annually."
            }],
            "app-dev-btn": [{
                text: "Push Notifications",
                description: "$9.00/month per additional 10,000 push notifications."
            }, {
                text: "SMS & WhatsApp campaigns",
                description: "Price based on volume and destination of messages."
            }, {
                text: "Marketing users",
                description: "$10.80/month per additional user."
            }, {
                text: "Dedicated IP",
                description: "Billed annually."
            }, {
                text: "Email credits",
                description: "Price based on monthly email volume."
            }]
        },
        i = o["crm-erp-dev-btn"];
    t.innerHTML = "";
    i.forEach(e => {
        let s = document.createElement("div");
        s.classList.add("recommanded-items");
        s.innerHTML = `
            <div>
                <p>${e.text}</p>
                <span>${e.description}</span> 
            </div>
            <a href="/pricing" class="d-flex justify-content-normal align-items-center gap-1">
                <span>See pricing table</span>
                <img src="features.svg" alt="not found" loading="lazy" style="height=17px !important;width:17px !important">
            </a>
        `;
        t.appendChild(s);
    });

    e.forEach(i => {
        i.addEventListener("click", function() {
            let i = this.id,
                a = o[i],
                r = this.querySelector("h5").innerText;
            s.textContent = r;
            t.innerHTML = "";
            a.forEach(e => {
                let s = document.createElement("div");
                s.classList.add("recommanded-items");
                s.innerHTML = `
                    <div>
                        <p>${e.text}</p>
                        <span>${e.description}</span> 
                    </div>
                    <a href="/pricing" class="d-flex justify-content-normal align-items-center gap-1">
                        <span>See pricing table</span>
                        <img src="features.svg" style="height=17px !important;width:17px !important">
                    </a>
                `;
                t.appendChild(s);
            });
            e.forEach(e => e.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-link');
    const contentSections = document.querySelectorAll('.pricing-card-main');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Hide all content sections
            contentSections.forEach(section => section.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show the corresponding content sections
            const tabId = this.getAttribute('data-tab');
            contentSections.forEach(section => {
                if (section.classList.contains(`${tabId}-content`)) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Initialize the first tab as active
    const initialTab = document.querySelector('.tab-link.active');
    if (initialTab) {
        const initialTabId = initialTab.getAttribute('data-tab');
        contentSections.forEach(section => {
            if (section.classList.contains(`${initialTabId}-content`)) {
                section.classList.add('active');
            }
        });
    }
});