# ResizableTable

ResizableTable is a JavaScript utility that allows HTML table columns to be resized. Users can adjust the width of table columns by dragging resize controls added to the table headers.

## Features

- Easily resizable table columns.
- Supports specifying which columns can or cannot be resized using the `data-resizable` attribute.
- Smooth user experience with visual feedback.
- Easy integration with existing HTML tables.

## How It Works

The script dynamically adds resize controls (`<span>`) to each table header (`<th>`). When users drag the controls, the corresponding column's width is adjusted in real time.

## Usage

1. Include the CSS and JavaScript files in your HTML file:
   ```html
   <link rel="stylesheet" href="assets/style.css">
   <script src="assets/ResizableTable.js"></script>
   <script src="assets/script.js"></script>
   ```

2. Add the `resizable-table` class to your table and use the `data-resizable="true"` attribute to specify which columns can be resized:
   ```html
   <table class="resizable-table">
       <thead>
           <tr>
               <th data-resizable="true">Name</th>
               <th data-resizable="true">Age</th>
               <th>City</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Ali</td>
               <td>25</td>
               <td>Jakarta</td>
           </tr>
           <tr>
               <td>Budi</td>
               <td>30</td>
               <td>Bandung</td>
           </tr>
       </tbody>
   </table>
   ```

3. The script will automatically initialize the resize functionality for all tables with the `resizable-table` class when the page loads.

## Examples

Here are some usage examples:

- **All columns are resizable except the last column:**
  ```html
  <table class="resizable-table">
      <thead>
          <tr>
              <th data-resizable="true">Name</th>
              <th data-resizable="true">Age</th>
              <th>City</th>
          </tr>
      </thead>
  </table>
  ```

- **Only the second column is resizable:**
  ```html
  <table class="resizable-table">
      <thead>
          <tr>
              <th>Name</th>
              <th data-resizable="true">Age</th>
              <th>City</th>
          </tr>
      </thead>
  </table>
  ```

- **All columns are resizable except the first and last columns:**
  ```html
  <table class="resizable-table">
      <thead>
          <tr>
              <th>No</th>
              <th data-resizable="true">Name</th>
              <th data-resizable="true">Age</th>
              <th>City</th>
          </tr>
      </thead>
  </table>
  ```

## File Structure

```txt
index.html
README.md
.vscode/
    settings.json
assets/
    ResizableTable.js
    script.js
    style.css
    style.css.map
    style.scss
```

- `ResizableTable.js`: Contains the main logic for enabling resizable columns.
- `script.js`: Contains the initialization logic for tables with the `resizable-table` class.
- `style.scss` and `style.css`: Define the styles for the resize controls and table.

## Running Locally

1. Clone this repository.
2. Open `index.html` in a browser or use a local server (e.g., Live Server in VS Code).
3. Resize the table columns by dragging the resize controls.

## License

This project is licensed under the MIT License.