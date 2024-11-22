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

// Helper function to convert time to minutes for comparison
function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
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
        address: "685 East Coast Rd, Singapore 459054",
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
        location: "South",
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
    {
        name: "Tachinomiya",
        location: "North",
        address: "211 Hougang Street 21, #01-285, Singapore 530211",
        happyHourStart: "17:00",
        happyHourEnd: "19:00",
        drinks: ["beers", "sakes", "cocktails"], 
        priceRange: {
            min: 8,
            max: 15
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.tachinomiya.com.sg/", 
    },
    {
        name: "The Secret Mermaid",
        location: "Central",
        address: "10 Collyer Quay, B1-09 Ocean Financial Centre, Singapore 049315",
        happyHourStart: "16:30",
        happyHourEnd: "18:30",
        drinks: ["cocktails", "wines"], 
        priceRange: {
            min: 12,
            max: 15
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        url: "https://www.thesecretmermaid.com/", 
    },
    {
        name: "Gibson",
        location: "Central",
        address: "20 Bukit Pasoh Rd, 2nd floor, Singapore 089834",
        happyHourStart: "18:00",
        happyHourEnd: "20:00",
        drinks: ["cocktails", "beers", "wines"], 
        priceRange: {
            min: 10,
            max: 16
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.gibsonbar.sg/", 
    },
    {
        name: "Live Twice",
        location: "Central",
        address: "18-20 Bukit Pasoh Rd, 1st floor, Singapore 089834",
        happyHourStart: "18:00",
        happyHourEnd: "20:00",
        drinks: ["cocktails", "beers", "wines"], 
        priceRange: {
            min: 12,
            max: 16
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.livetwice.sg/", 
    },
    {
        name: "Jigger & Pony",
        location: "Central",
        address: "165 Tanjong Pagar Road, 1st floor, Amara Hotel, Singapore 088538",
        happyHourStart: "18:00",
        happyHourEnd: "19:30",
        drinks: ["cocktails", "beers", "wines"], 
        priceRange: {
            min: 12,
            max: 19
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.jiggerandpony.com/", 
    },
    {
        name: "Wala Wala",
        location: "West",
        address: "31 Lorong Mambong, Singapore 277689",
        happyHourStart: "16:00",
        happyHourEnd: "19:00",
        drinks: ["beers", "wines"], 
        priceRange: {
            min: 11,
            max: 11
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
        url: "https://www.walawala.sg/", 
    },
    {
        name: "KPO",
        location: "Central",
        address: "1 Killiney Road, Singapore 239518",
        happyHourStart: "14:00",
        happyHourEnd: "20:00",
        drinks: ["beers", "wines","spirits", "cocktails"], 
        priceRange: {
            min: 10,
            max: 20
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        url: "https://kpo.com.sg/", 
    },
    {
        name: "Chimichanga Holland Village",
        location: "West",
        address: "3 Lor Liput, #01-01 Holland Piazza, Singapore 277725",
        happyHourStart: "11:00",
        happyHourEnd: "19:00",
        drinks: ["beers", "wines","spirits", "cocktails"], 
        priceRange: {
            min: 10,
            max: 17
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        url: "https://www.chimichanga.sg/", 
    },
    {
        name: "Tango's Restaurant & Wine Bar",
        location: "West",
        address: "35 Lorong Mambong, Holland Village, Singapore, Singapore 277692",
        happyHourStart: "15:00",
        happyHourEnd: "21:00",
        drinks: ["beers", "wines","spirits", "cocktails"], 
        priceRange: {
            min: 9,
            max: 20
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        url: "https://tangosrestaurantsg.wixsite.com/tango-s-restaurant/", 
    },
    {
        name: "La Nonna",
        location: "West",
        address: "26/26B Lorong Mambong, Holland Village, Singapore 277685",
        happyHourStart: "17:30",
        happyHourEnd: "20:00",
        drinks: ["beers", "wines"], 
        priceRange: {
            min: 6,
            max: 10
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://lanonna.sg/", 
    },
    {
        name: "The Jolly Roger",
        location: "West",
        address: "15 Chu Lin Road, Singapore 669907",
        happyHourStart: "16:00",
        happyHourEnd: "20:00",
        drinks: ["beers", "spirits"], 
        priceRange: {
            min: 10,
            max: 17
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.thejollyroger.org/", 
    },
    {
        name: "Mels' Place",
        location: "East",
        address: "2A Kuo Chuan Avenue, Singapore 426897",
        happyHourStart: "16:00",
        happyHourEnd: "19:00",
        drinks: ["beers", "spirits"], 
        priceRange: {
            min: 8,
            max: 12
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://melsplace.com.sg/", 
    },
    {
        name: "Pigsfly Kitchen & Bar",
        location: "East",
        address: "19 East Coast Road, #01-03, Singapore 428746",
        happyHourStart: "16:00",
        happyHourEnd: "19:00",
        drinks: ["beers", "spirits"], 
        priceRange: {
            min: 8,
            max: 12
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.hiddendoorconcepts.com/pigsfly", 
    },
    {
        name: "Prive @ Keppel Bay",
        location: "South",
        address: "2 Keppel Bay Vista, #01-03 Marina at Keppel Bay, Singapore 098382",
        happyHourStart: "16:00",
        happyHourEnd: "20:00",
        drinks: ["beers", "wines", "spirits", "cocktails"], 
        priceRange: {
            min: 7,
            max: 14.50
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.theprivegroup.com.sg/prive-keppel-bay", 
    },
    {
        name: "Hopscotch (Gillman Barracks)",
        location: "South",
        address: "45 Malan Road, Singapore 109455",
        happyHourStart: "17:00",
        happyHourEnd: "20:00",
        drinks: ["beers", "wines", "spirits", "cocktails"], 
        priceRange: {
            min: 8,
            max: 18
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.hopscotch.sg/", 
    },
    {
        name: "Back St. Alley",
        location: "West",
        address: "31 Biopolis Way, #01-06, Singapore 138669",
        happyHourStart: "16:30",
        happyHourEnd: "20:00",
        drinks: ["beers", "wines", "spirits"], 
        priceRange: {
            min: 10,
            max: 12
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "http://backstreetalley.sg/", 
    },
    {
        name: "Ob.bar",
        location: "West",
        address: "9 N Buona Vista Dr, #01-04 The Metropolis, Singapore 138588",
        happyHourStart: "16:00",
        happyHourEnd: "18:00",
        drinks: ["beers", "wines"], 
        priceRange: {
            min: 6.25,
            max: 6.75
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        url: "https://obbar.social/", 
    },
    {
        name: "Brewerkz Seletar Aerospace Park",
        location: "North",
        address: "9 The Oval, Seletar Aerospace Park, Singapore 797867",
        happyHourStart: "15:00",
        happyHourEnd: "20:00",
        drinks: ["beers"], 
        priceRange: {
            min: 13.60,
            max: 17
        },
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://brewerkz.com/outlet/seletar-aerospace-park/", 
    },
    {
        name: "YOUNGS Restaurant & Bar",
        location: "North",
        address: "3 Hyde Park Gate, Seletar Aerospace Park, Singapore 799531",
        happyHourStart: "16:00",
        happyHourEnd: "20:00",
        drinks: ["beers"], 
        priceRange: {
            min: 10,
            max: 12
        },
        days: ["Monday", "Wednesday", "Thursday"],
        url: "https://youngs.com.sg/", 
    },
    {
        name: "The Carpenters Bar",
        location: "North",
        address: "28 Woodlands Sector 2, Woodlands Connection Building, Singapore 737686",
        happyHourStart: "15:00",
        happyHourEnd: "19:00",
        drinks: ["beers"], 
        priceRange: {
            min: 5,
            max: 13
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.thecarpentersbar.com.sg/", 
    },
    {
        name: "O/T Bar",
        location: "North",
        address: "6 Woodlands Square, #01-02 Woods Square, Singapore 737737",
        happyHourStart: "15:00",
        happyHourEnd: "19:00",
        drinks: ["cocktails", "wines", "spirits"], 
        priceRange: {
            min: 12,
            max: 16
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.tipsycollective.com/otbar", 
    },
    {
        name: "Lazy Sloth & Drunken Sloth",
        location: "East",
        address: "41 East Coast Road, Singapore 428761",
        happyHourStart: "14:45",
        happyHourEnd: "21:00",
        drinks: ["beers", "cocktails", "wines"], 
        priceRange: {
            min: 10,
            max: 11
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://lazysloth.getz.co/", 
    },
    {
        name: "60ml",
        location: "East",
        address: "51 Joo Chiat Place, Singapore 427775",
        happyHourStart: "17:30",
        happyHourEnd: "19:30",
        drinks: ["cocktails"], 
        priceRange: {
            min: 14,
            max: 14
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.asadorsingapore.com/", 
    },
    {
        name: "Parliament Bar",
        location: "Central",
        address: "18 Teck Lim Road, #02-01, Singapore 088390",
        happyHourStart: "17:00",
        happyHourEnd: "20:00",
        drinks: ["cocktails", "spirits"], 
        priceRange: {
            min: 10,
            max: 15
        },
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        url: "https://www.parliamentbar.sg/", 
    },
    {
        name: "Humpback",
        location: "Central",
        address: "18-20 Bukit Pasoh Road, Singapore 089834",
        happyHourStart: "17:00",
        happyHourEnd: "19:00",
        drinks: ["cocktails","beer", "wines"], 
        priceRange: {
            min: 15,
            max: 15
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.humpback.sg/", 
    },
    {
        name: "The Elephant Room",
        location: "Central",
        address: "33 Tanjong Road, #01-02, Singapore 088456",
        happyHourStart: "17:00",
        happyHourEnd: "19:00",
        drinks: ["cocktails"], 
        priceRange: {
            min: 15,
            max: 15
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://www.humpback.sg/", 
    },
    {
        name: "Salud",
        location: "Central",
        address: "19 Keong Saik Road, Singapore 089126",
        happyHourStart: "18:00",
        happyHourEnd: "22:00",
        drinks: ["cocktails"], 
        priceRange: {
            min: 15,
            max: 15
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        url: "https://www.instagram.com/salud.singapore/",
    }, 
    {
        name: "OPIO Kitchen & Bar",
        location: "South",
        address: "991B Alexandra Road, Singapore 119970",
        happyHourStart: "15:00",
        happyHourEnd: "20:00",
        drinks: ["wines", "spirits", "beers"], 
        priceRange: {
            min: 10,
            max: 12
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        url: "https://www.bluelotus.com.sg/opio-kitchen-bar",
    }, 
    {
        name: "Jag's @ Siglap",
        location: "East",
        address: "922 East Coast Road, Singapore 459114",
        happyHourStart: "15:00",
        happyHourEnd: "20:00",
        drinks: ["beers"], 
        priceRange: {
            min: 10,
            max: 12
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://jags.com.sg/",
    }, 
    {
        name: "georges MADBar & Grill",
        location: "East",
        address: "687 East Coast Road, Frankel Ave, Singapore 459055",
        happyHourStart: "15:00",
        happyHourEnd: "20:00",
        drinks: ["beers", "wines", "cocktails", "spirits"], 
        priceRange: {
            min: 8,
            max: 20
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        url: "https://ccpl.ninjaos.com/media/ckfinder/files/SP%20Main%20Menu%20V06052024-compressed.pdf",
    },
    {
        name: "georges MADBar & Grill",
        location: "East",
        address: "687 East Coast Road, Frankel Ave, Singapore 459055",
        happyHourStart: "15:00",
        happyHourEnd: "20:00",
        drinks: ["beers", "wines", "cocktails", "spirits"], 
        priceRange: {
            min: 8,
            max: 20
        },
        days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        url: "https://ccpl.ninjaos.com/media/ckfinder/files/SP%20Main%20Menu%20V06052024-compressed.pdf",
    },
    {
        name: "The Whistle",
        location: "East",
        address: "160 Changi Road, #01-08, Singapore 419728",
        happyHourStart: "17:00",
        happyHourEnd: "20:30",
        drinks: ["beers", "wines"], 
        priceRange: {
            min: 8,
            max: 10
        },
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        url: "https://the-whistle.odoo.com/",
    },
];

// Display Function with enhanced card design and clickable links
function displayBars(bars) {
    const barsContainer = document.getElementById('bars');
    barsContainer.innerHTML = '';

    if (bars.length === 0) {
        // Create a message for no results
        const noResultsElement = document.createElement('div');
        noResultsElement.className = 'col-12 text-center py-5';
        noResultsElement.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h4 class="mb-3"><i class="bi bi-emoji-frown"></i></h4>
                    <h4 class="card-title">Sorry, no such Thirst Trap was found...</h4>
                    <p class="card-text">Try adjusting your filters to see more results.</p>
                </div>
            </div>
        `;
        barsContainer.appendChild(noResultsElement);
        return;
    }

    bars.forEach(bar => {
        const barElement = document.createElement('div');
        barElement.className = 'col';
        
        // Format price range display
        const priceDisplay = bar.priceRange.min === bar.priceRange.max 
            ? `$${bar.priceRange.min}` 
            : `$${bar.priceRange.min} - $${bar.priceRange.max}`;

        barElement.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h4 class="card-title mb-3">
                        <a href="${bar.url}" 
                           target="_blank" 
                           class="bar-link" 
                           rel="noopener noreferrer">${bar.name}</a>
                    </h4>
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
                            <strong>Estimated Price:</strong> ${priceDisplay}
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

// Search and Sort Functions
let currentBars = [...barsData]; // Keep track of currently displayed bars

// Search function
function searchBars(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    return barsData.filter(bar => {
        return (
            bar.name.toLowerCase().includes(searchTerm) ||
            bar.location.toLowerCase().includes(searchTerm) ||
            bar.address.toLowerCase().includes(searchTerm) ||
            bar.drinks.some(drink => drink.toLowerCase().includes(searchTerm))
        );
    });
}

// Sort function
function sortBars(bars, sortType) {
    const sortedBars = [...bars];
    
    switch(sortType) {
        case 'nameAsc':
            sortedBars.sort((a, b) => a.name.localeCompare(b.name));
            break;
            
        case 'nameDesc':
            sortedBars.sort((a, b) => b.name.localeCompare(a.name));
            break;
            
        case 'priceAsc':
            sortedBars.sort((a, b) => {
                // Sort by minimum price, then by maximum price if minimums are equal
                if (a.priceRange.min === b.priceRange.min) {
                    return a.priceRange.max - b.priceRange.max;
                }
                return a.priceRange.min - b.priceRange.min;
            });
            break;
            
        case 'priceDesc':
            sortedBars.sort((a, b) => {
                // Sort by maximum price, then by minimum price if maximums are equal
                if (b.priceRange.max === a.priceRange.max) {
                    return b.priceRange.min - a.priceRange.min;
                }
                return b.priceRange.max - a.priceRange.max;
            });
            break;
            
        case 'startTime':
            sortedBars.sort((a, b) => {
                const aMinutes = timeToMinutes(a.happyHourStart);
                const bMinutes = timeToMinutes(b.happyHourStart);
                return aMinutes - bMinutes;
            });
            break;
            
        case 'endTime':
            sortedBars.sort((a, b) => {
                const aMinutes = timeToMinutes(a.happyHourEnd);
                const bMinutes = timeToMinutes(b.happyHourEnd);
                return bMinutes - aMinutes; // Reverse order for latest end time
            });
            break;
            
        default:
            return sortedBars;
    }
    return sortedBars;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const searchIcon = document.getElementById('searchIcon');
    const sortSelect = document.getElementById('sortSelect');

    // Function to trigger search icon effect
    function triggerSearchEffect() {
        searchIcon.classList.add('active', 'pulse');
        
        // Remove pulse after animation
        setTimeout(() => {
            searchIcon.classList.remove('pulse');
        }, 300);
    }

    // Function to reset search icon
    function resetSearchIcon() {
        searchIcon.classList.remove('active', 'pulse');
    }

    // Search input event listener
    searchBar.addEventListener('input', function(e) {
        const searchTerm = e.target.value;
        
        if (searchTerm.length > 0) {
            searchIcon.classList.add('active');
        } else {
            resetSearchIcon();
        }
        
        currentBars = searchBars(searchTerm);
        if (sortSelect.value) {
            currentBars = sortBars(currentBars, sortSelect.value);
        }
        displayBars(currentBars);
    });

    // Enter key event listener
    searchBar.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            triggerSearchEffect();
        }
    });

    // Click event for search icon
    searchIcon.addEventListener('click', function() {
        if (searchBar.value.length > 0) {
            triggerSearchEffect();
        }
    });

    // Sort event listener
    sortSelect.addEventListener('change', function(e) {
        const sortType = e.target.value;
        currentBars = sortBars(currentBars, sortType);
        displayBars(currentBars);
    });

    // Update filter button to work with search and sort
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

        currentBars = filteredBars; // Update currentBars after filtering
        
        // Maintain current sort
        if (sortSelect.value) {
            currentBars = sortBars(currentBars, sortSelect.value);
        }
        
        displayBars(currentBars);
    });

    // Update reset button to also reset search icon
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

        searchBar.value = '';
        resetSearchIcon();
        sortSelect.value = '';
        currentBars = [...barsData];
        displayBars(currentBars);
    });
});
// Initial display of all bars
window.onload = function() {
    displayBars(barsData);
};

