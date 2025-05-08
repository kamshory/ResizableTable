# ResizableTable

ResizableTable is a JavaScript utility that enables resizable columns for HTML tables. It allows users to adjust the width of table columns by dragging resizer controls added to the table headers.

## Features

- Resizable columns for tables with the class `resizable-table`.
- Smooth resizing experience with visual feedback.
- Easy integration with existing HTML tables.

## How It Works

The script dynamically adds resizer controls (`<span>` elements) to each table header (`<th>`). When a user drags the resizer, the corresponding column's width is adjusted in real time.

## Usage

1. Include the CSS and JavaScript files in your HTML file:
   ```html
   <link rel="stylesheet" href="assets/style.css">
   <script src="assets/script.js"></script>
   ```
2. Add the `resizable-table` class to your table(s):
   ```html
   <table class="resizable-table">
        <thead>
            <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
            </tr>
        </tbody>
    </table>
   ```

3. The script will automatically initialize resizable functionality for all tables with the `resizable-table` class when the page loads.


## Development

File Structure

```txt
[index.html](http://_vscodecontentref_/1)
[README.md](http://_vscodecontentref_/2)
.vscode/
    [settings.json](http://_vscodecontentref_/3)
assets/
    [script.js](http://_vscodecontentref_/4)
    [style.css](http://_vscodecontentref_/5)
    style.css.map
    [style.scss](http://_vscodecontentref_/6)
```

    - `script.js`: Contains the JavaScript logic for enabling resizable columns.
    - `style.scss` and `style.css`: Define the styles for the resizer controls and table.

Running Locally

1. Clone the repository.
2. Open `index.html` in a browser or use a local server (e.g., Live Server in VS Code).
3. Resize the table columns by dragging the resizer controls.

## License

This project is licensed under the MIT License