# Project 4: Around The U.S.

The 4th project of my journey of becoming a front-end developer.

[Link to the page](https://yaniv10501.github.io/web_project_4/)

## Description

This project is the begging of a social media website, consisting of a profile with picture, name and about info, as well as a photo album which will be modifiable later on with the option to like a photo.

I made this website to display all the blocks and elements correctly on popular screen sizes with a well-planned layout and the @media rule.

All blocks and elements are named and nested according to the BEM methodology.

### Overview

* **Layout plan**

* **Popup windows**

* **JavaScript**

* **@media rule**

### Layout plan

Page is divided into 4 section blocks and a popup window, the sections are -

* Header
* Profile
* Photos
* Footer

**Header**

The Header is a regular block because it contains only 1 element which is the logo. I made the line with a border-bottom declaration in the CSS code.

**Profile**

The Profile block is a flex container, and the name, about-info, and the edit button are nested inside a grid container.

**Photos**

The Photos section has the photos__grid container nested inside, and every photo is a block with white background to match the design with the white square below each photo. The photo block has a template to make the initial photos for the website and to add new photos.

To make the grid responsive to the screen size I set the grid-template-columns to repeat with auto-fit and minmax, you can read about auto-fit [here](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)

**footer**

The Footer is a regular block because it contains only a single paragraph which is the copyrights.

### Popup windows

The Popup windows are hidden blocks that become visible once the user presses either the edit button, the add button or one of the images.

The edit and add buttons open a form to either change the profile name and about-info or to add a photo to the grid.
Changing the name or about info in the popup will change the content in the Profile block, adding a photo name and url in the popup form will add the photo to the photos grid.

If the user clicks one of the images a popup window with the image, the image title and a close button will appear.

To make to overlay transparent without affecting the popup window, ~~I used the ::before pseudo-element with fixed positioning. The fixed positions are used to make the overlay cover all of the browser view-height.~~ I implemented the opacity through the background-color with rgba.

The popup overlay is a flex container, the window is centered with the justify-content and the align-items set to center and the position is set to relative so it will stay at same place even when the user scrolls. The close button position is set to absolute and nested in the popup window block.

There is a modifier for the image popup to make to image fit the container, to reset the container padding, and to set the width and max witdh for the container to fit the image.

### JavaScript

The photos for the photo grid are made through the JS file when the website loads, to make the JS load the images i made the createPhoto function to clone the template of the photo block and assign it with a title, url and the listeners, and then i made the loadPhotos function to go through to initialCards array and add each photo to the grid. I also made the addPhotos function so i can use it bot for the loadPhotos function and for the handleAddFormSubmit function.

The Popup windows are set to visibilty: hidden & opacity: 0, and when the user presses the edit button the popup_opened class modifier changes the visibilty to visible and the opacity to 1. The transistion property is used for smooth opening and closing animations.

To open one of the popups I created modifiers for each popup so i can find it in the DOM tree, I used the **querySelector** to find each popup in the DOM tree, and when one of the listeners detects a click the popup_opened class modifier is added to the co-responding popup with the **classList.add**.

when the user presses the close or save button the popup_opened class modifier is removed with the **classList.remove**.

The Profile info change when the user inputs a new name, info, or both. The changes happen with the **handleFormSubmit Function**, I store the name and info as variables and change them to the user input with the textContent.

To add a photo

### @media rule

There are 2 breakpoints -

* 932px

* 652px

The main changes are the ~~photos-grid template~~ font sizes and the width of the blocks.The Profile block flex-direction is changed to a column for mobile devices, and the add button width change to 282px to match the design.
