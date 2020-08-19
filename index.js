$(function() {
    // Handle new entry event
    $('#js-shopping-list-form').submit( event => {
        // stop the default form submission behavior
        event.preventDefault();
        // Get new entry item for shopping list
        const newItem = $(this).find(
            'input[name="shopping-list-entry"]').val();
        // Apped new item with html format
        // Keep multiline to understand the format of the html text
        $('ul').append(
            `<li><span class="shopping-item">${newItem}</span>` +
            '<div class="shopping-item-controls">' +
              '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
              '</button>' +
              '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
              '</button>' +
            '</div>' +
         ' </li>'
        );
    });
    
    // Handle check toggle button
    $('ul').on('click', 'button.shopping-item-toggle', function(event) {
        // Travel up and find closest li element
        // Find .shopping-item
        // Toggle class item checked
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    // Handle delete option
    $('ul').on('click', 'button.shopping-item-delete', function(event) {
        // Travel up and find closest li element
        // Remove
        $(this).closest('li').remove();
    });    
  });