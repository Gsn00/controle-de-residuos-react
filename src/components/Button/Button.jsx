function Button(props) {
  return (
    <button
      {...props}
      className={`px-4 py-2 text-white bg-green-400 text-center font-bold rounded-md cursor-pointer ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
