# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [GitHub repository](https://github.com/valerii-tarasenko/article-preview-component)
- Live Site URL: [Article preview component](https://valerii-tarasenko.github.io/article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript


### What I learned

- How to switch between two states on one page (form and success message) using JavaScript and a `hidden` CSS class.
- How to validate a form with `addEventListener("submit")`, `event.preventDefault()` and `if / else`.
- How to put text from an input into the page with `textContent`.
- How to build a two-column layout with Flexbox (`row-reverse`) and use `<picture>` to load different images for desktop and mobile.
- How to make a responsive design with `@media` queries, and that the order of CSS rules matters: a later rule can override an earlier one.

### Continued development

I want to improve my JavaScript skills: working with the DOM, events and, later, fetching data from APIs.

### AI Collaboration


I used Claude as a learning assistant while building this project. It helped me with:

- Explaining how the JavaScript works step by step (`querySelector`, `addEventListener`, `classList`, `textContent`) and how HTML, CSS and JS connect.
- Suggesting approaches for the layout (Flexbox with `row-reverse`).
- Reviewing my code and pointing out duplicated CSS and typos.

What I did myself:

- Wrote the HTML structure and adjusted all the CSS to match the design.
- Found and fixed several bugs, such as the `::before` selector on the wrong element and the `.hidden` class being overridden on mobile.
- Decided how to structure the card widths for the form and success states.
- Tested every state (default, hover, error, success) and the mobile layout.

What I learned from this: AI is useful for explanations and ideas, but I need to read, test and understand every suggestion. Several times its code did not work in my project, and I had to debug it myself.

## Author

- GitHub - [valerii-tarasenko](https://github.com/valerii-tarasenko)
