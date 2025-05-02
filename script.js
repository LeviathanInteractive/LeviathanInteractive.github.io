// Sample blog data (replace with your actual data or fetch from an API)
const blogPosts = {
    1: {
        title: "Why We're Making Dread Not",
        author: "Sarah Ziebarth",
        content: `<br> <i>The water is dark and incredibly cold. The pressure is intense, and the stakes couldn’t be higher...</i> 
        <br><br> 
        After being attacked by a colossal sea creature, a small nuclear submarine outfitted for research is thrown into a high-stakes 
        battle and must reach the surface before air runs out. Players take on the role of either the Pilot or the Mechanic and must work 
        together to keep the submarine stable by communicating with each other, fixing failing systems, and navigating through perilous waters. 
        Survival depends on the pair’s ability to work together under immense pressure. Failure is not an option.
        <br> 
        <!-- IMAGE_PLACEHOLDER_1 -->
        <i>Dread Not</i> is a virtual reality/PC asymmetric co-op game created by Leviathan Interactive, a studio comprised of 15 UW-Stout students, whose mission is to unite people 
        through games! You play as a pair of marine researchers aboard a doomed vessel that has suffered severe damage and only has 10 minutes before running out of oxygen. 
        Your only chance of reaching the surface is by making emergency repairs, which are completed through cooperative and individual puzzles scattered throughout the 
        system rooms of the submarine. The Pilot, who can be played on either PC or in VR, is constrained to a single room where they control navigation and relay 
        information to the Mechanic in order to keep necessary systems up and running. Alternatively, the Mechanic, played only on PC, is able to move between all 
        other rooms and must repair systems under the Pilot's guidance. This game is all about communication and cooperation. In a world that’s increasingly 
        connected, inspiring people to reach out and work with each other is great motivation for our team. We believe that by creating a game that not only 
        brings people together, but literally requires two to play, we can gradually make the world a better and more entertaining place. 
        <br><br> 
        Generating a fun, yet semi-chaotic atmosphere for players that allows them to really feel the tension of the situation was also key to the idea of this game, and what better way 
        to do that than have both players be in completely different roles with simple, yet interconnected tasks. This is what led our team to implement both PC and 
        VR; we wanted to enhance that asymmetric experience by having two distinct modes of immersion and additionally add another layer of interactivity to the 
        gameplay of the Pilot. Transporting the more stationary role of the two into the environment in such a way that allows them to feel as though they’re 
        actually there helps intensify and incorporate action into an experience that otherwise doesn’t provide much space to explore. However, there is still PC 
        compatibility for the Pilot available for players who prefer a traditional platform, seeing as getting the game into as many hands as possible was another 
        team goal of ours. 
        <br><br>
        Needless to say, with inspirations taken from real 1960’s Navy Nuclear Ballistic Missile submarines of the George Washington 
        Class combined with the 80's vibes found in cinematic classics such as <i>The Hunt for Red October</i> and <i>Jaws</i>, <i>Dread Not</i> is sure to be an absolute blast for players 
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
        Despite the inherent horror the open ocean provides, <i>Dread Not</i> is not meant to be a dark and serious game. 
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
        The narrative in <i>Dread Not</i> is driven primarily by captivating environments and immersive audio. We incorporate dynamic 
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
        content: `<br> <i>Dread Not</i> is a two-player co-op game wherein players work together to repair their submarine and 
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
        lighting, and ease of access to players. <i>Dread Not</i> uses the realistic environment of a submarine and gamifies it in order 
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
        The rooms thus far explained in <i>Dread Not</i> have crucial roles for a successful submarine research expedition. However, the lab room 
        holding a specimen inside a glass tank gives credence to why our Mechanic and Pilot are on such a mission. Exploring this narrative 
        driven area hints at what they may be after, but the danger lurking in the surrounding waters is what will alarm players into an 
        urgent state of play.
        <br>
        <!-- IMAGE_PLACEHOLDER_8 -->
        <i>Dread Not</i>’s consideration of unique level design to refit a military submarine into a research vessel allows the concept to stay 
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
        The pilot room is the main space for the Pilot player in <i>Dread Not</i>. The Pilot, trapped within this enclosure, must manage multiple 
        tasks including, but not limited to, steering the ship, guiding the Mechanic, and solving puzzles to keep the submarine afloat.   
        <br><br>
        When designing this space, it was important to consider the intention behind each area. As the primary artist assigned to the pilot 
        room, I recognized that <i>Dread Not</i> is a high stakes game, and I wanted the player’s emotions and environment to reflect that while playing.
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
        project/game that requires this level of thinking when their career has begun, however, when designing <i>Dread Not</i>, we were passionate and determined 
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
        <!-- INDENT_START -->
            o	Creating an advanced session allows us to create an instance that is joinable for another player. Furthermore, it allows us to customize 
            properties of that session, like abstracting the session name, making it LAN, adjusting how many connections are possible, etc. <br>
        <!-- INDENT_END -->
        •	Find Sessions Advanced <br>
        <!-- INDENT_START -->
            o	Finding advanced sessions allows for someone’s game to detect whether there is a public or private instance of the game they could migrate 
            to, effectively allowing them to find another joinable lobby. <br>
        <!-- INDENT_END -->
        •	Get Session Settings <br>
        <!-- INDENT_START -->
            o	Getting the session settings allows for us to fetch the custom settings, like password, session name, etc. and compare them to what the 
            client has on their system. <br>
        <!-- INDENT_END -->
        •	Join Session <br>
        <!-- INDENT_START -->
            o	Join sessions finalizes the process by finally joining the session!
        <!-- INDENT_END -->
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
        <!-- INDENT_START -->
            o	This function will run on the client that interacts with this function. <br>
        <!-- INDENT_END -->
        •	Execute on Server <br>
        <!-- INDENT_START -->
            o	This function will only run on the server. <br>
        <!-- INDENT_END -->
        •	Execute on All <br>
        <!-- INDENT_START -->
            o	This function can only be called on the server, however, it casts down to all clients.
        <!-- INDENT_END -->
        <br><br>
        You can make various relationships with these function types to ensure that every rule you have set for your game can be interacted by both 
        the host and the client!
        <br><br>
        Game dev is as cooperative as <i>Dread Not</i> is; your questions and suggestions are welcome via our email (click on the Contact tab at the top of
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
        <!-- INDENT_START -->
            o	Adjust fit and add hardware/details of those assets in ZBrush if necessary<br>
        <!-- INDENT_END -->
        •	Import sculpted assets into Maya and retopologize <br>
        •	UV and sort the model <br>
        <!-- INDENT_START -->
            o	Make an exploded version of the model and bake that in Substance Painter, along with the high poly versions where needed <br>
        <!-- INDENT_END -->
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
    },
    11: {
        title: "The Frankenstein Monster of Dread Not",
        author: "Ben Moon",
        content: `<br> The grand purpose of the main sea creature is to provide an antagonistic role opposite the players and give a sense of unease as 
        the players get glimpses of the beast in short bursts. Compared to the standard fish and the nautical life found around it, it is meant to feel 
        almost alien. These aspects come together to form an immersive underwater environment that will bring players closer to the <i>Dread Not</i> experience.
        <br><br>
        For the initial stages of the game development process, I created a list of creatures and fish that we would want to see in the game. The first 
        question posed was whether the creatures should be based in reality or if they should be entirely alien in concept. During early ideation, there 
        was the idea of the game taking place in a wormhole or alternate dimension that the sub sailed into. In the end, we decided that the main creature 
        hunting the player should be the only ‘unrealistic’ one in the game. Several early drafts for the creature exist, but most of them were based on 
        large fish both modern and prehistoric. During the concept art phase, I studied and concepted through worm-like, bug-like, and piranha-like designs, 
        but eventually decided to stay true to the whale-like roots for the body with some further inspiration from deep sea creatures like gulper eels and 
        prehistoric fish like the mosasaurus. The very first ideation of the monster was a massive whale creature that had eldritch aspects, such as multiple 
        eyes and visible veins. Eventually, this design was altered to include more prehistoric and shark-like aspects to maintain the horror factor and add 
        more realism.
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        <!-- IMAGE_PLACEHOLDER_2 -->
        Now that the basic framework for the creature was done, it was time to go into further details and add a bit of a story to the design. The team decided 
        that this beast would be a very old fish that was likely a survivor from the time when prehistoric beasts would swim around, such as the mosasaurus they 
        were based on. On top of this, they would be a deep sea creature, so I decided to give the beast very hollow dead eyes, to help add some eeriness to the 
        design, as well as convey that it lived in an area where vision wasn’t nearly as much of a necessity. As for the ancient aspect, I decided to make the 
        skin tone very dull and leathery, to imply that age had taken away much of the color. Adding barnacles and faded scars across the body implied that this 
        creature was a dominant and violent force years ago and has since  been slowed down by age. The final design is meant to give the feeling of an ancient 
        force of power reawakened to hunt once again. 
        <br>
        <!-- IMAGE_PLACEHOLDER_3 -->
        According to the game’s lore, the creature is considered to be the third individual of importance to the mission. Seeing as Alpha and Bravo are the Pilot 
        and Mechanic, the beast was given the simple name of Charlie. Outside of the game, however, it was just a funny name we all came up with and with its use 
        overtime, it simply stuck.
        `,
        images: [
            "BlogImages/Blog11/Monster Whale Concepts.jpg",
            "BlogImages/Blog11/CharlieConcept.png",
            "BlogImages/Blog11/image (1).png"
        ],
        imageCaptions: [
            "Early concept art for the creature",
            "Final creature concept art",
            "Charlie, the Creature"
        ]
    },
    12: {
        title: "AI Development: Bringing Charlie to Life",
        author: "Victor Mondragon",
        content: `<br> <i>Dread Not</i> is a game where two players need to work together to keep their submarine from falling apart. Sticking to the design pillar 
        of “duct-tape core,” it makes sense that this submarine isn’t very strong to begin with. There’s no way the situation could get any worse, right? 
        Well, when you throw a giant leviathan that’s constantly attacking your sub into the mix, I’d say that’s about the worst it can get.  
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        Nicknamed Charlie, this monster is a threat that’s constantly looming over the engineers and keeping them on their toes. Throughout a playthrough, Charlie 
        can be seen and heard by the player characters stalking the submarine, passing over it, and damaging it. Charlie’s presence brings a looming state of 
        panic, fear, and dread as the players never know when he’ll strike, and whether or not said strike would be what ends their playthrough. Although he’s as 
        terrifying as he is, you can’t help but experience a sense of awe when you see Charlie come to life in-game. This makes you wonder: how exactly does Charlie 
        work and why does he work the way he does?  
        <br><br>
        <h3>BUILDING CHARLIE'S AI SYSTEM</h3>
        When figuring out how to make Charlie work, we first had to figure out everything we wanted Charlie to do:<br><br>
        •	Patrol/Stalk the submarine: Slowly patrol the sub, letting his presence be known to the players via sound queues or even being seen through one of the many windows.<br>
        •	Pass the submarine: Get up close and personal with the sub by passing right next to or over it. This would be used to give the players a little scare and an up-close look at Charlie.<br>
        •	Attack the submarine: The most terrifying task, Charlie can attack the submarine, giving the players more repairs to fix and shortening the amount of time they have to reach the surface.<br><br>
        After discussion, we decided that there would be two main pieces that make up the AI System that allows Charlie to act the way he does. Those two pieces are the <b>Charlie-AI</b> and the <b>Director-AI</b>.
        <br><br>
        <h3>THE CHARLIE-AI</h3>
        The Charlie-AI is a system that mainly relies on behavior trees. Behavior trees are a visual, organized way to develop AI for NPCs. They contain a series of tasks 
        that an AI can perform and can be used to properly control the flow of decisions that the AI makes. This would be used to control and execute Charlie’s main tasks of 
        patrolling, passing, and attacking. 
        <!-- IMAGE_PLACEHOLDER_2 -->
        As you can see, Charlie’s Behavior Tree is rather simple. It checks whether or not it’s ready to either attack or pass the submarine. If Charlie isn’t going to do either 
        of the two, the entirety of the tree runs. It finds a point in an already set array of patrol points, moves to said point, and then increments the index of points so that 
        he can move onto the next point without issue. It continues until Charlie is ready to either attack or pass by the submarine. Once Charlie reaches this state, the patrol 
        task of the behavior tree is temporarily stopped, and Charlie’s AI instead executes the attack or pass task of the behavior tree.
        <br><br>
        <h3>THE DIRECTOR-AI</h3>
        The Director-AI (or the Director) is an AI that adjusts the pacing and difficulty of the game dynamically. The Director is consistently keeping track of different variables 
        that are present in the game, such as the number of damaged systems currently present, how much health the sub has left, the amount of time until reaching the surface, 
        how often Charlie has been attacking, and more. The Director uses these variables in order to determine whether or not it should back off the players or throw more at them. 
        If the players have a lot going on in the sub, then the Director will pull Charlie back and have him pass by more, rather than attack. Conversely, if the players’ situation 
        is nothing but smooth sailing, it’ll make Charlie more aggressive and have him attack more. 
        <!-- IMAGE_PLACEHOLDER_3 -->
        These two pieces work together to make Charlie act the way he does, and it’s easy to expand upon these, as well. If we’d like to add more to Charlie’s patrolling, like having 
        him take a different path on occasion or adjust the noises that he makes, we can add said changes to his behavior tree. If we’d like Charlie to have a new type of attack, like 
        maybe one where he holds onto the ship and continuously does damage unless the players take appropriate action, we can add a new function to his Director-AI that occurs if it’s 
        going too well for the players. These two pieces are rather flexible and are easy to expand upon, allowing us to continuously improve Charlie’s AI.
        <br><br>
        So... How have YOU been faring against Charlie? Did you manage to reach the surface and see the light of day again? Or did you get lost in the depths of the ocean? Let us know!
        `,
        images: [
            "BlogImages/Blog12/Charlie_InGame.PNG",
            "BlogImages/Blog12/Charlie_BehaviorTree.PNG",
            "BlogImages/Blog12/Director_Code.PNG",
        ],
        imageCaptions: [
            "Charlie stalking the sub in-game",
            "Charlie's behavior tree",
            "Portion of Director-AI code declarations"
        ]
    },
    13: {
        title: "Adding Movement to the Mayhem",
        author: "Gabe Anderson and Ben Moon",
        content: `<br> When you think of animation, I bet you think of your favorite Disney movie or Saturday morning cartoon. Animation isn’t limited 
        to feature-length films and your family room TV; it is everywhere, even when it isn’t the focus. Video games need animation to enhance immersion 
        and to keep gameplay fluid. Good animation should feel completely natural, almost to the point that you never even notice it. <i>Dread Not</i> is unique 
        in that only one of our player characters, the Mechanic, will need animation. We incorporated a camera system that the Pilot can use to see where 
        the Mechanic is in the submarine. The Pilot is never seen by either player. Some animation is more for fun than anything else. Our game focuses 
        heavily on the players communicating with each other, so adding a waving animation for the Mechanic to use is a cool way to encourage player 
        interaction.
        <br><br>
        How is it all done? First, we start with a 3D mesh of the character and use joints to create a skeleton. This skeleton will then be used as points 
        of movement in the character, so it’ll end up looking relatively close to a real human skeleton with joints in all the same places we have, plus a 
        few extras for anything else attached to body. In our case, we need an extra joint for the air tanks placed on the Mechanic’s back and a chain of 
        joints to allow the tube to connect the tanks to the helmet to stretch. Next, we create controllers to move each of the joints we animate. Finally, 
        we can apply the joints to the character mesh via something called skin weights. Skin weights bind the skin to the joints so that when the joints move, 
        so does the mesh. Voila! You can now animate the character. The animation itself uses a graph system and timeline to calculate movements between 
        keyframes set by the animator. This graph can be edited to perfect animations.
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        <!-- VIDEO_PLACEHOLDER_1 -->
        Also rich with movement is the aquatic life that surrounds the submarine. These creatures provide a frame of reference for the player and help establish 
        the relative stress of their current situation in a manner different than the claustrophobic level design. For the smaller fish, the primary source of 
        animation comes from utilizing the Niagara tools in Unreal Engine 5 to turn small 3D models and 2D images into particles that can be manipulated and 
        shifted around the submarine. This allows for swarms of smaller fish to swim past windows without limiting the framerate or quality of the game. Larger 
        fish have simple scripted patterns to have special designated call signs much like an actor on a stage. Some of them are meant to signal to the player 
        that they have reached certain depths, while others are intended to be quick jokes that the player may not even notice if they aren’t paying attention.
        <br>
        <!-- IMAGE_PLACEHOLDER_2 -->
        Arguably more important than all the surrounding life is that of the primary antagonist, Charlie. He is the only character that both players can see with 
        their own eyes, and as such, they need to believe that this is a creature that is truly alive and posing a threat to them. Despite this, most of Charlie’s 
        movements follow a staged set of pre-animated scenes and motions that are scripted to play during certain events. Crashing into the ship, staring at the 
        Pilot, swimming through the dark, and illuminating the ship are some of these moments that are constructed beforehand so that they can be implemented in a 
        specific way to help flesh out the experience. Aside from this, Charlie is set to have basic animations for swimming around that the player may see in the 
        distance to know that they are under constant threat. These animations are meant to mimic the bodily movements of whales and sharks, while general mouth 
        movements are based on those of gulper eels and basking sharks. These animations come together to bring a monster to life that’ll amp up the tension for 
        any players.
        <br>
        <!-- VIDEO_PLACEHOLDER_2 -->
        `,
        images: [
            "BlogImages/Blog13/Mechanic_Rig.png",
            "BlogImages/Blog13/Clarence.jpg"
        ],
        imageCaptions: [
            "Mechanic animation rig",
            "Model of Clarence, a sunfish"
        ],
        videos: [
            "BlogImages/Blog13/Mechanic_Idle.mp4",
            "BlogImages/Blog13/2025-04-22 10-54-24 1.mp4"
        ],
        videoCaptions: [
            "Mechanic idle animation",
            "Charlie's idle animation"
        ]
    },
    14: {
        title: "Reporting to You: Behind the Media",
        author: "Elaine Kelling",
        content: `<br> Our first step in marketing was gaining your interest – and now we have it!
        <br><br>
        We posted our trailer and saw the uptick in views immediately. From there, we started to share our blogs and some of our art! We came to you with some 
        of our best work to show off the game rooms, characters, and our beloved Charlie. We’ve even posted our in-progress work, so you could follow along with 
        our process as it happened.
        <br>
        <!-- IMAGE_PLACEHOLDER_1 -->
        We wanted it to reach you at your best of times, so we posted primarily during your morning coffee breaks and evening phone scrolls! Our strategy started 
        with our audience as a part of our crew, and we’re going to keep it going.
        <br><br>
        When planning out our posting schedule, we wanted to be consistent and unique in the content we showed to our audience.  Leading up to Stout Game Expo, we 
        are showing off different areas of our game to get you excited – and that we’re proud to show!
        <br>
        <!-- IMAGE_PLACEHOLDER_2 -->
        At the Stout Game Expo, you’ll have the chance to drop by our booth. We’ll have dividers between players to give you that submarine feeling as you play at 
        the event! We’ll also have tricky puzzle sheets and character cutouts for you to take your picture with as you wait for your chance to play. Before you leave 
        the booth, make sure to snag some of our merch including our stickers and patches.
        <br><br>
        We’re going to continue giving you updates on our progress even as our blogs become less frequent – stayed tuned to our Instagram! We’ll also keep an updated 
        view of our gallery here on our official website so you can see any new contributions and assets. Our game will remain up on itch and is coming soon to Steam 
        for all to enjoy!
        <br>
        <!-- IMAGE_PLACEHOLDER_3 -->
        <!-- IMAGE_PLACEHOLDER_4 -->
        `,
        images: [
            "BlogImages/Blog14/trailerpost.png",
            "BlogImages/Blog14/schedule.png",
            "BlogImages/Blog14/characterpost.png",
            "BlogImages/Blog14/charliepost.png"
        ],
        imageCaptions: [
            "Instagram post on the Dread Not process trailer",
            "Social media schedule",
            "Instagram post on characters",
            "Instagram post on the creature, Charlie"
        ]
    },
    15: {
        title: "Making Underwater Magic: Realistic Fish and Caustic Lighting",
        author: "Zach Adler and Sarah Ziebarth",
        content: `
        <!-- IMAGE_PLACEHOLDER_1 -->
        When it comes to creating immersive game worlds, it’s the small details that breathe life into the environment. In our latest update, we’re taking a deep dive
         (pun intended) into two examples of the visual effects (VFX) that occur beyond the hull of the submarine in <i>Dread Not</i>. We’ll start first with something that’s 
         both visually stunning and surprisingly complex: realistic swimming fish!
         <br><br>
         We simulate the behavior of real fish — the way they group together and change direction in a fluid, natural motion. Using 3D models, textures, and basic animations. 
         Think less “background decoration,” and more “living ecosystem.”
        <br> 
        <!-- IMAGE_PLACEHOLDER_2 -->
        <!-- IMAGE_PLACEHOLDER_3 -->
        Niagara, Unreal Engine’s powerful VFX system, gave us the tools we needed to accomplish this. We started by creating a custom particle emitter for the fish. Creating 
        this float emitter allows for custom particles, in our case, fish, to follow a path, resulting in a true to life resemblance of a school in the outside environment. 
        <br>
        <!-- IMAGE_PLACEHOLDER_4 -->
        <!-- IMAGE_PLACEHOLDER_5 -->
        <!-- VIDEO_PLACEHOLDER_1 -->
        As for the second visual effect, a beautiful underwater scene isn’t complete without the hypnotic dance of light across the ocean floor. Those shimmering, rippling 
        patterns are known as caustics, and more specifically, they are the patterns of light created when sunlight bends and focuses through the surface of water. You’ve 
        probably seen them in pools or shallow areas of the ocean — they shift constantly with the waves, and they’re an essential part of making an underwater environment 
        feel right. 
        <br><br>
        To fit this aesthetic in our game, we implemented a dynamic underwater caustic lighting system that creates this same effect in Unreal Engine to complement our 
        Niagara-driven swimming fish. This was done by creating a custom shader that takes a texture, layers this a couple times on top of itself, then gradually pans these 
        layers in different directions over time so they appear to move. Another variable adds a slight distortion to each layer that appears like a gentle rippling across 
        the design, which elevates the shader to another level of realism both because it more accurately represents the movement of waves and keeps each layer of the texture 
        from looking the same. Lastly, this shader is applied as a light function to either a directional light or individual spotlights within the scene that we can then place 
        wherever we wish the effect to show!
        <br>
        <!-- IMAGE_PLACEHOLDER_6 -->
        Paying close attention to such subtle, but powerful details as the realistic movement of schools of fish or caustic lights streaming through the window of a submarine 
        are what make an interactive game environment even more magical for players to immerse themselves in. Even though neither are intrinsic to the mechanics of the game, 
        we at Leviathan Interactive believe that their absence would be more noticeable than most other features within <i>Dread Not</i>. So, next time players get the chance, we hope 
        they’ll glance out a window to see the passing fish while running frantically down a hallway, or even just stare hopelessly at the floor of the pilot’s room, where the 
        sunbeams from above will surely be rippling in time with the waves.
        <br>
        <!-- VIDEO_PLACEHOLDER_2 -->
        `,
        images: [
            "BlogImages/Blog15/FIshCLoseup.PNG",
            "BlogImages/Blog15/Fish1.PNG",
            "BlogImages/Blog15/Fish2.PNG",
            "BlogImages/Blog15/Particle UE System.PNG",
            "BlogImages/Blog15/FishHole.PNG",
            "BlogImages/Blog15/CausticBP.png"
        ],
        imageCaptions: [
            "Fish particle test in engine",
            "Fish model version one",
            "Fish model version two",
            "In game view looking out a porthole",
            "Blueprints for generating fish particles",
            "Blueprints for generating caustic lighting"
        ],
        videos: [
            "BlogImages/Blog15/FishVideoNS.mp4",
            "BlogImages/Blog15/Caustics.mp4"
        ],
        videoCaptions: [
            "In engine fish particle test",
            "In game caustic lighting"
        ]
    }
};

function applyIndentationBlocks(content) {
    return content.replace(
        /<!-- INDENT_START -->([\s\S]*?)<!-- INDENT_END -->/g,
        (_, innerContent) => {
            return `<div style="margin-left: 40px;">${innerContent.trim()}</div>`;
        }
    );
}

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
    if (blogPost.videos && blogPost.videos.length > 0) {
        blogPost.videos.forEach((video, index) => {
            const caption = blogPost.videoCaptions ? blogPost.videoCaptions[index] : "";
            formattedContent = formattedContent.replace(
                `<!-- VIDEO_PLACEHOLDER_${index + 1} -->`,
                `<div style="text-align:center; margin: 30px 0;">
                    <video controls style="max-width:100%; display:block; margin:10px auto;">
                        <source src="${video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <p style="font-style: italic; font-size: 14px; color: #666;">${caption}</p>
                </div>`
            );
        });
    }    

    formattedContent = applyIndentationBlocks(formattedContent);
  

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