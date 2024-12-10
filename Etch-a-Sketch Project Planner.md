**Tags:** [[Projects]]

## Goals:
- [ ] Create a single page webpage for an etch-a-sketch tool
	- [ ] Function:
		- [ ] A 16x16 grid of square divs in the center of the screen
			- [ ] (Test) The ability for the grids to scale based on the viewport size
			- [ ] (Test) Fixed grid scale constraints
			- [ ] The ability to click a square and have it change colour (see: changing div class or change the background using JS)
		- [ ] Buttons In the header for board manipulation
			- [ ] Reset button
			- [ ] Colour picker
			- [ ] Grid density (how many squares squared the sketchpad will be at a maximum of 100)
	- [ ] Styling:
		- [ ] Banner at the top of the screen
			- [ ] Basic title at the top
			- [ ] Buttons underneath for controlling the sketchpad - Need to figure out how to implement a colour picker
		- [ ] Complementary neutral colours throughout the page so as to not interfere with the "drawing" section
		- [ ] "main" container for the sketchpad
			- [ ] Grid squares are a neutral colour at default
				- [ ] Grid squares have some growth scale applied on mouse hover to indicate what is being selected
				- [ ] Clicked squares have the colour (chosen with the top button) applied on click. Colour should only change when a new one is applied to it or when the reset button is pressed.


## Sprints
1. Basic boilerplate, linking to stylesheet and script page
	- [ ] Boilerplate
	- [ ] Stylesheet linked in html
		- [ ] Import font, link in html
	- [ ] Script page linked in html
2. Classes and DIVS (elements and styling)
	- [ ] Class for header
		- [ ] Spans the width of the viewport
		- [ ] TBD - Header height (%?, px?)
		- [ ] Background colour
		- [ ] Header Text (h1, something simple like etch-a-sketch)
		- [ ] Button ID's
			- [ ] Reset
			- [ ] Colour Picker
			- [ ] Grid Density (slider?)
			- [ ] Determine universal button styling:
				- [ ] Colours (background, font)
				- [ ] Corner Radii
				- [ ] Any hover effects
	- [ ] Class for main body
		- [ ] Colours (background, font)
		- [ ] Sketchpad area
			- [ ] Background colour
			- [ ] Box colour
			- [ ] Any hover effects etc on each div
3. Coding
	- [ ] Sketchpad
		- [ ] Determine a loop for creating a grid of divs
			- [ ] Create a function tied to a slider or input box that allows users to define the dimensions
		- [ ] Have event listeners applied on each div for manipulation
			- [ ] Start with basic click to change background colour to a pre-defined colour
		- [ ] Have the reset button return the grid to default colours
		- [ ] 


## Review
### What went well

### What challenges did I face

### Key takeaways