function Section({ children }) {
  return (
    <div className="text-gray-800 flex flex-col gap-2 bg-white py-4 px-10 rounded-md shadow">
      {children}
    </div>
  );
}

export default Section;
