import { nanoid } from "nanoid";
import { useState } from "react"; 
import Header from "../src/Components/Header"
import Middle from "../src/Components/Middle"
import Footer from "../src/Components/Footer"

const App = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    const [title, setTitle] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newTodo = { id: nanoid(), title, completed: false };
        console.log(newTodo);

        setTasks([...tasks, newTodo]);
        setTitle("");
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTodo]));
    };
    console.log(tasks);


    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            {/*  */}
            <Header tasks={tasks} />
            {/*  */}
            <Middle 
                SubmitHandler={SubmitHandler}
                settitle={setTitle}
                title={title}
            />
            {/*  */}
            <Footer 
               setTasks={setTasks}
                tasks={tasks}
            />
           
        </div>
    );
};

export default App;
