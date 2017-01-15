# Exercise 1

In this exercise we will create the containers of the data displayed in the layout.

[<img src="screenshot.jpg" width="300" height="188" />](screenshot.jpg)

## Instructions

We will create the sidebar and main content.

The sidebar must be a fixed width, and the main content should resize on window resize.

### Step 1 - create the containers

Notice strange names for html classes. Don't worry we are using BEM more info [here](http://getbem.com/naming/).

```html
<div class="sidebar">
    <div class="sidebar__header">

    </div>
    <div class="sidebar__content">

    </div>
    <div class="sidebar__footer">

    </div>
</div>
<div class="main">

</div>
```

### Step 2 - style the containers

In the `index.scss` file, use Flexbox to make the sidebar 500px fixed width, and the main content resizable (`flex-grow: 1;`).

### Step 3 - style the header, content and footer

In the `index.scss` file:

Use Flexbox to make the sidebar a flex with column direction, containing the 3 items.

The sidebar must have the `#1d073e` background color.

The sidebar footer must have the `#4e3f69` background color, and a temporary 90px height.

### Step 4 - Cut the sidebar in a parallelogram form

Notice the sidebar we created has straight lines. Let's create the shape provided in the screenshot:

```css
.sidebar:before {
  content: "";
  position: absolute;
  top: 0;
  right: -1px;
  border-top: 100vh solid #fff;
  border-left: 140px solid transparent;
}
```

This will create a triangle shape that has 140px width and 100% viewport height.

More on CSS Shapes [here](https://css-tricks.com/examples/ShapesOfCSS/)

## Next Exercise

Go the [Exercise 2](../../exercise2/docs/Instructions.md) to continue the workshop.