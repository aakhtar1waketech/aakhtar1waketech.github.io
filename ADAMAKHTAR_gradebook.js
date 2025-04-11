<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adam Akhtar</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }

    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>
  <h1>Adam Akhtar</h1>
  <table>
    <thead>
      <tr>
        <th>Assignment 1</th>
        <th>Assignment 2</th>
        <th>Assignment 3</th>
      </tr>
    </thead>
    <tbody id="gradebook-body">
      <!-- Data rows will be populated here -->
    </tbody>
  </table>

  <script>
    // Function to fetch grade data
    function fetchGradeData() {
      // Logic for fetching grade data (e.g., from an API or database)
      console.log("Fetching grade data...");
      return [
        { assignment1: "", assignment2: "", assignment3: "" },
        { assignment1: "", assignment2: "", assignment3: "" }
      ];
    }

    // Function to populate the gradebook table
    function populateGradebook() {
      const gradebookData = fetchGradeData();
      const tbody = document.getElementById("gradebook-body");

      gradebookData.forEach(data => {
        const row = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = data.assignment1;
        const td2 = document.createElement("td");
        td2.textContent = data.assignment2;
        const td3 = document.createElement("td");
        td3.textContent = data.assignment3;

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        tbody.appendChild(row);
      });
    }

    // Call the populateGradebook function to load the data
    populateGradebook();
  </script>
</body>
</html>