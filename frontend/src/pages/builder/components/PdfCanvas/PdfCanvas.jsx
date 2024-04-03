/* eslint-disable react/prop-types */
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  usePDF,
} from "@react-pdf/renderer";
import { Document as ViewDoc, Page as ViewPage, pdfjs } from "react-pdf";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PdfDoc = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Resume Template Section</Text>
        <Text>{data.fullname}</Text>
        <Text>{data.headline}</Text>
        <Text>{data.email}</Text>
        <Text>{data.phonenumber}</Text>
        <Text>{data.address}</Text>
      </View>
    </Page>
  </Document>
);

const PdfCanvas = () => {
  const initialResume = useSelector((state) => state.resume.initialresume);
  const [data, setData] = useState(initialResume);
  const [instance, updateInstance] = usePDF({ document: PdfDoc });
  // const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }
  useEffect(() => {
    setData(initialResume);
    updateInstance(<PdfDoc data={data} />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, updateInstance, initialResume]);
  return (
    <>
      <ViewDoc file={instance.url}>
        <ViewPage pageNumber={pageNumber} width={400} />
      </ViewDoc>
      {/* <canvas
        id="PdfCanvas"
        width="600"
        height="600"
        style={{ backgroundColor: "white" }}
      ></canvas> */}
    </>
  );
};

export default PdfCanvas;
