function Loader() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 flex -translate-x-[50%] -translate-y-[50%] transform items-center justify-center">
        <div className="absolute h-2 w-2 animate-ping rounded-full border-2 border-brand-400" />
        <div className="absolute h-5 w-5 animate-ping-delay-1 rounded-full border-2 border-brand-400" />
        <div className="absolute h-10 w-10 animate-ping-delay-2 rounded-full border-2 border-brand-400" />
      </div>
    </div>
  );
}

export default Loader;
