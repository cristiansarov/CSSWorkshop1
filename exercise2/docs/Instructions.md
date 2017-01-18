# Exercise 2

In this exercise we will create the sidebar content:

* the header that contains the logos;
* the content that contains the round number, icon and progress.
* the footer that contains the name of the contest, session name and powered by logo.

[<img src="screenshot.jpg" width="300" height="188" />](screenshot.jpg)

## Instructions

Let's start with the header and descend to the footer.

Before starting at there tags at the end of the head tag:

```html
<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
```

These are the links for the Ubuntu font-family and font-awesome font icons.

### Step 1 - Add the logos to the sidebar header

Add the images to the `.sidebar__header` and style them to be 300px, respectively 220px.

To align the images to the center, you could use the combination of properties: `display:block` and `margin: 0 auto`.

Adjust the vertical margin of previous properties to match the screenshot.

Do the same for the sidebar header container. example: `padding: 50px 120px 0 0`

### Step 2 - Add the round details

First, in `index.html`, create the html elements:

```html
<div class="sidebar__content">
    <div class="sidebar__wrapper">
        <h1 class="sidebar__title">Round 1</h1>
        <i class="sidebar__avatar">
            <span class="sidebar__icon fa fa-rocket"></span>
        </i>
        <div class="sidebar__progress-text">1/3</div>
        <div class="sidebar__progress-bar">
            <span class="sidebar__progress-bg active"></span>
            <span class="sidebar__progress-bg"></span>
            <span class="sidebar__progress-bg"></span>
        </div>
    </div>
</div>
```

Before styling, add the `font-family: Ubuntu, sans-serif` property to the `body` element. This will affect all elements on the layout.

The `.sidebar__title` has `#a283d8` color.

The `.sidebar__avatar` and `.sidebar__icon` elements has both `border-radius:50%`.

The `.sidebar__avatar` element has `#463360` border color and 10px padding.

The `.sidebar__icon` element has 150px height and width and it's a flexbox with the items aligned to the center. Adjust the font size as you wish.

Adjust the `.sidebar__progress-text` element with desired margin and font size.

The `.sidebar__progress-bar` is a flexbox with a height of 2px and white background.

The `.sidebar__progress-bg` has a width of 33% from parent width.

The `.sidebar__progress-bg.active` element has a `#f5a623` background color, -2px margin and 3px border radius.

### Step 3 - Add the footer elements

In `index.html`, create the html elements:

```html
 <div class="sidebar__footer">
    <div class="sidebar__meta">
        <h2 class="sidebar__subtitle">Who's King in Public SpeaKING?</h2>
        <h3 class="sidebar__info">
            <img class="sidebar__square" src="assets/bluebiz_logo.png" />
            BlueBIZ Edition
        </h3>
    </div>
    <div class="sidebar__powered">
        <a href="http://www.knolyx.com/">
            <img class="sidebar__knolix" src="assets/powered_by_knolyx.png" />
        </a>
    </div>
</div>
```

Adjust the `.sidebar__subtitle` and `.sidebar__info` by removing the margin and adding a font size desired.

Make the `.sidebar__info` element a flexbox  (align it verticaly) and also make the font weight 400.

Make the `.sidebar__square` element 30px width.

The `.sidebar__powered` element has `#1d073e` left border color.

Adjust the `.sidebar` element padding as you wish. example: `padding: 15px 30px 15px 15px`.

## Next Exercise

Go the [Exercise 3](../../exercise3/docs/Instructions.md) to continue the workshop.