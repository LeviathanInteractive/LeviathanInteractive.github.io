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
                    content: `The water is dark and incredibly cold. The pressure 
                    is intense, and the stakes couldn’t be higher...  
                    <br> <br>
                    After being attacked by a colossal sea creature, 
                    a small nuclear submarine outfitted for research is thrown 
                    into a high-stakes battle and must reach the surface before 
                    air runs out. Players take on the role of either the Pilot or 
                    the Mechanic and must work together to keep the submarine stable 
                    by communicating with each other, fixing failing systems, and 
                    navigating through perilous waters. Survival depends on the 
                    pair’s ability to work together under immense pressure. Failure 
                    is not an option. 
                    <br> <br>
                    Dread Not is a virtual reality/PC asymmetric co-op game created 
                    by Leviathan Interactive, a studio comprised of 15 UW-Stout 
                    students, whose mission is to unite people through games! You 
                    play as a pair of marine researchers aboard a doomed vessel 
                    that has suffered severe damage and only has 10 minutes before 
                    running out of oxygen. Your only chance of reaching the surface 
                    is by making emergency repairs, which are completed through 
                    cooperative and individual puzzles scattered throughout the 
                    system rooms of the submarine. The Pilot, who can be played on 
                    either PC or in VR, is constrained to a single room where they 
                    control navigation and relay information to the Mechanic in 
                    order to keep necessary systems up and running. Alternatively, 
                    the Mechanic, played only on PC, is able to move between all 
                    other rooms and must repair systems under the Pilot's guidance. 
                    This game is all about communication and cooperation. In a world 
                    that’s increasingly connected, inspiring people to reach out and 
                    work with each other is great motivation for our team. We believe 
                    that by creating a game that not only brings people together, but 
                    literally requires two to play, we can gradually make the world a 
                    better and more entertaining place. 
                    <br> <br>
                    Generating a fun, yet semi-chaotic atmosphere for players that allows 
                    them to really feel the tension of the situation was also key to the 
                    idea of this game, and what better way to do that than have both 
                    players be in completely different roles with simple, yet 
                    interconnected tasks. This is what led our team to implement both 
                    PC and VR; we wanted to enhance that asymmetric experience by having 
                    two distinct modes of immersion and additionally add another layer of 
                    interactivity to the gameplay of the Pilot. Transporting the more 
                    stationary role of the two into the environment in such a way that 
                    allows them to feel as though they’re actually there helps intensify 
                    and incorporate action into an experience that otherwise doesn’t 
                    provide much space to explore. However, there is still PC compatibility 
                    for the Pilot available for players who prefer a traditional platform, 
                    seeing as getting the game into as many hands as possible was another 
                    team goal of ours. 
                    <br> <br>
                    Needless to say, with inspirations taken from real 1960’s Navy Nuclear 
                    Ballistic Missile submarines of the George Washington Class combined 
                    with the 80's vibes found in cinematic classics such as The Hunt for 
                    Red October and Jaws, Dread Not is sure to be an absolute blast for 
                    players of all ages. Will you sync or swim? 
                    `
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