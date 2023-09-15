# ZodiacPairs

In ZodiacPairs - Memory Game, visitors immerse themselves in the constellations of the zodiac signs. Here, they can enhance their memory and matching skills while exploring astronomical representations in an engaging and educational environment.

![ZodiacPai website shown on a range of devices](/assets/images/docs/responsive.png)  

## Demo
The live demo is available at [here](https://brunarihl.github.io/ZodiacPairs-Memory-Game/)!

## Contents

* [User Experience](#user-experience)
  * [Website Overview](#website-overview)
  * [User base](#user-base)
  * [Website Goals](#website-goals)

* [Design](#design)
  * [Color Palette](#color-palette)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
    
* [Features](#features)
  * [General Features on Each Page](#features)
  * [Features and resources to be added in the future](#features-and-resources-to-be-added-in-the-future)
  * [Accessibility](#accessibility)

* [Testing](#testing)
  * [Tested Browsers and Devices](#tested-browsers-and-devices)
  * [Manual Testing](#manual-testing)
  * [Validator Testing](#validator-testing)
  * [Bugs](#bugs)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment](#deployment)

* [Credits](#credits)
  * [Code](#code)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)


## User Experience

### Website overview 

The 'ZodiacPairs' Memory Game is an original creation that immerses players in a captivating universe of zodiacal constellations. Every element of the game, including the selected images, has been designed to engulf the user in this atmosphere. This experience provides an interactive and enthralling view of the cosmos, encouraging players to delve into the rich mythology behind the zodiac signs while challenging their cognitive abilities.

### User base

 * Astrology Enthusiasts: Individuals interested in astrology, zodiac signs, and constellations.

 * Memory Game Enthusiasts: Those who enjoy mental challenges and games that exercise memory skills.

 * Cosmic Explorers: Curious about astronomy and the exploration of space.

 * Friend and Family Groups:  Seek a fun activity to enjoy while getting to know constellations.

 * Online Entertainment Seekers: Look for a fun and interactive web experience.

 * Mental Challenge Seekers: Attracted to games that stimulate the mind.

 
### Website Game Goals  

 * Stimulate Interest in Astrology: Spark curiosity and fascination among users about astrology and its connections with constellations.

 * Encourage Ongoing Improvement: Motivate players to return to the game, aiming to surpass their previous scores and demonstrate progress over time.

 * Enabling Leisure: Enjoyable exploration of astrology and constellations for relaxation and amusement.

 * Provide Information: Offer engaging insights about constellations and zodiac signs.

 * Create an Immersive Experience: Ensure the website's design and content deliver an attractive experience for visitors.

 * Enhance Cognitive Skills: Assist players in refining their memory and concentration abilities.

 * Facilitate Navigation and Usability: Ensure visitors can easily find what they're looking for and navigate the game intuitively.


## Design

### Color palette

Selected a color palette with shades of gray, white, black, and blue to capture the atmosphere of a starry sky and convey the sensation of contemplating constellations. The tones were chosen with the purpose of reflecting the beauty and serenity of the night sky. The contrast between soft colors and darker tones not only evoked the shimmering effect of a starry sky but also contributed to creating a pleasant visual experience, aiding in reading and navigation on the website.

![ZodiacPairs website color palette](/assets/images/docs/palette.png)  

### Typography 

Google Fonts was utilized to incorporate the selected font styles into the website. 

I chose the fonts 'Courier Prime' and 'Space Mono' for the website. 'Courier Prime' was selected for titles and subtitles due to its monospaced formatting, which brings a sense of order and uniformity. On the other hand, 'Space Mono', also monospaced, features a modern and futuristic style, aligning with the theme of constellations. Both fonts were chosen for their high readability, essential for presenting information accurately and accessibly. Their technical and futuristic styles seamlessly integrate with the theme of space and astrology.

![ZodiacPairs fonts choosen](/assets/images/docs/fonts.png)  


### Imagery 

The selected images for the website aim to immerse users in the world of zodiac constellations. I made sure they were high-resolution, seamlessly blending with the colors and theme of the game. This includes a custom logo image and background visuals for the memory game cards. The goal was to provide an aesthetically cohesive and visually stimulating experience, ensuring that users feel connected to the celestial theme while engaging with the game.

### Wireframes

I developed a simple wireframe in PowerPoint for the game, aiming to ensure a consistent experience across mobile devices, computers, and tablets. I adjusted the size of buttons, texts, and cards, while maintaining the same layout for all cases.

I made some adjustments in relation to what I had planned for positioning and added some buttons to enhance functionality and user experience, aiming to ensure the game is accessible and enjoyable on any platform.

![ZodiacPairs wireframe](/assets/images/docs/wireframe.png)  


# Features

The game website consists of only one initial page that starts with a header, buttons to access information about the game rules and the zodiac constellations, play and replay buttons, as well as a game status bar that is activated only when the player presses the "play" button. At this point, the game board with the cards is displayed. Additionally, there are three modal windows: one for the rules, another for game information, and a final one that is displayed when the game concludes.


## Background

High-resolution images, pertinent to the game's theme, were selected for the backgrounds. Tailored to various screen sizes, such as larger displays on computers or smaller ones on phones or tablets, distinct images were displayed for optimal fitting. This method was employed to elevate the visual experience, regardless of the device in use.

![ZodiacPairs backgrownd images - image hero](/assets/images/docs/sizes-bg.png)

### Favicon

The favicon has been added with the game logo in the browser tab.

![ZodiacPairs backgrownd images - image hero](/assets/images/docs/favicon-zp.png)

## Sections

### Header

In the header, there is a custom-designed logo created specifically for the game, accompanied by an inviting phrase encouraging users to play.

![ZodiacPairs header](/assets/images/docs/header.png)

### Informational Buttons

Below the header, users will find there are two informational buttons. 
  
![ZodiacPairs info buttons](/assets/images/docs/info-btns.png)

When clicked, one opens a modal window explaining the rules and scoring of the game, while the other provides a brief explanation about the zodiac sign constellations.

#### How to play:

![ZodiacPairs info buttons](/assets/images/docs/how-play.png)

#### Discover Zodiac Constellations:

![ZodiacPairs info buttons](/assets/images/docs/info-const.png)

### Play and Replay Buttons

* Following that, we have the 'Play' and 'Replay' buttons section. 
* The 'Play' button has been prominently styled to emphasize its role as the central starting point for the user experience

![ZodiacPairs info buttons](/assets/images/docs/play-btns.png)

### Game board:

* The game board is designed to display only when the player presses the 'Play' or 'Replay' buttons. 
* For the memory card game, images of zodiac constellations were used. 
* A custom back card with the game's name was created. 
* When the player matches the corresponding pairs of constellations, the name of the zodiac sign to which the constellation belongs is revealed.

![ZodiacPairs game board cards back](/assets/images/docs/cards-back.png)

![ZodiacPairs game board cards](/assets/images/docs/cards.png)

### Final Game Modal Window:

At the end of the game, a modal window is displayed, informing whether the player has won or lost, as well as presenting the final score, the number of moves required to find the card pairs, and the elapsed time.

![ZodiacPairs final game win](/assets/images/docs/win.png)

![ZodiacPairs final game lose](/assets/images/docs/lose.png)

## Accessibility 

From the project's inception, the game website's design was planned with a focus on accessibility. Special attention was given to ensure there was adequate color contrast, an easily comprehensible structure, and intuitive navigation. Additionally, practices of semantic HTML were implemented, establishing a robust foundation for the user experience.

### LightHouse 

The accessibility, performance, best practices, and SEO (Search Engine Optimization) of the website were analyzed using the LightHouse tool available in Google Chrome's DevTools.

  * Desktop
![LightHouse - desktop](/assets/images/docs/lighthouse.png)  
  * Mobile
![LightHouse - Mobile](/assets/images/docs/lignthouse-mobile.png)  

## Testing 

### Tested Browsers and Devices: 

* Web Browsers: 

  * Google Chrome;

  * Microsoft Edge; 
 
  * Safari; 

  * Mozilla Firefox.


* Mobile Devices: 

  * iPhone Xr;

  * iPhone 12 Pro; (Google Chrome Inspector) 

  * Samsung Galaxy S20 Ultra. (Google Chrome Inspector) 


* Tablet: 

  * Ipad Air 4, 10.9-inch screen;

  * Nest Hub. (Google Chrome Inspector) 

 
* Laptop: 

  * Macbook Air, 13-inch screen;

  * Asus TUF F15, 15.6-inch screen. 

