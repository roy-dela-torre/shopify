<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <h1>Simple Calculator</h1>
        <input type="text" id="display" placeholder="0" readonly>
        <div class="buttons">
            <button class="number">1</button>
            <button class="number">2</button>
            <button class="number">3</button>
            <button class="operator">+</button>
            <button class="number">4</button>
            <button class="number">5</button>
            <button class="number">6</button>
            <button class="operator">-</button>
            <button class="number">7</button>
            <button class="number">8</button>
            <button class="number">9</button>
            <button class="operator">*</button>
            <button class="number">0</button>
            <button class="clear">C</button>
            <button class="equal">=</button>
            <button class="operator">/</button>
        </div>
        <div id="result"></div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $('.number').click(function() {
                var number = $(this).text();
                var currentDisplay = $('#display').val();
                $('#display').val(currentDisplay + number);
            });

            $('.operator').click(function() {
                var operator = $(this).text();
                var currentDisplay = $('#display').val();
                $('#display').val(currentDisplay + operator);
            });
            $('.clear').click(function() {
                $('#display').val('');
                $('#result').empty();
            });

            // Click event handler for equal button
            $('.equal').click(function() {
                var expression = $('#display').val();
                $.ajax({
                    url: 'calculate.php',
                    type: 'POST',
                    data: { expression: expression },
                    dataType: 'json',
                    success: function(response) {
                        $('#result').text(response.result);
                    },
                    error: function(xhr, status, error) {
                        console.error("Error:", error);
                        console.log("Status:", status);
                        console.log("XHR:", xhr);
                    }
                });
            });
        });
    </script>
</body>
</html>
