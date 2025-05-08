/**
 * Makes table columns resizable by adding resizer controls to each column header.
 * @param {string} selector - The CSS selector for the table(s) to make resizable.
 */
function ResizableTable(selector) {
    // Variables to store the starting position and width during resizing
    this.startX = 0;
    this.startWidth = 0;
    // Reference to the current instance for use in event listeners
    let _this = this;

    /**
     * Initializes the resizable table functionality.
     * Adds resizer controls to each column header and sets up event listeners.
     */
    this.init = function() {
        // Select all tables matching the given selector
        const resizableTables = document.querySelectorAll(selector);

        resizableTables.forEach(resizableTable => {
            // Prepare event listeners for the current table
            _this.prepareEventListener(resizableTable);
        });
    };

    /**
     * Prepares event listeners for a specific table.
     * Adds resizer controls to each column header and sets up mousedown events.
     * @param {HTMLElement} resizableTable - The table element to make resizable.
     */
    this.prepareEventListener = function(resizableTable) {
        // Get all table header cells (th) in the table
        let ths = resizableTable.querySelectorAll('thead > tr > th[data-resizable="true"]');

        // Add a resizer control (span) to each header cell
        ths.forEach(th => {
            let control = document.createElement('span');
            control.classList.add('column-resizer'); // Add a class for styling
            th.appendChild(control); // Append the resizer control to the header cell
        });

        // Select all resizer controls in the table
        const resizers = resizableTable.querySelectorAll('.column-resizer');
        resizers.forEach(resizer => {
            const th = resizer.parentElement; // Get the parent header cell of the resizer

            // Add a mousedown event listener to start resizing
            resizer.addEventListener('mousedown', e => {
                _this.mouseDown(e, th);
            });
        });
    };

    /**
     * Handles the mousedown event to start resizing a column.
     * @param {MouseEvent} e - The mousedown event.
     * @param {HTMLElement} th - The table header cell being resized.
     */
    this.mouseDown = function(e, th) {
        _this.startX = e.clientX; // Record the initial mouse X position
        _this.startWidth = th.offsetWidth; // Record the initial column width
        let colIndex = th.cellIndex; // Get the index of the column being resized

        // Add a 'resizing' class to the header and corresponding table body cells
        th.classList.add('column-resizing');
        th.closest('table').querySelectorAll(`tbody tr`).forEach(row => {
            row.cells[colIndex]?.classList.add('column-resizing');
        });

        // Add event listeners for mousemove and mouseup
        document.addEventListener('mousemove', function(e) {
            _this.onMouseMove(e, th);
        });
        document.addEventListener('mouseup', function(e) {
            _this.onMouseUp(th, colIndex);
        });

        // Change the cursor and disable text selection during resizing
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    };

    /**
     * Handles the mousemove event to resize the column.
     * @param {MouseEvent} e - The mousemove event.
     * @param {HTMLElement} th - The table header cell being resized.
     */
    this.onMouseMove = function(e, th) {
        if (th.classList.contains('column-resizing')) {
            const style = window.getComputedStyle(th); // Get computed styles of the header cell
            const paddingLeft = parseInt(style.paddingLeft, 10); // Get left padding
            const paddingRight = parseInt(style.paddingRight, 10); // Get right padding
            const paddingOffset = paddingLeft + paddingRight; // Calculate total padding
            const newWidth = _this.startWidth + (e.clientX - _this.startX) - paddingOffset; // Calculate new width
            th.style.width = newWidth + 'px'; // Apply the new width to the header cell
        }
    };

    /**
     * Handles the mouseup event to stop resizing.
     * @param {HTMLElement} th - The table header cell being resized.
     * @param {number} colIndex - The index of the column being resized.
     */
    this.onMouseUp = function(th, colIndex) {
        // Remove the 'resizing' class from the header and corresponding table body cells
        th.classList.remove('column-resizing');
        document.querySelectorAll(`tbody > tr`).forEach(row => {
            row.cells[colIndex]?.classList.remove('column-resizing');
        });

        // Remove the event listeners for mousemove and mouseup
        document.removeEventListener('mousemove', _this.onMouseMove);
        document.removeEventListener('mouseup', _this.onMouseUp);

        // Reset the cursor and re-enable text selection
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    };

    // Initialize the functionality
    this.init();
}