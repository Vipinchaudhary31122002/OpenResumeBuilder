import { useEffect, useState } from "react";
import { PDFDocument} from "pdf-lib";
import {  StandardFonts } from "pdf-lib";
import { rgb } from "pdf-lib";

const PdfCanvas = () => {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const createPdf = async () => {
      const pdfDoc = await PDFDocument.create();
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

      const page = pdfDoc.addPage();
      const { height } = page.getSize();
      const fontSize = 30;
      page.drawText("Resume template", {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
      });

      const pdfBytes = await pdfDoc.save();
      const pdfUrl = URL.createObjectURL(
        new Blob([pdfBytes], { type: "application/pdf" })
      );
      setPdfUrl(pdfUrl);
    };

    createPdf();
  }, []);

  return (
    <>
      {pdfUrl && (
        <iframe
          title="PDF Viewer"
          src={pdfUrl}
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      )}
    </>
  );
};

export default PdfCanvas;
