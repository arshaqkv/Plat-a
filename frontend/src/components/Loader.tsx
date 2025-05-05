import { HourglassTop } from "@mui/icons-material";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Spinning Lucide Loader Icon */}
      <HourglassTop className="w-20 h-20 text-amber-800 animate-spin" />
    </div>
  );
};

export default Loader;
