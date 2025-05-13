<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form - Wisy Library</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
</head>
<body>
    <div class="title-container">
        <h1>Wisy Library</h1>
    </div>
    
    <!-- Navbar seperti di homepage -->
    <nav class="navbar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="contact-us.html">Contact Us</a></li>
            <li><a href="form.php">Visitor Form</a></li>
            <li><a href= "tabel.php">Multiplication Table</a></li>
        </ul>
    </nav>
    
    <header>
        <h1>Visitor Form</h1>
        <p>For any questions, you can send me a message using the form below.</p>
    </header>
    
    <div class="form-container">
        <form action="https://formspree.io/f/xdkekyoa" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="identity">Identity:</label>
            <input type="text" id="identity" name="identity" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="phone">Phone Numb.:</label>
            <input type="text" id="phone" name="phone" required>
            <label for="gender">Gender:</label>
            <input type="text" id="gender" name="gender" required>
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required>
            <input type="submit" value="Send">
        </form>
    </div>
</body>
</html>
