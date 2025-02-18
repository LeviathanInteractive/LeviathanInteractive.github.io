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
            await new Promise(resolve => setTimeout(resolve, 300));

            // Sample blog content (replace with real data from your server)
            const blogPosts = {
                1: {
                    title: "The Art of Nature",
                    image: "https://via.placeholder.com/800x400",
                    content: "Nature has always been a source of inspiration for artists..."
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