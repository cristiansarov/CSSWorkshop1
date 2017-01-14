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
    <div>
        <h1>Round 1</h1>
        <i><span class="fa fa-rocket"></span></i>
        <div class="sidebar__progress-text">1/3</div>
        <div class="sidebar__progress-bar">
            <span class="active"></span>
            <span></span>
            <span></span>
        </div>
    </div>
</div>
```

Before styling, add the `font-family: Ubuntu, sans-serif` property to the `body` element. This will affect all elements on the layout.

The `h1` has `#a283d8` color.

The `i` and `i>span` elements has both `border-radius:50%`.

The `i` element has `#463360` border color and 10px padding.

The `i>span` element has 150px height and width and it's a flexbox with the items aligned to the center. Adjust the font size as you wish.

Adjust the `.sidebar__progress-text` element with desired margin and font size.

The `.sidebar__progress-bar` is a flexbox with a height of 2px.

The `.sidebar__progress-bar>span.active` element has a `#f7931e` background color, -2px margin and 3px border radius.

### Step 3 - Add the footer elements

In `index.html`, create the html elements:

```html
 <div class="sidebar__footer">
    <div class="sidebar__meta">
        <h2>Who's King in Public SpeaKING?</h2>
        <h3>
            <img src="assets/bluebiz_logo.png" />
            BlueBIZ Edition
        </h3>
    </div>
    <div class="sidebar__powered">
        <a href="http://www.knolyx.com/">
            <img src="assets/powered_by_knolyx.png" />
        </a>
    </div>
</div>
```

Adjust the `h2` and `h3` elements with the margin and the font-size desired.

Make the `h3` element a flexbox and make the `h3>img` element 30px width.

The `.sidebar__powered` element has `#1d073e` left border color.

Adjust the `.sidebar` element padding as you wish. example: `padding: 15px 30px 15px 15px`.

## Next Exercise

Go the [Exercise 3](../../exercise3/docs/Instructions.md) to continue the workshop.