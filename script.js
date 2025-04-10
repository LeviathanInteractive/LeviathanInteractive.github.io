// Sample blog data (replace with your actual data or fetch from an API)
const blogPosts = {
    1: {
        title: "Why We're Making Dread Not",
        author: "Sarah Ziebarth",
        content: `<br> The water is dark and incredibly cold. The pressure is intense, and the stakes couldn’t be higher... <br> <br> 
        After being attacked by a colossal sea creature, a small nuclear submarine outfitted for research is thrown into a high-stakes 
        battle and must reach the surface before air runs out. Players take on the role of either the Pilot or the Mechanic and must work 
        together to keep the submarine stable by communicating with each other, fixing failing systems, and navigating through perilous waters. 
        Survival depends on the pair’s ability to work together under immense pressure. Failure is not an option.
        <br> 
        <!-- IMAGE_PLACEHOLDER_1 -->
        Dread Not is a virtual reality/PC asymmetric co-op game created by Leviathan Interactive, a studio comprised of 15 UW-Stout students, whose mission is to unite people 
        through games! You play as a pair of marine researchers aboard a doomed vessel that has suffered severe damage and only has 10 minutes before running out of oxygen. 
        Your only chance of reaching the surface is by making emergency repairs, which are completed through cooperative and individual puzzles scattered throughout the 
        system rooms of the submarine. The Pilot, who can be played on either PC or in VR, is constrained to a single room where they control navigation and relay 
        information to the Mechanic in order to keep necessary systems up and running. Alternatively, the Mechanic, played only on PC, is able to move between all 
        other rooms and must repair systems under the Pilot's guidance. This game is all about communication and cooperation. In a world that’s increasingly 
        connected, inspiring people to reach out and work with each other is great motivation for our team. We believe that by creating a game that not only 
        brings people together, but literally requires two to play, we can gradually make the world a better and more entertaining place. 
        <br>
        <br> 
        Generating a fun, yet semi-chaotic atmosphere for players that allows them to really feel the tension of the situation was also key to the idea of this game, and what better way 
        to do that than have both players be in completely different roles with simple, yet interconnected tasks. This is what led our team to implement both PC and 
        VR; we wanted to enhance that asymmetric experience by having two distinct modes of immersion and additionally add another layer of interactivity to the 
        gameplay of the Pilot. Transporting the more stationary role of the two into the environment in such a way that allows them to feel as though they’re 
        actually there helps intensify and incorporate action into an experience that otherwise doesn’t provide much space to explore. However, there is still PC 
        compatibility for the Pilot available for players who prefer a traditional platform, seeing as getting the game into as many hands as possible was another 
        team goal of ours. 
        <br> 
        <br> 
        Needless to say, with inspirations taken from real 1960’s Navy Nuclear Ballistic Missile submarines of the George Washington 
        Class combined with the 80's vibes found in cinematic classics such as The Hunt for Red October and Jaws, Dread Not is sure to be an absolute blast for players 
        of all ages. Will you sync or swim? 
        <br>
        <!-- IMAGE_PLACEHOLDER_2 -->`,
        images: [
            "BlogImages/Blog1/DreadNot_InProgressPoster3.png",
            "BlogImages/Blog1/Sub_DesignPillars_EK.png"
        ],
        imageCaptions: [
            "Dread Not in progress main posters and title art",
            "Dread Not design pillars: “Asymmetric Cooperation,” “Communication,” “Controlled Chaos,” “Tension,” and “Duct-Tape Core,” meaning improvisational, not optimal"
        ]
    },
    2: {
        title: "Chaos in Deep Waters",
        author: "Eleanor Berg",
        content: `<br> Deep beneath the water’s surface, under hundreds of tons of pressure, at the depth 
        the furthest rays of the sun can’t reach is where the crew members of 
        this beaten-up tin can of a submarine find themselves. If they fail to keep the machine functioning, 
        they will be flattened in an instant by the unwavering pressure of the sea. 
        <br><br>
        The Mechanic sprints haphazardly through the submarine, their footsteps drowned out by the piercing alarms. 
        They shout, their voice echoing through the metal hull, but the target of their frustration simply turns down 
        the radio’s volume. The Pilot and the Mechanic are arguing. The Pilot, stuck in the cockpit, pours even more 
        coffee into their "World's Best Submarine Pilot” mug with shaking hands. The sonar pings echo off the steel walls. 
        Something is outside the submarine. The Pilot doesn’t notice, they are screaming through the comms system at the Mechanic, 
        who just said something very rude about the Pilot. Something in the deep dark grows nearer, unseen and unheard. 
        The submarine creaks as the clock ticks down. Water bursts out from a pipe behind a fish-themed motivational poster 
        in the kitchen. The Mechanic can’t understand the Pilot’s directions. The Pilot can’t nderstand the submarine’s user 
        manual. If they don’t communicate efficiently and work together, they will both die, and probably also get fired.
        <br><br>
        Despite the inherent horror the open ocean provides, Dread Not is not meant to be a dark and serious game. 
        We want panic, we want some fear, but communication between the two players is the main priority. What is 
        needed is some lightheartedness and humor to encourage the players to interact and fight playfully with 
        each other. We wanted to make the world around the ship dark yet sublimely beautiful in addition to having 
        a fun, stressful but not overly so, energy-filled game. The juxtaposition of those two ideas made actualizing 
        the atmosphere a bit of a struggle. 
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        We spent a long time in predevelopment trying to nail down consistent mood and aesthetics through concept art 
        and having watch parties of theme-related movies. Making the game pretty was straightforward: prioritizing mood 
        lighting, god rays, pops of color, particle effects, and extra windows to watch the schools of fish– or to 
        watch out for whatever is lurking in the dark. However, getting the general mood right was much harder. On 
        one hand, we want the player to feel stressed, panicked, and maybe frustrated, but we also want them to enjoy 
        the game instead of rage-quitting. We decided an effective way to give the players a break from the panic was to 
        have environmental assets tell a story, not of seriousness and horror, but of cynical, overworked employees and 
        an absurd, out of touch corporation. Many props were included with the sole purpose of forcing players to break 
        out of their frustration. We determined that adding some absurdity to the game helped players relax and get more 
        fun out of the struggle. Eventually we got the mood nailed down in concept, and now all that is left is to make 
        it a reality.
        <br>
        <!-- IMAGE_PLACEHOLDER_2 -->`,
        images: [
            "BlogImages/Blog2/pilotroom.PNG",
            "BlogImages/Blog2/PropModels.png"
        ],
        imageCaptions: [
            "Earliest concept art, made to visualize the aesthetics of the game",
            "Some of the lighthearted props; the mug says, “#1 NON-MILITARY NUCLEAR SUBMARINE PILOT”"
        ]
    },
    3: {
        title: "The World of Dread Not",
        author: "Gabe Anderson",
        content: `<br> The ocean – what a wonderful, diverse, horrifying place to go. Well, you’ve been sent down in a rickety 
        ole’ submarine to research a possible new species. Of course, you’re also needed to collect some extravagant 
        goods for your partner company and expedition funder, Sienna Allure. Sienna is a rising multinational conglomerate 
        hell bent on delivering quality luxury products to its customers. Their newest hit product is a perfume made from a 
        kind of ambergris originating from an undiscovered species that seemingly comes from an unexplored region of the ocean. 
        The group of researchers responsible for the discovery are dying to prove this is a new species after all. To get funding 
        and a capable submarine, they agreed to work with Sienna Allure… a deal with the devil.
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        Cordelia, the submarine the players are on, is a 1960’s era United States nuclear powered George Washington. Sienna 
        Allure was able to make this lucrative purchase because the government deemed it unsalvageable and useless. 
        Luckily, Sienna Allure has also deemed you expendable! The Cordelia is an amalgamation of parts that barely 
        function together; some components have been appropriately updated to 1980’s technology, while others are stuck 
        in the past. Not to mention that undiscovered creature, Charlie, will make his presence known. He isn’t too happy 
        with your intrusion on his turf. 
        <br>
        <!-- IMAGE_PLACEHOLDER_2 -->
        The narrative in Dread Not is driven primarily by captivating environments and immersive audio. We incorporate dynamic 
        lighting affected by the environment and creatures, decals and logos plastered on the walls and equipment, 
        in addition with incredible 80’s themed music to bring it all to life. While your employers may not have your 
        well-being in mind, the automated voice onboard certainly does, though it may not always be too helpful. All the 
        world building is to help contrast suspense and humor, making a more chaotic scenario for the players to work through.
        <!-- IMAGE_PLACEHOLDER_3 -->`,
        images: [
            "BlogImages/Blog3/Company_Logo.png",
            "BlogImages/Blog3/CharlieConcept.png",
            "BlogImages/Blog3/labConcept.png"
        ],
        imageCaptions: [
            "Early Sienna Allure logo concept",
            "Creature concept art (Charlie) by Ben Moon",
            "Submarine lab concept art by Jon Wolfe"
        ]
    },
    4: {
        title: "Designing the Physical Prototype",
        author: "Graham Higdon",
        content: `<br> Dread Not is a two-player co-op game wherein players work together to repair their submarine and 
        surface before catastrophe strikes. “So, how do you repair the sub?” you ask. Well, that depends on how well 
        you get along with your partner. The Pilot is trapped in the navigation room, along with all the solutions and 
        manuals to fix any issues going on in the sub, and the Mechanic is the only other crew member. The Mechanic 
        needs to walk around the sub to look for problems and provide information to the Pilot, while the Pilot needs 
        to diagnose the problems and provide the solutions to the Mechanic – fundamentally, cooperative puzzle-solving. 
        When designing puzzles, it’s always challenging to find a good balance between concepts that are way too difficult 
        and not difficult enough. So that’s why we decided to employ a tactic known as physical prototyping. 
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        Physical prototyping, or paper prototyping, is the process of creating a physical model of a game concept. 
        It can be used to explore a game's mechanics – or, in our case, puzzles – before finalizing the design. Physical 
        prototyping has several benefits: it encourages hands-on problem-solving and, more importantly, allows for quick 
        and easy iteration of designs. Some puzzles were more challenging to implement on paper, but overall, the process was 
        smoother than we expected. Throughout the process, we selected puzzle ideas, sketched them on whiteboards when possible, 
        and invited people unfamiliar with them to solve them together. This helped us determine what worked and what didn’t, 
        which allowed us to further refine our ideas and shape our vision for how players would communicate and solve the puzzles – 
        without wasting time implementing them in the engine. If a puzzle was too simple and could be solved by a single player, 
        we reworked it to encourage more cooperation. If a puzzle was overly confusing, we refined the design to make key details 
        clearer and easier to communicate.  
        <br>
        <!-- IMAGE_PLACEHOLDER_2 -->
        One puzzle initially featured an octagonal arrangement, where both the Mechanic and the Pilot saw eight dots forming an octagon. 
        However, the Pilot's version also included an additional shape connecting the dots as vertices. While some groups found this puzzle 
        enjoyable, most struggled with its complexity. To improve the experience, we simplified it by reducing the dots to six, forming a hexagon. 
        This adjustment made the shapes less intricate while retaining the fun aspects of the puzzle. Additionally, we completely removed some puzzles 
        that simply weren’t enjoyable enough to keep. Physical prototyping has been the lifeblood of our puzzle design, and we will certainly continue 
        to use it when creating new puzzles. 
        `,
        images: [
            "BlogImages/Blog4/PhysicalPrototype_1.jpg",
            "BlogImages/Blog4/PhysicalProtypeAnswers.png"
        ],
        imageCaptions: [
            "The Dread Not design team (Zach Adler, Gabe Anderson, Eleanor Berg, Graham Higdon, and Ryan Thiede) while they're hard at work",
            "A few puzzle solutions and teammate Jacob Richardt midplaytest"
        ]
    },
    5: {
        title: "Implementing Puzzles in Engine",
        author: "Jacob Richardt",
        content: `<br> After being attacked by a creature in the deep, your ship is in disrepair and, playing as the Mechanic, 
        you must now traverse the submarine repairing what you can so you can escape to the surface. These repairs are a 
        central part of our game and an essential step to creating our first build. To ensure this build was playable, we had 
        two developers prototyping and programming puzzles. Our first puzzle prototype was one where you match symbols with a 
        solution showing the correct symbols, and the second was a wire connection puzzle, where you connect nodes together 
        with wires to complete the circuit. 
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        After the interactable aspects of the puzzles were completed, we had to ensure that they could connect to another object 
        that shows the correct solution for the given puzzle. Since the wire puzzles were finished before the network was set up, 
        we spent some time adding particle effects for when the wrong wire is connected. This electrical spark particle system is 
        accompanied by a short delay before any player input is detected by the puzzle.  
        <br><br>
        After that, we simply threw them into the game level, and they worked perfectly the first time, like all code does.
        For any coders reading this, you know that that was clearly a lie. When trying to implement our puzzles in a networked system, 
        we ran into a lot of problems. Once all of those were solved, we then both began to dive deep into the networking code to 
        allow the solution to show correctly on the host or client when the puzzle is on the other.
        <br><br>
        Networking, we found, was very inconvenient. Not only did we have to send the puzzle solutions through blueprints, but 
        now also through the network. We spent many long nights in the code mines until finally we figured out how to connect them 
        between client and host devices.
        <br>
        <!-- IMAGE_PLACEHOLDER_2 -->
        Moving forward, we are transitioning to more C++ code for our puzzles instead of blueprint while we work on bug fixing for 
        the current puzzles. We also will be reading between the puzzles in game with the AI for our creature so that the puzzles will 
        activate when the submarine is damaged. We have already added code to activate and deactivate, so we should be able to connect 
        easily, said every programmer before having to spend hours making it work.
        `,
        images: [
            "BlogImages/Blog5/image.png",
            "BlogImages/Blog5/image (1).png"
        ],
        imageCaptions: [
            "Symbol puzzle prototype in engine",
            "Wire puzzle prototype in engine"
        ]
    },
    6: {
        title: "The Submarine as Seen by the Mechanic",
        author: "Samuel Lambert and Zach Adler",
        content: `<br> Level design truly makes or breaks the flow and nature of one's game through the use of floor plans, 
        lighting, and ease of access to players. Dread Not uses the realistic environment of a submarine and gamifies it in order 
        to make the game easy to understand while holding true to the “duct-tape core” (meaning improvisational or not optimal) 
        design pillar of our game.   
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        To accommodate a comfortable game camera for players in the role of the roving Mechanic, the submarine level design combines 
        elements of the realistic interiors of such a vessel with scale changes to accommodate gameplay needs. This allowed us to create 
        an experience that has enough of the authentic feel to be believable while still being our own designs that adhere to the 
        environmental storytelling required by the game narrative.  
        <br>
        <!-- IMAGE_PLACEHOLDER_2 -->
        <!-- IMAGE_PLACEHOLDER_3 -->
        Specifically, in fitting with “duct-tape core,” the game lore establishes that the submarine has been retrofitted, somewhat 
        broken down, and even hastily taped back together in places. Areas like the reactor room, for example, show the passage of time 
        and change in use; the original powerplant has been removed, leading to the mid deck of the reactor room being replaced with 
        catwalk-style structures held up by beams instead of an actual deck floor.  
        <br>
        <!-- IMAGE_PLACEHOLDER_4 -->
        The radio room, similar to other portions of the submarine, hosts a jumble of different systems and radio equipment stacked 
        upon itself. This room showcases the chaotic nature of gameplay through its design inside the vessel as well as takes on the 
        semi-functional radio room it is meant to be. A tight, yet easy-to-traverse area for players to maneuver, it is actually crowded 
        only in its visual components, which enhances game feel while the players solve puzzles to make repairs.
        <br>
        <!-- IMAGE_PLACEHOLDER_5 -->
        <!-- IMAGE_PLACEHOLDER_6 -->
        The torpedo room is another example of this design philosophy, seeing as its handling systems are held in place by steel girders 
        more closely compared to that of a construction site than that of a nuclear submarine. Only a pair of torpedo tubes exists within 
        the entire space, and otherwise there’s storage below the deck under a pair of vertical bulkheads. In other words, this is a room 
        that could clearly have had more built within it if its design had been more carefully considered by the company the characters work 
        for, which again emphasizes the concepts of improvisation and haphazardness demonstrated by the overarching narrative.
        <br>
        <!-- IMAGE_PLACEHOLDER_7 -->
        The rooms thus far explained in Dread Not have crucial roles for a successful submarine research expedition. However, the lab room 
        holding a specimen inside a glass tank gives credence to why our Mechanic and Pilot are on such a mission. Exploring this narrative 
        driven area hints at what they may be after, but the danger lurking in the surrounding waters is what will alarm players into an 
        urgent state of play.
        <br>
        <!-- IMAGE_PLACEHOLDER_8 -->
        Dread Not’s consideration of unique level design to refit a military submarine into a research vessel allows the concept to stay 
        true to the “duct-tape core” gameplay it offers while still being friendly to players. Additionally, creating a visually aesthetic 
        layout that’s full of complimentary visual storytelling allows players to immerse themselves more fully into our narrative and 
        gameplay simply by navigating the environment. Gamers, be ready to explore as the Mechanic, guide as the Pilot, and try not to 
        succumb to the pressure!
        `,
        images: [
            "BlogImages/Blog6/pic5.PNG",
            "BlogImages/Blog6/pic4.PNG",
            "BlogImages/Blog6/pic3.PNG",
            "BlogImages/Blog6/pic2.PNG",
            "BlogImages/Blog6/CommsRecent1.PNG",
            "BlogImages/Blog6/Commsrecent2.PNG",
            "BlogImages/Blog6/pic1.PNG",
            "BlogImages/Blog6/LabsRecent.PNG"
        ],
        imageCaptions: [
            "In progress reactor room",
            "In progress server room",
            "In progress hallway",
            "In progress reactor room",
            "In progress radio room",
            "In progress radio room",
            "In progress turbine room",
            "In progress laboratory"
        ]
    },
    7: {
        title: "The Pilot Room: Blending Functionality with Design",
        author: "Ryan Thiede",
        content: `
        <!-- IMAGE_PLACEHOLDER_1 -->
        <!-- IMAGE_PLACEHOLDER_2 -->
        The pilot room is the main space for the Pilot player in Dread Not. The Pilot, trapped within this enclosure, must manage multiple 
        tasks including, but not limited to, steering the ship, guiding the Mechanic, and solving puzzles to keep the submarine afloat.   
        <br><br>
        When designing this space, it was important to consider the intention behind each area. As the primary artist assigned to the pilot 
        room, I recognized that Dread Not is a high stakes game, and I wanted the player’s emotions and environment to reflect that while playing.
        <br><br>
        During initial concepting, I spent a great deal of time trying different layouts. With the main stress of the game tied to beating the 
        clock, I wanted the player to understand the space quickly. So, I split the room into four corners, each with a distinct purpose. One 
        corner is for navigation, another for puzzles, another for guiding the Mechanic, and the last for understanding critical submarine/game 
        information. Breaking down one of these areas even further, each gameplay function is laid out to promote efficiency and ease of 
        understanding. For example, the guidance side of the pilot room contains a map, CCTV cameras, and a dashboard of buttons. The Pilot 
        looks at the cameras or map to see where the Mechanic is and relays critical information. If the Mechanic encounters a door, the Pilot 
        will need to input the door number that the Mechanic relays back to them. By laying out the room this way, we are setting the Pilot and 
        Mechanic up for success.  If a two-player team is going to fail, it should be because of their lack of communication or inattention towards 
        the clock, not because they can’t understand the environment that they are set in.
        <br><br>
        When it came to modeling and texturing the space, I took extra care to stick to art fundamentals: composition, color theory, and lighting. 
        Following these basic art principles can take a flat, bland environment and turn it into something that is, artistically, dynamic. An 
        environment that the player can understand and feel connected to. Rounding off the thoughts of functionality from earlier, the room was 
        separated to accommodate modularity. Everything was placed on a grid so that if I needed to add a new asset I would know, roughly, how 
        large it would be before even starting the block out. Shape language was also crucial to breaking up the symmetry of the space.
        <br>
        <!-- IMAGE_PLACEHOLDER_3 -->
        My favorite part of creating the pilot room was adding the individual props and imperfections within the models that made the submarine 
        feel alive. I worked with our character team to portray a story of the Pilot. Sticky notes, cigarettes, photos, memorabilia, broken and 
        empty bottles are a few of these personalized props that, when put together, help players understand the character that they are playing as. 
        Duct tape, scattered tools, faulty wiring, rusty pipes, and outdated equipment emphasize the decaying state of the submarine, itself.
        <br><br>
        As an environment team, we made a conscious effort to spend extra time blending functionality with design. And, because of these efforts, 
        we can create an environment that tells a story through immersion and an experience that, hopefully, players love.
        `,
        images: [
            "BlogImages/Blog7/ryan-thiede-pilot-room-final-render-01.jpg",
            "BlogImages/Blog7/ryan-thiede-pilot-room-final-render-02.jpg",
            "BlogImages/Blog7/ryan-thiede-pilot-room-final-render-04.jpg"
        ],
        imageCaptions: [
            "Pilot room in engine screenshot",
            "Pilot room in engine screenshot",
            "Pilot room in engine screenshot"
        ]
    },
    8: {
        title: "Crafting Dread Not’s Connected Nightmare",
        author: "Ben Rowan",
        content: `<br> When we make video games, often it is one person interacting with one instance of an application. We go about our design process, 
        ideate our mechanics, and begin to build our applications line by line in a very linear fashion knowing we only have one user. Sure, an application 
        may utilize information from the web, upload data to a database, but even in those instances you have just one person making those calls. But what 
        if we were to ask our application to handle two people in our application using our variables? Many software engineers will typically encounter a 
        project/game that requires this level of thinking when their career has begun, however, when designing Dread Not, we were passionate and determined 
        to learn how to overcome this hurdle to make our game.
        <br><br>
        The first hurdle that anyone encounters whilst making a game like this is finding a way to connect the players to the same game. When thinking about 
        our choice of engine, this played a huge factor in deciding to roll with Unreal Engine 5. Unreal Engine has a large community of indie developers and 
        independent teams that have tackled this problem and made solutions for others to take advantage of. For example, we are utilizing a plugin called 
        Advanced Sessions and intend to later use its Steam version for public release. As seen below, there are several visual scripting nodes that allow 
        us to achieve the goal of connecting two players in the same instance.
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        •	Create Advanced Session <br>
            o	Creating an advanced session allows us to create an instance that is joinable for another player. Furthermore, it allows us to customize 
            properties of that session, like abstracting the session name, making it LAN, adjusting how many connections are possible, etc. <br>
        •	Find Sessions Advanced <br>
            o	Finding advanced sessions allows for someone’s game to detect whether there is a public or private instance of the game they could migrate 
            to, effectively allowing them to find another joinable lobby. <br>
        •	Get Session Settings <br>
            o	Getting the session settings allows for us to fetch the custom settings, like password, session name, etc. and compare them to what the 
            client has on their system. <br>
        •	Join Session <br>
            o	Join sessions finalizes the process by finally joining the session!
        <br><br>
        Now this is quite wonderful, really, however we have already run into our next roadblock... character selection. Now, instead of one person 
        choosing which character they would like to play, you must consider that another person potentially wants to play the same character. So, 
        what do you do? Well, our previous version looked a little like this...
        <br>
        <!-- IMAGE_PLACEHOLDER_2 -->
        Holy moly this is messy! We will get more into the nitty gritty in a minute here, but essentially, this compares a variable attached to the 
        player with what the game knows and then tells the server to display that that character is selected, as well as who has selected that character.
        <br><br>
        Once we move past character selection, we run into our game! Now let us think about a game mechanic – we are game designers after all. Take the 
        popular video game The Forest developed by Endnight Games, which is a solo or cooperative survival experience set in... well... a forest... 
        where you and your friends must fend off horrific creatures and find your son. The game allows you to harvest various materials. One of those 
        materials is being able to chop down a tree and collect wood. Now when you are making a game for one person, this should be a no brainer in 
        terms of making sure the player can see what is happening, but when we add another player, something odd happens. The tree will only fall for 
        the host! So, we must implement something called replication for the client to see the tree fall as well. 
        <br><br>
        Replication is the core principle for developing a multiplayer game. It allows for information to be processed by the server and the client, 
        allowing for both players to interact with the rules of your game. So, when we are developing puzzles and mechanics, we utilize Unreal Engine’s 
        built in replication system for functions as seen below. 
        <br>
        <!-- IMAGE_PLACEHOLDER_3 -->
        •	Execute on Owning Client <br>
            o	This function will run on the client that interacts with this function. <br>
        •	Execute on Server <br>
            o	This function will only run on the server. <br>
        •	Execute on All <br>
            o	This function can only be called on the server, however, it casts down to all clients.
        <br><br>
        You can make various relationships with these function types to ensure that every rule you have set for your game can be interacted by both 
        the host and the client!
        <br><br>
        Game dev is as cooperative as Dread Not is; your questions and suggestions are welcome via our email (click on the Contact tab at the top of
        the page to reach us).
        `,
        images: [
            "BlogImages/Blog8/Picture1.png",
            "BlogImages/Blog8/Picture2.png",
            "BlogImages/Blog8/Picture3.png"
        ],
        imageCaptions: [
            "Blueprints for Networking",
            "Blueprinting for Character Selection",
            "Blueprints for Replication"
        ]
    },
    9: {
        title: "VR Prototyping: It Takes a Lot of Time to Pilot a Submarine",
        author: "Nathan Morgan-Shimmin",
        content: `<br> To fully inhabit the Pilot’s seat on the sub, we explored the idea of virtual reality for a more immersive experience. 
        The Pilot is seated on a rolling swivel chair, which allows players with a smaller play space to partake in VR due to the limited range 
        of motion required. Additionally, the objects the Pilot can interact with are much more fun to use with the tactile response of VR. This 
        allows the Pilot to more fully immerse themselves within the game while they are awaiting a response from the Mechanic. However, there 
        are costs with adding a VR option. Right now, everything is built around keyboard and mouse, as well as not just one, but two PC players, 
        so a large portion of our networking and core systems would have to be refactored to be compatible with VR. This takes time.
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        Unfortunately, that would be time we do not have to spare, and after much consideration, we have decided to not pursue virtual reality for 
        our upcoming release. We have found that we would be able to provide a more complete experience by focusing our resources on just our PC build. 
        Additionally, we have the time constraint of the Stout Game Expo for our initial launch, so we cannot devote as much time as we would need to 
        refactor our code and to deal with the bugs that arise from adding that feature. Instead, VR has become a future stretch goal that we would love 
        to implement in a possible post-release version of our game, as we still feel that it would add a lot to the player experience.
        <br>
        <!-- IMAGE_PLACEHOLDER_2 -->
        `,
        images: [
            "BlogImages/Blog9/GrahamVRing.png",
            "BlogImages/Blog9/EverythingGoingWrong.png"
        ],
        imageCaptions: [
            "Teammate Graham in the process of researching VR and puzzles",
            "What we fear would happen to our game if we added VR at deadline"
        ]
    },
    10: {
        title: "The Diving Helmet Decision",
        author: "Eleanor Berg",
        content: `<br> Designing the Mechanic was relatively straightforward. We chose this style of suit because it would completely obscure 
        defining features like race or gender and allow the player to project themselves onto the model. The standard diving suit looks a certain 
        way for practical reasons and there is little room for deviation, so when designing the character, my main goal was not to change the suit 
        itself, but instead add details that reinforce our “duct-tape core” aesthetics. Some straps were left unbuckled, stickers and (of course) 
        duct-tape were added, and the whole suit was beaten up and dirty. Color was the much harder step for me, and while going with a yellow 
        suit would’ve been more realistic, many people said it would make the Mechanic look like a minion from Despicable Me. So, we went with blue, 
        with yellow and metallic accents. Since the arms are the only part visible to the player embodying the Mechanic, and the Pilot can only see 
        the Mechanic through a pixelated camera feed, only the hands needed to be incredibly detailed. However, for marketing purposes and for my 
        own personal portfolio, I spent my own free time fleshing out the design and making the rest of the character detailed as well.
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        <!-- IMAGE_PLACEHOLDER_2 -->
        The Pilot was far trickier. We liked how the Mechanic’s anachronistic suit covered the head and allowed players to project themselves onto 
        the character. However, it wouldn’t really make sense for the Pilot to wear a full suit. After some discussion with the team, we decided that 
        it wouldn’t only be funny, but would also fit our game and solve our problem if the Pilot also, bizarrely, wore a helmet. We ran with this, 
        making family photos with helmet-clad families and pinup posters with helmeted models. With the helmet covering the Pilot’s face, I also needed 
        to cover the rest of their body and somehow add personality. I went with an office worker-esque outfit and gloves, along with some “duct-tape 
        core” details. I also gave them a fancy pilot’s hat on top of the helmet.
        <br>
        <!-- IMAGE_PLACEHOLDER_3 -->
        I modeled the Mechanic (and Pilot’s arms) using my typical modeling pipeline, which includes many different programs. This is the general outline: <br>
        •	Model hard surface assets in Maya <br>
        •	Import the visually important assets into ZBrush for a high poly version, which will be baked on later <br>
        •	Design fabric assets using Marvelous Designer <br>
            o	Adjust fit and add hardware/details of those assets in ZBrush if necessary <br>
        •	Import sculpted assets into Maya and retopologize <br>
        •	UV and sort the model <br>
            o	Make an exploded version of the model and bake that in Substance Painter, along with the high poly versions where needed <br>
        •	Import the finished low poly model into Painter and bake/add the normal maps from the exploded version <br>
        •	Texture the model <br>
        The model is then sent to the team’s animator for rigging and animating.
        <br><br>
        To bring a character from a simple concept sketch to a fully realized 3D figure is incredibly rewarding, though the process can be tedious, 
        frustrating, and unforgiving at times. However, seeing the character come to life in the game makes it all worth it. Players will be able 
        to inhabit these characters through gameplay, narrative, and through the life-sized photo-op cardboard cutouts at our game’s booth when we 
        present our game.
        <br>
        <!-- IMAGE_PLACEHOLDER_4 -->
        <!-- IMAGE_PLACEHOLDER_5 -->
        <!-- IMAGE_PLACEHOLDER_6 -->
        <!-- IMAGE_PLACEHOLDER_7 -->
        `,
        images: [
            "BlogImages/Blog10/conceptsForPrint.png",
            "BlogImages/Blog10/diverConcepts1.png",
            "BlogImages/Blog10/conceptsForPrint (1).png",
            "BlogImages/Blog10/NewLevelSequence._(7)0000.jpeg",
            "BlogImages/Blog10/NewLevelSequence._(2)0000.png",
            "BlogImages/Blog10/NewLevelSequence._(8)0000.jpeg",
            "BlogImages/Blog10/NewLevelSequence._(5)0000.png"
        ],
        imageCaptions: [
            "Mechanic concept art",
            "Mechanic color concepts",
            "Pilot concept art",
            "the Mechanic",
            "the Mechanic",
            "the Mechanic",
            "the Mechanic"
        ]
    }
};

// Function to display blog content
function displayBlogContent(postId) {
    const blogContentSection = document.getElementById("blog-content");
    const blogListSection = document.getElementById("blog-list");
    

    // Hide the blog list and show the blog content
    blogListSection.style.display = "none";
    blogContentSection.style.display = "block";

    // Populate the blog content
    const blogPost = blogPosts[postId];

    let formattedContent = blogPost.content;
    if (blogPost.images && blogPost.images.length > 0) {
        blogPost.images.forEach((image, index) => {
            const caption = blogPost.imageCaptions ? blogPost.imageCaptions[index] : "";
            formattedContent = formattedContent.replace(
                `<!-- IMAGE_PLACEHOLDER_${index + 1} -->`,
                `<div style="text-align:center; margin: 20px 0;">
                    <img src="${image}" alt="Blog Image ${index + 1}" style="max-width:100%; display:block; margin:10px auto;">
                    <p style="font-style: italic; font-size: 14px; color: #666;">${caption}</p>
                </div>`
            );
        });
    }

    document.getElementById("blog-content-title").textContent = blogPost.title;
    /*document.getElementById("blog-content-body").innerHTML = `
        <p><em>By ${blogPost.author}</em></p>
        ${blogPost.content}
        <img src="${blogPost.image}" alt="Blog Image" style="max-height:500px;display:block;margin:auto;"/>
    `;
    */
    document.getElementById("blog-content-body").innerHTML = `
    <p><em>By ${blogPost.author}</em></p>
    ${formattedContent}
    `;


    // Adjusts URL for specific blog
    const blogSlug = blogPost.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    history.pushState({ postId }, "", `#${blogSlug}`);
}

// Function to go back to the blog list
function goBackToBlogList() {
    const blogContentSection = document.getElementById("blog-content");
    const blogListSection = document.getElementById("blog-list");

    // Hide the blog content and show the blog list
    blogContentSection.style.display = "none";
    blogListSection.style.display = "block";

    // Reset the URL
    history.pushState({}, "", "Blogs.html");
}

// Keeps current page + URL on refresh
function loadBlogFromURL() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const postId = Object.keys(blogPosts).find(id =>
            blogPosts[id].title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === hash
        );

        if (postId) {
            displayBlogContent(postId);
        }
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Add click event listeners to blog links
    const blogLinks = document.querySelectorAll(".blog-link");
    blogLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const postId = e.currentTarget.getAttribute("data-post-id");
            displayBlogContent(postId);
        });
    });

    // Add click event listener to the "Back to Blogs" button
    const backButton = document.getElementById("back-to-blogs");
    backButton.addEventListener("click", (e) => {
        e.preventDefault();
        goBackToBlogList();
    });
    loadBlogFromURL();
});
        document.addEventListener('DOMContentLoaded', function() {
            const galleryImages = document.querySelectorAll('.gallery-image');
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const closeBtn = document.querySelector('.close');
        
            // Lightbox functionality
            galleryImages.forEach(image => {
                image.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent the event from bubbling up to the overlay
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
        
            // Filter functionality (if needed)
            const filterButtons = document.querySelectorAll('.filter-button');
            const galleryItems = document.querySelectorAll('.gallery-item');
        
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
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
        // Handles URL changes when browser back button is used
        window.addEventListener("popstate", function (event) {
            if (event.state && event.state.postId) {
                displayBlogContent(event.state.postId);
            } else {
                goBackToBlogList();
            }
        });        