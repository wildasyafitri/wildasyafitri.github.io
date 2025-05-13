<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wisy Library</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        table {
            border-collapse: collapse;
            width: 500px;
            margin: 20px auto;
        }
        th, td {
            border: 1px solid #000;
            padding: 8px;
            text-align: center;
        }
        th {
            background-color:rgb(133, 79, 79);
            font-weight: bold;
        }
        tr:first-child {
            background-color: #f2f2f2;
        }
        td:first-child {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        h1 {
            text-align: center;
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <div class="title-container">
        <h1>Wisy Library</h1>
    </div>
    
    <nav class="navbar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="contact-us.html">Contact Us</a></li>
            <li><a href="form.php">Visitor Form</a></li>
            <li><a href= "tabel.php">Multiplication Table</a></li>
        </ul>
    </nav>
   <h1>Tabel Perkalian 10x10</h1>
    
    <?php
    // Membuat tabel perkalian 10x10
    echo "<table>";
    
    // Membuat header baris pertama
    echo "<tr><th>x</th>";
    for ($i = 1; $i <= 10; $i++) {
        echo "<th>$i</th>";
    }
    echo "</tr>";
    
    // Membuat tabel perkalian dengan loop bersarang
    for ($i = 1; $i <= 10; $i++) {
        echo "<tr>";
        echo "<td>$i</td>"; // Menampilkan angka di kolom pertama
        
        for ($j = 1; $j <= 10; $j++) {
            $hasil = $i * $j;
            echo "<td>$hasil</td>";
        }
        
        echo "</tr>";
    }
    
    echo "</table>";
    ?>
</body>
</html>
