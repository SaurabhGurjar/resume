import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const downloadCV = (cv) => {
  const doc = new jsPDF("portrait", "pt", "a4");
  html2canvas(cv).then((canvas) => {
    const imgData = canvas.toDataURL("img/png");
    const doc = new jsPDF("p", "mm", "a4");
    const componentWidth = doc.internal.pageSize.getWidth();
    const componentHeight = doc.internal.pageSize.getHeight();
    doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
    doc.save("cv.pdf");
  });
};

export default function DownloadButton() {
  return (
    <button
      onClick={() => {
        downloadCV(document.getElementById("cv-preview"));
      }}
    >
      Download
    </button>
  );
}
