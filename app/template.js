export default ({ markup, styles }) => `<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Discount cards store</title>
    ${styles}
    <meta name="viewport" content="width=device-width initial-scale=1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Asap" rel="stylesheet">
    <style type="text/css">
        body{
            margin:0;
            font-family: 'Roboto', sans-serif;
            height: 100vh;
        }
    </style>
</head>
<body>
    <div id="root">${markup}</div>
    <script src="app.bundle.js"></script>
</body>
</html>`;