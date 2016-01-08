# lightbox_hana
Picture grid with lightbox view.

Existing Bugs:
- Error when previous and next change direction.
  Ex. hit next first then hit previous or vice versa.
      After numerous hits however the images begin to 
      appear again.
  - This error is due to line 49 in scripts.js. I believe
     this is due to the img grid not being reloaded
     before this DOM get request is made. Therefore
     there is no img with the ID I am searching for.
- Alignment of the Next, Prev, Close buttons need improvement

Future Features:
- Title displayed on hover in grid layout
- Remove hover gray out in lightbox view
- Remove the incremental scrolling in the lightbox view
- Either horizontal scroll or pagination showing more photos in the vertical layout
- Make the lightbox always fill out the page, even as you scroll down the grid.
- Make text for close, next, prev glyphicons.
- Enable escape when user clicks outside of lightbox.
- Enable left and right arrows as prev and next.
- Mobile Responsive using media queries