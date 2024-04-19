import { usePDF } from "@react-pdf/renderer";
// import { useEffect } from "react";
// templates used for creating pdf
import AlphaTemplate from "../../templates/AlphaTemplate";

const PdfDoc = <AlphaTemplate />;
const PdfCanvas = () => {
  const [instance, updateInstance] = usePDF({ document: PdfDoc });

  // useEffect(() => {
  //   updateInstance(instance.url);
  // }, [instance, updateInstance]);
  return (
    <>
      <iframe
        src={instance.url}
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </>
  );
};

export default PdfCanvas;
