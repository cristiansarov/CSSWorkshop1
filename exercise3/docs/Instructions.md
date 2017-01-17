# Exercise 3

In this exercise we will create the main content person results

[<img src="screenshot.jpg" width="300" height="188" />](screenshot.jpg)

## Instructions

Let's start creating a person template, style it, and the copy it 2 times, as provided in screenshot.

### Step 1 - Prepare the results container

Make the `.main` element a flexbox with centered items and `padding: 0 50px 0 0`.

The `.main>div` element must have 100% width to match the flex container width.

### Step 2 - Create the person template

```html
<!--PERSON 1-->
<div class="person">
    <div class="person__avatar">
        <img class="person__image" src="assets/person1.jpg" />
    </div>
    <div class="person__meta">
        <h3 class="person__title">Andreea Popescu</h3>
        <div class="person__progress">
            <div class="person__bar" style="width:30.52%"></div>
            <div class="person__text">30.52%</div>
        </div>
    </div>
</div>
```

### Step 3 - Style the person template

The `.person` element is a flexbox.

The `.person__image` element has `#ccc` border color, 50% border radius, 160px width and 5px padding.

The `.person__meta` element has `flex-grow: 1` property to make if resizable, opposed to the image.

Style the `.person__title` element with the margin and font size desired.

The `.person__progress` element is a flexbox with `#ccc` border color, `-12px` left margin, `5px` border radius and `44px` height.

The `.person__bar` element has `#f5a623` background color and `100%` height.

The `.person__text` element has `#f5a623` color and `21px` font size.

## Workshop complete

Congratulation, you have finished the workshop!

Other workshops coming soon.