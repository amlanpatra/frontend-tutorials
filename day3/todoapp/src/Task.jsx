function Task({ taskDetails, onDelete, onEdit }) {
  return (
    <div className="taskDetails h-16 w-full bg-slate-300 border-[0.5px] border-slate-400 flex justify-between">
      <div className="p-3 text-slate-500">{taskDetails}</div>

      <div>
        <button
          className="p-2 m-2 bg-white rounded-md"
          onClick={() => onDelete()}
        >
          Delete
        </button>
        <button
          className="p-2 m-2 bg-white rounded-md"
          onClick={() => onEdit()}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Task;
