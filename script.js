        // Get the modal
        const modal = document.getElementById('artModal');
        const closeBtn = document.querySelector('.close');

        // Get all blog links
        const blogLinks = document.querySelectorAll('.blog-link');

        // When the user clicks a blog item
        blogLinks.forEach(link => {
            link.addEventListener('click', async (e) => {
                e.preventDefault();
                
                // Get the post ID from the data attribute
                const postId = link.dataset.postId;

                // Simulate fetching blog content from a server
                const blogContent = await fetchBlogContent(postId);

                // Populate modal with content
                modal.querySelector('.modal-title').textContent = blogContent.title;
                modal.querySelector('.modal-image').src = blogContent.image;
                modal.querySelector('.modal-body').innerHTML = blogContent.content;

                // Show modal
                modal.style.display = "block";
            });
        });

        // Close modal when the close button is clicked
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Close modal when clicking outside the modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Simulated function to fetch blog content (replace with actual API call)
        async function fetchBlogContent(postId) {
            // Simulate a delay for fetching data
           

            // Sample blog content (replace with real data from your server)
            const blogPosts = {
                1: {
                    title: "Why We're Making Dread Not",
                    image: "https://via.placeholder.com/800x400",
                    content: "The water is dark and incredibly cold. The pressure is intense, and the stakes couldn’t be higher...After being attacked by a colossal sea creature, a small nuclear submarine outfitted for research is thrown into a high-stakes battle and must reach the surface before air runs out. Players take on the role of either the Pilot or the Mechanic and must work together to keep the submarine stable by communicating with each other, fixing failing systems, and navigating through perilous waters. Survival depends on the pair’s ability to work together under immense pressure. Failure is not an option. "
                },
                2: {
                    title: "Modern Art Trends",
                    image: "https://via.placeholder.com/800x400",
                    content: "Modern art continues to evolve with new techniques..."
                },
                3: {
                    title: "Exploring Abstract Art",
                    image: "https://via.placeholder.com/800x400",
                    content: "Abstract art challenges our perception of reality..."
                }
            };

            return blogPosts[postId];
        }

// scripted stuff for the gallery page.
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const filterButtons = document.querySelectorAll('.filter-button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Lightbox functionality
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = image.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});