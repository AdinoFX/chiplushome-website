document.addEventListener('DOMContentLoaded', () => {
    const postTitleEl = document.getElementById('post-title');
    const postDateEl = document.getElementById('post-date');
    const postImageEl = document.getElementById('post-image');
    const postContentEl = document.getElementById('post-content');

    // Get post ID from URL
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get('id'), 10);

    // Find the correct post from our "database"
    if (typeof blogPosts !== 'undefined' && postId) {
        const post = blogPosts.find(p => p.id === postId);

        if (post) {
            // Populate the page with the post data
            postTitleEl.textContent = post.title;
            postDateEl.textContent = post.date;
            postImageEl.src = post.image;
            postImageEl.alt = post.title;
            postContentEl.innerHTML = post.fullContent;

            // **** NEW: Social Share Logic ****
            const postUrl = window.location.href;
            const postTitle = encodeURIComponent(post.title);

            const shareFacebook = document.getElementById('share-facebook');
            const shareTwitter = document.getElementById('share-twitter');
            const shareWhatsapp = document.getElementById('share-whatsapp');
            const shareLinkedin = document.getElementById('share-linkedin');

            if (shareFacebook) {
                shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
            }
            if (shareTwitter) {
                shareTwitter.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${postTitle}`;
            }
            if (shareWhatsapp) {
                shareWhatsapp.href = `https://api.whatsapp.com/send?text=${postTitle}%20${encodeURIComponent(postUrl)}`;
            }
            if (shareLinkedin) {
                shareLinkedin.href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${postTitle}`;
            }

        } else {
            // Handle case where post is not found
            postTitleEl.textContent = "Post not found";
            postContentEl.innerHTML = "<p>The blog post you are looking for does not exist.</p>";
        }
    }
});

