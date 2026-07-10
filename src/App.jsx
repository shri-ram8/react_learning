import { useState, useEffect } from "react";

function App() {

    // React state to store students
    const [students, setStudents] = useState([]);

    useEffect(() => {

        // Step 1: fetch() sends HTTP request
        // It immediately returns a Promise
        fetch("http://localhost:8080/students")

            // Step 2:
            // .then() registers this callback with the Promise.
            // When the Promise resolves,
            // Promise automatically calls this callback.
            .then(response => {

                console.log("Response received");

                // response is an HTTP Response object
                return response.json();
            })

            // Step 3:
            // response.json() also returns a Promise.
            // Another callback is registered.
            .then(data => {

                console.log("Actual JSON Data");

                console.log(data);

                // Store data in React state
                setStudents(data);

            })

            // Step 4:
            // If any Promise fails,
            // this callback is executed.
            .catch(error => {

                console.log(error);

            });

    }, []);

    return (

        <>
            <h1>Student List</h1>

            <ul>

                {
                    students.map(student => (

                        <li key={student.id}>

                            {student.id} - {student.name}

                        </li>

                    ))
                }

            </ul>

        </>

    );

}

export default App;