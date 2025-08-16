function Input(props) {
  return (
    <div>
      <span className="font-bold">{props.title}</span>
      <input
        className="bg-white border border-slate-300 outline-slate-400 px-3 py-1 rounded-md w-full"
        {...props}
      />
    </div>
  );
}

export default Input;
