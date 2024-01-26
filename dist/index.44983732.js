document.addEventListener("DOMContentLoaded", ()=>{
    fetchDataAndPopulateTable();
    // Add event listener to the search input
    document.getElementById("searchInput").addEventListener("input", filterTable);
    // Add event listener to each table header cell for sorting
    const headerCells = document.querySelectorAll("#frameworkTable th");
    headerCells.forEach((cell, index)=>{
        cell.addEventListener("click", ()=>sortTable(index));
    });
});
// Asynchronous function to fetch data and populate the table
async function fetchDataAndPopulateTable() {
    try {
        const response = await fetch("https://dahlgren.miun.se/ramschema_ht23.php");
        // Parse the JSON data from the response
        const data = await response.json();
        renderTable(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
// Function to render the table with the provided data
function renderTable(data) {
    const tableBody = document.getElementById("frameworkTableBody");
    tableBody.innerHTML = ""; // clear old data
    data.forEach((course)=>{
        const row = document.createElement("tr");
        row.innerHTML = `<td>${course.code}</td>
                        <td>${course.coursename}</td>
                        <td>${course.progression}</td>`;
        tableBody.appendChild(row);
    });
}
// Function to sort the table based on the specified column index
function sortTable(columnIndex) {
    const table = document.getElementById("frameworkTable");
    const rows = Array.from(document.getElementById("frameworkTableBody").querySelectorAll("tr"));
    rows.sort((a, b)=>{
        const cellA = a.getElementsByTagName("td")[columnIndex].textContent.trim();
        const cellB = b.getElementsByTagName("td")[columnIndex].textContent.trim();
        return cellA.localeCompare(cellB);
    });
    table.tBodies[0].innerHTML = ""; // clear old data
    rows.forEach((row)=>table.tBodies[0].appendChild(row));
}
// Function to filter the table based on the search input
function filterTable() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.getElementById("frameworkTableBody").querySelectorAll("tr");
    rows.forEach((row)=>{
        const courseCode = row.getElementsByTagName("td")[0].textContent.toLowerCase();
        const courseName = row.getElementsByTagName("td")[1].textContent.toLowerCase();
        if (courseCode.includes(input) || courseName.includes(input)) row.style.display = "";
        else row.style.display = "none";
    });
}

//# sourceMappingURL=index.44983732.js.map
