// Helper Functions
function formatTime(time24) {
    const [hours, minutes] = time24.split(':');
    let hour = parseInt(hours);
    const ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${hour}${minutes === '00' ? '' : ':' + minutes}${ampm}`;
}

function capitalizeEachWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// Bar Data
const barsData = [
    {
        name: "Lazy Lizard",
        location: "West",
        address: "2 Sixth Ave, Singapore 276470",
        happyHourStart: "15:00",
        happyHourEnd: "20:00",
        drinks: ["beers"],
        priceRange: {
            min: 11,
            max: 14
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://lazylizard.com.sg/"
    },
    {
        name: "Chico Loco",
        location: "Central",
        address: "102 Amoy St, Singapore 069922",
        happyHourStart: "12:00",
        happyHourEnd: "19:00",
        drinks: ["cocktails", "wines"],
        priceRange: {
            min: 9,
            max: 10
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        url: "https://super-loco.com/chicoloco", 
    },
    {
        name: "Offtrack",
        location: "Central",
        address: "34 N Canal Rd, Singapore 059290",
        happyHourStart: "17:00",
        happyHourEnd: "19:00",
        drinks: ["cocktails", "wines", "beers"],
        priceRange: {
            min: 12,
            max: 16
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], 
        url: "https://www.offtrack.sg/",
    },
    {
        name: "Southbridge",
        location: "Central",
        address: "80 Boat Quay, Level 5, Singapore 049868",
        happyHourStart: "17:00",
        happyHourEnd: "20:00",
        drinks: ["wines", "beers", "spirits"],
        priceRange: {
            min: 10,
            max: 24
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        url: "https://www.southbridge.sg/", 
    },
    {
        name: "Bones 'n Barrels",
        location: "South",
        address: "438 B Alexandra Road, 01-01 Alexandra Technopark, Block B, 119968",
        happyHourStart: "11:30",
        happyHourEnd: "20:00",
        drinks: ["wines", "beers"],
        priceRange: {
            min: 5,
            max: 8
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        url: "https://www.bonesnbarrels.com/index.html", 
    },
    {
        name: "Malthouse",
        location: "East",
        address: "685 E Coast Rd, Singapore 459054",
        happyHourStart: "12:00",
        happyHourEnd: "20:00",
        drinks: ["beers"],
        priceRange: {
            min: 10,
            max: 15
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.malthouse.sg/", 
    },
    {
        name: "Almost Famous",
        location: "Central",
        address: "30 Victoria St, #01-06, Singapore 187996",
        happyHourStart: "17:00",
        happyHourEnd: "19:00",
        drinks: ["beers"],
        priceRange: {
            min: 10,
            max: 15
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        url: "https://almostfamous.sg/",
    },
    {
        name: "Lucha Loco",
        location: "Central",
        address: "15 Duxton Hill, Singapore 089598",
        happyHourStart: "15:00",
        happyHourEnd: "19:00",
        drinks: ["cocktails", "beers", "wines", "spirits"],
        priceRange: {
            min: 9,
            max: 10
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        url: "https://super-loco.com/luchaloco",
    },
    {
        name: "The Queen and Mangosteen",
        location: "South",
        address: "1 HarbourFront Walk, #01-106/107 VivoCity, Singapore 098585",
        happyHourStart: "15:00",
        happyHourEnd: "19:00",
        drinks: ["cocktails", "beers", "wines"],
        priceRange: {
            min: 11,
            max: 13
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], 
        url: "https://queenandmangosteen.com/",
    },
    {
        name: "BERLIN BAR",
        location: "West",
        address: "1 HarbourFront Walk, #01-106/107 VivoCity, Singapore 098585",
        happyHourStart: "16:00",
        happyHourEnd: "20:00",
        drinks: ["beers"],
        priceRange: {
            min: 10,
            max: 15
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.google.com/maps/place/BERLIN+BAR/@1.3272324,103.7543397,15z/data=!4m6!3m5!1s0x31da11daff2a7377:0x7fc91ed0b90395d5!8m2!3d1.3272324!4d103.7543397!16s%2Fg%2F11vcn9vn9z?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
        name: "Crossroads Cafe",
        location: "Central",
        address: "320 Orchard Rd, Singapore Marriott Tang Plaza Hotel, Singapore 238865",
        happyHourStart: "11:00",
        happyHourEnd: "20:00",
        drinks: ["wines", "beers", "spirits"], 
        priceRange: {
            min: 13,
            max: 13
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        url: "https://www.crossroadssg.com/our-menus",
    },
    {
        name: "THE STORE SG",
        location: "Central",
        address: "11 Neil Road, Singapore 088809",
        happyHourStart: "16:00",
        happyHourEnd: "18:00",
        drinks: ["cocktails"], 
        priceRange: {
            min: 11,
            max: 11
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        url: "https://www.thestoresg.com/",
    },
    {
        name: "Brasserie Astoria",
        location: "Central",
        address: "11 Empress Place, Singapore 179558",
        happyHourStart: "15:00",
        happyHourEnd: "18:00",
        drinks: ["cocktails", "beers"], 
        priceRange: {
            min: 7,
            max: 12
        },
        days: ["Friday", "Saturday"],
        url: "https://www.brasserieastoria.sg/",
    },
    {
        name: "Employees Only",
        location: "Central",
        address: "112 Amoy St, Singapore 069932",
        happyHourStart: "17:00",
        happyHourEnd: "19:00",
        drinks: ["spirits"], 
        priceRange: {
            min: 10,
            max: 10
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        url: "http://m.employeesonlysg.com/welcome",
    },
    {
        name: "Druggists",
        location: "Central",
        address: "119 Tyrwhitt Rd, Singapore 207547",
        happyHourStart: "16:00",
        happyHourEnd: "19:00",
        drinks: ["beers"], 
        priceRange: {
            min: 12,
            max: 12
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"], 
        url: "https://www.druggists.sg/", 
    },
    {
        name: "Fatboy's the Burger Bar",
        location: "North",
        address: "187 Upper Thomson Rd, Singapore 574335",
        happyHourStart: "12:00",
        happyHourEnd: "23:00",
        drinks: ["beers"], 
        priceRange: {
            min: 10,
            max: 10
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.fatboys.sg/",
    },
    {
        name: "Zenryoku Izakaya",
        location: "North",
        address: "183 Upper Thomson Rd, #01-04, Singapore 574429",
        happyHourStart: "16:00",
        happyHourEnd: "19:00",
        drinks: ["beers", "spirits"], 
        priceRange: {
            min: 5,
            max: 10
        },
        days: ["Tuesday", "Wednesday", "Thursday"],
        url: "https://zenryoku.sg/", 
    },
    {
        name: "Beer Basket @ Kovan",
        location: "North",
        address: "1010 Upper Serangoon Rd, Singapore 534748",
        happyHourStart: "16:30",
        happyHourEnd: "19:00",
        drinks: ["beers", "wines"], 
        priceRange: {
            min: 11,
            max: 17
        },
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        url: "https://beerbasket.sg/", 
    },
];

// Display Function
function displayBars(bars) {
    const barsContainer = document.getElementById('bars');
    barsContainer.innerHTML = '';

    bars.forEach(bar => {
        const barElement = document.createElement('div');
        barElement.className = 'col';
        barElement.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h4 class="card-title mb-3">${bar.name}</h4>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <i class="bi bi-geo-alt me-2"></i>
                            <strong>Address:</strong> ${bar.address}
                        </li>
                        <li class="mb-2">
                            <i class="bi bi-pin-map me-2"></i>
                            <strong>Location:</strong> ${capitalizeEachWord(bar.location)}
                        </li>
                        <li class="mb-2">
                            <i class="bi bi-clock me-2"></i>
                            <strong>Happy Hour:</strong> ${formatTime(bar.happyHourStart)} - ${formatTime(bar.happyHourEnd)}
                        </li>
                        <li class="mb-2">
                            <i class="bi bi-calendar-week me-2"></i>
                            <strong>Days:</strong> ${bar.days.join(", ")}
                        </li>
                        <li class="mb-2">
                            <i class="bi bi-cup-straw me-2"></i>
                            <strong>Drinks:</strong> ${capitalizeEachWord(bar.drinks.join(", "))}
                        </li>
                        <li>
                            <i class="bi bi-tag me-2"></i>
                            <strong>Price Range:</strong> $${bar.priceRange.min} - $${bar.priceRange.max}
                        </li>
                    </ul>
                </div>
            </div>
        `;
        barsContainer.appendChild(barElement);
    });
}

// Price Range Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const minSlider = document.getElementById('priceMin');
    const maxSlider = document.getElementById('priceMax');
    const minDisplay = document.getElementById('minPrice');
    const maxDisplay = document.getElementById('maxPrice');

    function updatePriceDisplay() {
        minDisplay.textContent = `$${minSlider.value}`;
        maxDisplay.textContent = `$${maxSlider.value}`;
    }

    function handleSliderChange(e) {
        let minVal = parseInt(minSlider.value);
        let maxVal = parseInt(maxSlider.value);

        if (maxVal < minVal + 2) {
            if (e.target === minSlider) {
                maxSlider.value = minVal + 2;
            } else {
                minSlider.value = maxVal - 2;
            }
        }

        updatePriceDisplay();
    }

    minSlider.addEventListener('input', handleSliderChange);
    maxSlider.addEventListener('input', handleSliderChange);
});

// Filter Button Event Listener
document.getElementById("filterButton").addEventListener("click", function() {
    const locationFilter = document.getElementById("location").value;
    const startTimeFilter = document.getElementById("startTime").value;
    const endTimeFilter = document.getElementById("endTime").value;
    const drinkFilter = document.getElementById("drink").value;
    const minPrice = parseInt(document.getElementById("priceMin").value);
    const maxPrice = parseInt(document.getElementById("priceMax").value);
    
    const daysFilter = Array.from(document.querySelectorAll(".day:checked")).map(checkbox => checkbox.value);

    let filteredBars = barsData.filter(bar => {
        let showBar = true;

        // Location filter
        if (locationFilter && bar.location.toLowerCase() !== locationFilter.toLowerCase()) {
            showBar = false;
        }

        // Time filters
        if (startTimeFilter || endTimeFilter) {
            const getMinutes = (timeStr) => {
                const [hours, minutes] = timeStr.split(':').map(Number);
                return hours * 60 + minutes;
            };

            const barStartMins = getMinutes(bar.happyHourStart);
            const barEndMins = getMinutes(bar.happyHourEnd);

            if (startTimeFilter) {
                const filterStartMins = getMinutes(startTimeFilter);
                if (barStartMins > filterStartMins) {
                    showBar = false;
                }
            }

            if (endTimeFilter) {
                const filterEndMins = getMinutes(endTimeFilter);
                if (barEndMins < filterEndMins) {
                    showBar = false;
                }
            }
        }

        // Drink filter
        if (drinkFilter && !bar.drinks.includes(drinkFilter.toLowerCase())) {
            showBar = false;
        }

        // Price range filter
        if (minPrice && maxPrice) {
            if (bar.priceRange.max < minPrice || bar.priceRange.min > maxPrice) {
                showBar = false;
            }
        }

        // Days filter
        if (daysFilter.length > 0) {
            let daysMatch = daysFilter.every(selectedDay => bar.days.includes(selectedDay));
            if (!daysMatch) {
                showBar = false;
            }
        }

        return showBar;
    });

    displayBars(filteredBars);
});

// Reset Button Event Listener
document.getElementById("resetButton").addEventListener("click", function() {
    // Reset dropdowns
    document.getElementById("location").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";
    document.getElementById("drink").value = "";
    
    // Reset price range sliders
    document.getElementById("priceMin").value = 5;
    document.getElementById("priceMax").value = 30;
    document.getElementById("minPrice").textContent = "$5";
    document.getElementById("maxPrice").textContent = "$30";

    // Reset checkboxes
    document.querySelectorAll(".day").forEach(dayCheckbox => {
        dayCheckbox.checked = false;
    });

    // Display all bars
    displayBars(barsData);
});

// Initial display of all bars
window.onload = function() {
    displayBars(barsData);
};
