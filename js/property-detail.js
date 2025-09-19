document.addEventListener('DOMContentLoaded', () => {
    // --- Get Elements from your HTML ---
    const mainImageEl = document.getElementById('main-image');
    const thumbnailGalleryEl = document.getElementById('thumbnail-gallery');
    const propertyTitleEl = document.getElementById('property-title');
    const propertyLocationEl = document.getElementById('property-location');
    const propertyPriceEl = document.getElementById('property-price');
    const propertyDetailsEl = document.getElementById('property-details');
    const propertyDescriptionEl = document.getElementById('property-description');
    const whatsappButtonEl = document.getElementById('whatsapp-button');

    // SEO Meta Tags
    const metaDescriptionEl = document.getElementById('meta-description');
    const ogTitleEl = document.getElementById('og-title');
    const ogDescriptionEl = document.getElementById('og-description');
    const ogImageEl = document.getElementById('og-image');

    // --- Get Property ID from URL ---
    const params = new URLSearchParams(window.location.search);
    const propertyId = parseInt(params.get('id'));

    // --- Find the correct property from properties.js ---
    const property = properties.find(p => p.id === propertyId);

    if (property) {
        // --- Populate the Page ---

        // 1. Populate standard info
        propertyTitleEl.textContent = property.title;
        propertyLocationEl.innerHTML = `<i class="fas fa-map-marker-alt mr-2 text-blue-500"></i>${property.location}`;
        propertyDescriptionEl.innerHTML = property.description.replace(/\n/g, '<br>');

        // 2. Populate basic details list
        propertyDetailsEl.innerHTML = `
            <li class="flex justify-between"><strong>Status:</strong> <span class="text-right">${property.status}</span></li>
            <li class="flex justify-between"><strong>Type:</strong> <span class="text-right">${property.type}</span></li>
            <li class="flex justify-between"><strong>Size:</strong> <span class="text-right">${property.size > 0 ? property.size + ' ' + property.sizeUnit : 'Varies'}</span></li>
            <li class="flex justify-between"><strong>Title:</strong> <span class="text-right">${property.titleDeed || 'N/A'}</span></li>
        `;
        if (property.paymentPlan) {
             propertyDetailsEl.innerHTML += `<li class="pt-2 mt-2 border-t"><strong>Payment Plan:</strong> <span class="text-right block">${property.paymentPlan}</span></li>`;
        }
        if (property.otherFees) {
             propertyDetailsEl.innerHTML += `<li class="pt-2 mt-2 border-t"><strong>Other Fees:</strong> <span class="text-right block">Dev. Levy: ${property.otherFees.devLevy}, Documentation: ${property.otherFees.documentation}</span></li>`;
        }


        // 3. Handle All Pricing Scenarios (The Final Upgraded Logic)
        let pricingHTML = '';
        if (property.landPlots && property.landPlots.length > 0) {
            // SCENARIO 1: Property with detailed fee breakdown (e.g., Maven Estate)
            propertyPriceEl.style.display = 'none';
            pricingHTML = '<h3 class="text-xl font-semibold mb-3 border-t pt-4">Pricing Breakdown</h3>';
            pricingHTML += '<div class="overflow-x-auto"><table class="min-w-full text-sm">';
            pricingHTML += '<thead class="bg-gray-100"><tr><th class="py-2 px-3 text-left">Plot Size</th><th class="py-2 px-3 text-right">Dev. Fee</th><th class="py-2 px-3 text-right">Documentation</th><th class="py-2 px-3 text-right font-bold">Total Price</th></tr></thead><tbody>';
            property.landPlots.forEach(plot => {
                pricingHTML += `<tr class="border-b"><td class="py-2 px-3 font-medium">${plot.size}</td><td class="py-2 px-3 text-right">₦${new Intl.NumberFormat().format(plot.devFee)}</td><td class="py-2 px-3 text-right">₦${new Intl.NumberFormat().format(plot.documentation)}</td><td class="py-2 px-3 text-right font-bold">₦${new Intl.NumberFormat().format(plot.totalPrice)}</td></tr>`;
            });
            pricingHTML += '</tbody></table></div>';
            if (property.specialOffer) {
                pricingHTML += `<div class="mt-4 text-center font-bold text-green-600 bg-green-100 p-3 rounded-lg">${property.specialOffer}</div>`;
            }

        } else if (property.featureOptions && property.featureOptions.length > 0) {
            // SCENARIO 2: Property with different prices based on a feature (e.g., Citadel Oasis)
            propertyPriceEl.style.display = 'none';
            pricingHTML = '<h3 class="text-xl font-semibold mb-3 border-t pt-4">Pricing Options</h3>';
            pricingHTML += '<ul class="space-y-3">';
            property.featureOptions.forEach(option => {
                pricingHTML += `<li class="flex justify-between items-center border-b pb-2"><span class="font-medium text-gray-800">${option.name}</span><span class="font-bold text-lg text-blue-600">₦${new Intl.NumberFormat().format(option.price)}</span></li>`;
            });
            pricingHTML += '</ul>';

        } else if (property.paymentOptions && property.paymentOptions.length > 0) {
            // SCENARIO 3: Property with different prices based on payment plan (e.g., Brum Heights)
            propertyPriceEl.style.display = 'none';
            pricingHTML = '<h3 class="text-xl font-semibold mb-3 border-t pt-4">Pricing Options</h3>';
            pricingHTML += '<ul class="space-y-3">';
            property.paymentOptions.forEach(option => {
                pricingHTML += `<li class="flex justify-between items-center border-b pb-2"><span class="font-medium text-gray-800">${option.plan}</span><span class="font-bold text-lg text-blue-600">₦${new Intl.NumberFormat().format(option.price)}</span></li>`;
            });
            pricingHTML += '</ul>';

        } else if (property.landOptions && property.landOptions.length > 0) {
            // SCENARIO 4: Property with different prices based on land size and payment duration
            propertyPriceEl.style.display = 'none';
            pricingHTML = '<h3 class="text-xl font-semibold mb-3 border-t pt-4">Pricing Options</h3>';
            pricingHTML += '<div class="overflow-x-auto"><table class="min-w-full text-sm">';
            pricingHTML += '<thead class="bg-gray-100"><tr><th class="py-2 px-3 text-left">Plot Size</th><th class="py-2 px-3 text-right">0-6 Months Plan</th><th class="py-2 px-3 text-right">12 Months Plan</th></tr></thead><tbody>';
            property.landOptions.forEach(option => {
                pricingHTML += `<tr class="border-b"><td class="py-2 px-3 font-medium">${option.size}</td><td class="py-2 px-3 text-right">₦${new Intl.NumberFormat().format(option.price_0_6_months)}</td><td class="py-2 px-3 text-right">₦${new Intl.NumberFormat().format(option.price_12_months)}</td></tr>`;
            });
            pricingHTML += '</tbody></table></div>';

        } else if (property.houseTypes && property.houseTypes.length > 0) {
            // SCENARIO 5: Property with complex house type pricing
            propertyPriceEl.style.display = 'none';
            pricingHTML = '<h3 class="text-xl font-semibold mb-3 border-t pt-4">Pricing Options</h3>';
            
            const firstHouseType = property.houseTypes[0];
            if (firstHouseType.priceIncreaseDate) {
                // Sub-scenario: Time-sensitive pricing
                pricingHTML += '<div class="overflow-x-auto"><table class="min-w-full text-sm">';
                pricingHTML += '<thead class="bg-gray-100"><tr><th class="py-2 px-3 text-left">Unit Type</th><th class="py-2 px-3 text-right">Carcass</th><th class="py-2 px-3 text-right">Finished</th></tr></thead><tbody>';
                property.houseTypes.forEach(type => {
                    pricingHTML += `<tr class="border-b"><td class="py-2 px-3 font-medium">${type.name}</td><td class="py-2 px-3 text-right"><span class="block">₦${new Intl.NumberFormat().format(type.carcassCurrentPrice)}</span><span class="block text-red-500 line-through">₦${new Intl.NumberFormat().format(type.carcassNewPrice)}</span></td><td class="py-2 px-3 text-right"><span class="block">₦${new Intl.NumberFormat().format(type.finishedCurrentPrice)}</span><span class="block text-red-500 line-through">₦${new Intl.NumberFormat().format(type.finishedNewPrice)}</span></td></tr>`;
                });
                pricingHTML += '</tbody></table></div>';
                pricingHTML += `<div id="countdown-timer" class="mt-4 text-center font-bold text-red-600 bg-red-100 p-3 rounded-lg"></div>`;

                const countdownDate = new Date(firstHouseType.priceIncreaseDate).getTime();
                const timerInterval = setInterval(() => {
                    const now = new Date().getTime();
                    const distance = countdownDate - now;
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    const timerEl = document.getElementById('countdown-timer');
                    if (timerEl) {
                        if (distance < 0) {
                            clearInterval(timerInterval);
                            timerEl.innerHTML = "Price has been updated.";
                        } else {
                            timerEl.innerHTML = `Price increases in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
                        }
                    }
                }, 1000);

            } else {
                // Sub-scenario: Standard Carcass vs Finished pricing
                pricingHTML += '<div class="overflow-x-auto"><table class="min-w-full text-sm">';
                pricingHTML += '<thead class="bg-gray-100"><tr><th class="py-2 px-3 text-left">Unit Type</th><th class="py-2 px-3 text-right">Finished</th><th class="py-2 px-3 text-right">Carcass</th></tr></thead><tbody>';
                property.houseTypes.forEach(type => {
                    pricingHTML += `<tr class="border-b"><td class="py-2 px-3 font-medium">${type.name}</td><td class="py-2 px-3 text-right">₦${new Intl.NumberFormat().format(type.finishedPrice)}</td><td class="py-2 px-3 text-right">₦${new Intl.NumberFormat().format(type.carcassPrice)}</td></tr>`;
                });
                pricingHTML += '</tbody></table></div>';
            }

        } else if (property.landSizes && property.landSizes.length > 0) {
            // SCENARIO 6: Property with different land size options
            propertyPriceEl.style.display = 'none';
            pricingHTML = '<h3 class="text-xl font-semibold mb-3 border-t pt-4">Pricing Options</h3>';
            pricingHTML += '<ul class="space-y-3">';
            property.landSizes.forEach(land => {
                pricingHTML += `<li class="flex justify-between items-center border-b pb-2"><span class="font-medium text-gray-800">${land.size}</span><span class="font-bold text-lg text-blue-600">₦${new Intl.NumberFormat().format(land.price)}</span></li>`;
            });
            pricingHTML += '</ul>';

        } else if (property.apartmentTypes && property.apartmentTypes.length > 0) {
            // SCENARIO 7: Property with a list of different apartment types
            propertyPriceEl.style.display = 'none';
            pricingHTML = '<h3 class="text-xl font-semibold mb-3 border-t pt-4">Pricing Options</h3>';
            pricingHTML += '<ul class="space-y-3">';
            property.apartmentTypes.forEach(apt => {
                pricingHTML += `<li class="flex justify-between items-center border-b pb-2"><span class="font-medium text-gray-800">${apt.name}</span><span class="font-bold text-lg text-blue-600">₦${new Intl.NumberFormat().format(apt.price)}</span></li>`;
            });
            pricingHTML += '</ul>';

        } else if (property.farmTypes && property.farmTypes.length > 0) {
            // SCENARIO 8: Property with farm investment options
            propertyPriceEl.style.display = 'none';
            pricingHTML = '<h3 class="text-xl font-semibold mb-3 border-t pt-4">Investment Options</h3>';
            pricingHTML += '<ul class="space-y-3">';
            property.farmTypes.forEach(farm => {
                pricingHTML += `<li class="flex justify-between items-center border-b pb-2"><span class="font-medium text-gray-800">${farm.name}</span><span class="font-bold text-lg text-blue-600">₦${new Intl.NumberFormat().format(farm.price)}</span></li>`;
            });
            pricingHTML += '</ul>';
            
        } else {
            // SCENARIO 9: Simple property with a single price
            propertyPriceEl.textContent = `₦${new Intl.NumberFormat().format(property.price)}`;
        }
        
        // Insert the generated pricing HTML into the page
        if(pricingHTML) {
            propertyDetailsEl.insertAdjacentHTML('afterend', pricingHTML);
        }

        // 4. Populate Image Gallery
        const cleanMainImageSrc = `../${property.mainImage.replace('./', '')}`;
        mainImageEl.src = cleanMainImageSrc;
        thumbnailGalleryEl.innerHTML = '';
        if (property.gallery && property.gallery.length > 0) {
            property.gallery.forEach(imgSrc => {
                const cleanSrc = `../${imgSrc.replace('./', '')}`;
                const thumb = document.createElement('img');
                thumb.src = cleanSrc;
                thumb.alt = `${property.title} thumbnail`;
                thumb.className = 'w-full h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500 transition';
                thumb.addEventListener('click', () => { mainImageEl.src = cleanSrc; });
                thumbnailGalleryEl.appendChild(thumb);
            });
        }

        // 5. Setup WhatsApp Button & SEO
        const message = encodeURIComponent(`Hello ChipLushome, I'm interested in the property: ${property.title}. I would like to book an inspection.`);
        whatsappButtonEl.href = `https://wa.me/2348034799756?text=${message}`;
        
        const pageTitle = `${property.title} - ChipLushome`;
        const pageDescription = property.description.substring(0, 160);
        const imageUrl = new URL(property.mainImage.replace('./', ''), window.location.href).href;
        document.title = pageTitle;
        metaDescriptionEl.setAttribute('content', pageDescription);
        ogTitleEl.setAttribute('content', pageTitle);
        ogDescriptionEl.setAttribute('content', pageDescription);
        ogImageEl.setAttribute('content', imageUrl);

    } else {
        // Handle property not found
        document.querySelector('main').innerHTML = '<p class="text-center text-red-500 py-20 text-xl">The property you are looking for could not be found.</p>';
    }
});

