import React from 'react'

const Footer = ({ tasks,setTasks}) => {
    
    const CompleteHandler = (index) => {
        console.log(index);
        const copyTasks = [...tasks];
        copyTasks[index].completed = !copyTasks[index].completed;
        setTasks(copyTasks);
        localStorage.setItem("tasks", JSON.stringify(copyTasks));
    };
    
    const deleteHandler = (index) => {
        console.log(index);
        const copyTasks = [...tasks];
        copyTasks.splice(index,1);
        setTasks(copyTasks);
        localStorage.setItem("tasks", JSON.stringify(copyTasks));
    };
  return (
    <>
        <ul className="list-none w-[35%] ">
                {tasks.length > 0 ? (
                    tasks.map((task, index) => {
                        return (
                            <li
                                key={task.id}
                                className="mb-5 flex justify-between items-center border rounded-xl p-5"
                            >
                                <div className="flex items-center">
                                    <div
                                        onClick={() => CompleteHandler(index)}
                                        className={`${
                                            task.completed
                                                ? "bg-green-600"
                                                : "border"
                                        } mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                                    ></div> 
                                    <h1
                                        className={`${
                                            task.completed ? "line-through" : ""
                                        } text-2xl font-extrabold text-yellow-100`}
                                    >
                                        {task.title}
                                    </h1>
                                </div>
                                <div className="flex gap-3 text-2xl text-yellow-100">
                                    <i className="ri-file-edit-line"></i>
                                    <i onClick={()=>deleteHandler(index)} className="ri-delete-bin-3-line"></i>
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <h1 className="mt-10 w-full text-center text-orange-600 text-3xl">
                        No Pending Tasks
                    </h1>
                )}
            </ul>
    </>
  )
}

export default Footer
