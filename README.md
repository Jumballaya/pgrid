#Pgrid
> Simple flexbox grid system implemented in postcss

###What's inside?

Pgrid is made of 2 parts: the grid and the cell. Grids can be column based or row based and support
as many nested grids as you want.

Pgrid is built with a functional CSS aproach in mind.

###How to use Pgrid

####Simple three column grid

```html
<div class="grid row justify-start wrap">
  <div class="cell four">
    <h1>This is a cell</h2>
  </div>
  <div class="cell four">
    <h1>This is a cell</h2>
  </div>
  <div class="cell four">
    <h1>This is a cell</h2>
  </div>
</div>
```

####Responsive three column grid

```html
<div class="grid xs-column sm-column md-row justify-start wrap">
  <div class="cell xs-twelve sm-twelve md-six mn-four">
    <h1>This is a cell</h2>
  </div>
  <div class="cell xs-twelve sm-twelve md-six mn-four">
    <h1>This is a cell</h2>
  </div>
  <div class="cell xs-twelve sm-twelve md-six mn-four">
    <h1>This is a cell</h2>
  </div>
</div>
```
