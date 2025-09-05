document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle (Runs on every page) ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Back to Top Button Logic (Runs on every page) ---
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.onscroll = () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        };

        backToTopButton.onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    // --- HOMEPAGE & PROPERTIES PAGE LOGIC ---
    const propertyListContainer = document.querySelector('#property-list-container');
    if (propertyListContainer && typeof properties !== 'undefined') {
        
        const displayProperties = (propertiesToDisplay) => {
            // Use a short delay to allow skeleton loaders to be seen
            setTimeout(() => {
                propertyListContainer.innerHTML = ''; 
                if (propertiesToDisplay.length > 0) {
                    propertiesToDisplay.forEach(property => {
                        const isSoldClass = property.status !== 'For Sale' ? 'property-sold' : '';
                        const propertyCard = `
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ${isSoldClass}">
                                <div class="relative">
                                    <img src="${property.mainImage}" alt="${property.title}" class="w-full h-56 object-cover">
                                    <div class="absolute top-2 left-2 py-1 px-3 rounded-md text-sm font-semibold ${
                                        property.status === 'For Sale' ? 'bg-green-500 text-white' : 
                                        property.status === 'Sold Out' ? 'bg-red-500 text-white' : 'bg-gray-700 text-white'
                                    }">
                                        ${property.status}
                                    </div>
                                    ${property.offer ? `<div class="absolute top-2 right-2 bg-yellow-400 text-gray-800 py-1 px-3 rounded-md text-sm font-semibold">${property.offer}</div>` : ''}
                                </div>
                                <div class="p-6">
                                    <h3 class="text-xl font-bold mb-2">${property.title}</h3>
                                    <p class="text-gray-600 mb-4"><i class="fas fa-map-marker-alt mr-2 text-blue-500"></i>${property.location}</p>
                                    <div class="flex justify-between items-center mb-4">
                                        <p class="text-lg font-bold text-blue-600">₦${new Intl.NumberFormat().format(property.price)}</p>
                                        <p class="text-gray-500">${property.size} ${property.sizeUnit}</p>
                                    </div>
                                    <a href="property-detail.html?id=${property.id}" class="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                                        View Details
                                    </a>
                                </div>
                            </div>`;
                        propertyListContainer.insertAdjacentHTML('beforeend', propertyCard);
                    });
                } else {
                    propertyListContainer.innerHTML = '<p class="text-center col-span-full text-gray-600">No properties match your search criteria.</p>';
                }
            }, 500); // 0.5 second delay
        };

        displayProperties(properties); // Initial load

        // Filter Logic
        const filterButton = document.getElementById('filter-button');
        const propertyTypeFilter = document.getElementById('property-type');
        const locationFilter = document.getElementById('location-filter');
        const priceFilter = document.getElementById('price-filter');

        const performFilter = () => {
            let filteredProperties = [...properties];
            const type = propertyTypeFilter.value;
            if (type && type !== 'Any') {
                filteredProperties = filteredProperties.filter(p => p.type === type);
            }
            const location = locationFilter.value.toLowerCase();
            if (location) {
                filteredProperties = filteredProperties.filter(p => p.location.toLowerCase().includes(location));
            }
            const price = priceFilter.value;
            if (price) {
                const priceParts = price.replace(/M/gi, '000000').split('-').map(p => parseInt(p.trim(), 10));
                const minPrice = priceParts[0];
                const maxPrice = priceParts.length > 1 ? priceParts[1] : Infinity;

                if (!isNaN(minPrice)) {
                    filteredProperties = filteredProperties.filter(p => {
                        const propertyPrice = parseInt(p.price, 10);
                        return propertyPrice >= minPrice && propertyPrice <= maxPrice;
                    });
                }
            }
            displayProperties(filteredProperties);
        };

        if (filterButton) filterButton.addEventListener('click', performFilter);
        if (locationFilter) locationFilter.addEventListener('keyup', performFilter);
        if (propertyTypeFilter) propertyTypeFilter.addEventListener('change', performFilter);
        if (priceFilter) priceFilter.addEventListener('keyup', performFilter);
    }

    // --- HOMEPAGE-ONLY LOGIC ---

    // Featured Property
    const featuredPropertyContainer = document.getElementById('featured-property-container');
    if (featuredPropertyContainer && typeof properties !== 'undefined') {
         setTimeout(() => {
            const featuredPropertyId = 2; 
            const featuredProperty = properties.find(p => p.id === featuredPropertyId);
            if (featuredProperty) {
                const featuredHTML = `
                    <div class="bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div class="md:order-2">
                            <img src="${featuredProperty.mainImage}" alt="${featuredProperty.title}" class="w-full h-64 md:h-full object-cover">
                        </div>
                        <div class="p-8 md:order-1 flex flex-col justify-center">
                            <h3 class="text-3xl font-bold mb-2">${featuredProperty.title}</h3>
                            <p class="text-gray-600 mb-4"><i class="fas fa-map-marker-alt mr-2 text-blue-500"></i>${featuredProperty.location}</p>
                            <p class="text-gray-700 mb-6 leading-relaxed">${featuredProperty.description.substring(0, 150)}...</p>
                            <div class="flex justify-between items-center mb-6">
                                <p class="text-2xl font-bold text-blue-600">₦${new Intl.NumberFormat().format(featuredProperty.price)}</p>
                                <p class="text-gray-500 font-semibold">${featuredProperty.size} ${featuredProperty.sizeUnit}</p>
                            </div>
                            <a href="property-detail.html?id=${featuredProperty.id}" class="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                                View Full Details
                            </a>
                        </div>
                    </div>`;
                featuredPropertyContainer.innerHTML = featuredHTML;
            }
        }, 500);
    }

    // Latest Blog Posts
    const latestPostsContainer = document.getElementById('latest-posts-container');
    if (latestPostsContainer && typeof blogPosts !== 'undefined') {
        setTimeout(() => {
            latestPostsContainer.innerHTML = '';
            const latestThreePosts = blogPosts.slice(0, 3);
            latestThreePosts.forEach(post => {
                const postCard = `
                    <div class="bg-white rounded-lg overflow-hidden border border-gray-200">
                        <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <p class="text-sm text-gray-500 mb-2">${post.date}</p>
                            <h3 class="text-lg font-bold mb-3">${post.title}</h3>
                            <p class="text-gray-600 mb-4 text-sm">${post.excerpt}</p>
                            <a href="${post.link}" class="font-semibold text-blue-600 hover:underline">Read More &rarr;</a>
                        </div>
                    </div>`;
                latestPostsContainer.insertAdjacentHTML('beforeend', postCard);
            });
        }, 500);
    }

    // Testimonials
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer && typeof testimonials !== 'undefined') {
        testimonials.forEach(testimonial => {
            const testimonialCard = `
                <div class="bg-white bg-opacity-10 p-6 rounded-lg text-left">
                    <p class="italic mb-4">"${testimonial.quote}"</p>
                    <div class="flex items-center">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4 object-cover">
                        <div>
                            <p class="font-bold">${testimonial.name}</p>
                            <p class="text-sm opacity-80">${testimonial.title}</p>
                        </div>
                    </div>
                </div>`;
            testimonialsContainer.insertAdjacentHTML('beforeend', testimonialCard);
        });
    }
});

