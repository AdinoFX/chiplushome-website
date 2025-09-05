document.addEventListener('DOMContentLoaded', () => {

    const blogListContainer = document.getElementById('blog-list-container');

    if (blogListContainer && typeof blogPosts !== 'undefined') {
        setTimeout(() => {
            blogListContainer.innerHTML = ''; // Clear skeleton loaders
            blogPosts.forEach(post => {
                const postCard = `
                    <div class="bg-white rounded-lg overflow-hidden border border-gray-200">
                        <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <p class="text-sm text-gray-500 mb-2">${post.date}</p>
                            <h3 class="text-lg font-bold mb-3">${post.title}</h3>
                            <p class="text-gray-600 mb-4 text-sm">${post.excerpt}</p>
                            <a href="${post.link}" class="font-semibold text-blue-600 hover:underline">Read More &rarr;</a>
                        </div>
                    </div>
                `;
                blogListContainer.insertAdjacentHTML('beforeend', postCard);
            });
        }, 500); // 0.5 second delay
    }
});

