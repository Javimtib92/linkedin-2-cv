import profileData from "./config/profile";
import "@fontsource-variable/archivo-narrow";
import "@fontsource/barlow";
import "./app.css";
import { ResumePage } from "./components/ResumePage";
import { ProfileDataProvider } from "./providers/profile";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

export function App() {
  const onExportClick = () => {
    const element = document.getElementById("resume-page");

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 size width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Scale height accordingly to image width
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("output.pdf");
    });
  };
  return (
    <ProfileDataProvider profileData={{ profileData }}>
      <button onClick={onExportClick}>Export</button>
      <ResumePage />
    </ProfileDataProvider>
  );
}
