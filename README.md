# front-end-web-development-task2
front end web development repository for second task

The purpose of the task is to:

- Using FetchAPI calls along with async/await.
- Practice sorting and filtering data.
- Practical use of the development environment you created in previous steps.

In this task, you will use FetchAPI along with async/await to make an AJAX call to JSON data.

You can either use an external URL: https://dahlgren.miun.se/ramschema_ht23.php

Or download and include the JSON file among your own project files (right click -> "Save as"): ramschema_ht23.json

The JSON data contains information about the framework for the Web Development program and has the following structure:


[
    {
        "code": "dt057g",
        "coursename": "Web Development I",
        "progression": "A",
        "syllabus": "https://www.miun.se/..."
    },
    {
        "code": "dt084g",
        "coursename": "Introduction to Programming in JavaScript",
        "progression": "A",
        "syllabus": "https://www.miun.se/..."
    }
]

It contains the following data:

- code - Course code
- coursename - Course name
- progression - Progression, A or B
- syllabus - URL to syllabus ( Note: these may become out of date over time, as they are updated quite often and then get a new URL)

Your task will be to read in the framework diagram and present this in table format on a web page.
The table should show data for the following fields: course code , course name and progression - syllabus is optional to show . 

In this table there must be functionality to:

    * Sort data in alphabetical order, by course code, course name and progression.
    It is optional if you also want to be able to let visitors choose between descending and ascending sorting order .

    * Filter data (course code and course name) based on search phrase. For example, if the search phrase "dt" is entered, only courses that contain "dt" in either course code or course name will be displayed in the table.

All updates must be done using JavaScript, without reloading the page.
Input for filtering should give results in the table immediately when the search phrase is changed.


