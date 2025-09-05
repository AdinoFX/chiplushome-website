document.addEventListener('DOMContentLoaded', () => {
    // --- Get Elements ---
    const pageTitleEl = document.getElementById('page-title');
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

    // --- Find the Property ---
    const property = properties.find(p => p.id === propertyId);

    // --- Populate Page if Property is Found ---
    if (property) {
        // 1. Populate Main Info
        propertyTitleEl.textContent = property.title;
        propertyLocationEl.innerHTML = `<i class="fas fa-map-marker-alt mr-2 text-blue-500"></i>${property.location}`;
        propertyPriceEl.textContent = `₦${new Intl.NumberFormat().format(property.price)}`;
        propertyDescriptionEl.textContent = property.description;

        // 2. Populate Details List (Handles 'bedrooms' field)
        propertyDetailsEl.innerHTML = `
            <li class="flex justify-between"><strong>Status:</strong> <span class="text-right">${property.status}</span></li>
            <li class="flex justify-between"><strong>Type:</strong> <span class="text-right">${property.type}</span></li>
            <li class="flex justify-between"><strong>Size:</strong> <span class="text-right">${property.size} ${property.sizeUnit}</span></li>
            <li class="flex justify-between"><strong>Bedrooms:</strong> <span class="text-right">${property.bedrooms}</span></li>
        `;
        
        // 3. Populate Image Gallery
        mainImageEl.src = `../${property.mainImage.replace('./', '')}`; // Set initial main image
        thumbnailGalleryEl.innerHTML = ''; // Clear placeholders

        if (property.gallery && property.gallery.length > 0) {
            property.gallery.forEach(imgSrc => {
                const cleanSrc = `../${imgSrc.replace('./', '')}`;
                const thumb = document.createElement('img');
                thumb.src = cleanSrc;
                thumb.alt = `${property.title} thumbnail`;
                thumb.className = 'w-full h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500 transition';
                
                thumb.addEventListener('click', () => {
                    mainImageEl.src = cleanSrc;
                });

                thumbnailGalleryEl.appendChild(thumb);
            });
        }

        // 4. Setup WhatsApp Button
        const message = encodeURIComponent(`Hello ChipLushome, I'm interested in the property: ${property.title}. I would like to book an inspection.`);
        whatsappButtonEl.href = `https://wa.me/2347066466678?text=${message}`;

        // 5. Populate SEO Meta Tags
        const pageTitle = `${property.title} - ChipLushome`;
        const pageDescription = property.description.substring(0, 160);
        const imageUrl = `${window.location.origin}/${property.mainImage.replace('./', '')}`;

        document.title = pageTitle;
        metaDescriptionEl.setAttribute('content', pageDescription);
        ogTitleEl.setAttribute('content', pageTitle);
        ogDescriptionEl.setAttribute('content', pageDescription);
        ogImageEl.setAttribute('content', imageUrl);

    } else {
        // Handle case where property is not found
        propertyTitleEl.textContent = "Property Not Found";
        document.querySelector('.lg\\:col-span-2').innerHTML = '<p class="text-center text-red-500">The property you are looking for could not be found.</p>';
    }
});

