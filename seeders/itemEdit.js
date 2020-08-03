<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Edit Items</title>
    <link rel="stylesheet" href="/css/edit.css" />
  </head>
  <body>
    <h2>Edit Items</h2>

    <div>
      <h3><%= item.name %></h3>
      <img src=" <%= item.img %> " />

      <form action="/itemsC/<%=room.id%>?_method=PUT" method="POST">
        Name: <input type="text" name="name" value="<%=item.name%>" /><br />
        Image Source:
        <input type="text" name="img" value="<%=item.img%>" /><br />
        <input type="submit" name="" value="Edit Item" />
      </form>
    </div>

    <br />
    <nav>
      <a href="/itemsC/"> <h4>Back to Items</h4> </a> &nbsp; &nbsp;
      <a href="/"> <h4>Homepage</h4> </a>
    </nav>
  </body>
</html>
