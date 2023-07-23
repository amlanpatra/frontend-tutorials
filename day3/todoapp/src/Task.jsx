function Task({ taskDetails }) {
  return (
    <div className="taskDetails h-16 w-full bg-slate-300 border-[0.5px] border-slate-400 flex justify-between">
      <div className="p-3 text-slate-500">{taskDetails}</div>

      <div>
        <button className="p-2 m-2 bg-white rounded-md">Delete</button>
        <button className="p-2 m-2 bg-white rounded-md">Edit</button>
      </div>
    </div>
  );
}

export default Task;
