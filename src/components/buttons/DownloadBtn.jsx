
import toast from "react-hot-toast";

const DownloadBtn = () => {
  const handleDownload = async () => {
    const toastId = toast.loading("Preparing your download... ");

    try {
      // 🔹 fake delay (2.5 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2500));

      const response = await fetch("/files/cv.pdf");
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "cv.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      toast.success("Download started ", {
        id: toastId,
      });
    } catch (error) {
      toast.error("Something went wrong ❌", {
        id: toastId,
      });
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-3 flex gap-1 items-center border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
    >
      Download File
    </button>
  );
};

export default DownloadBtn;

