import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  usePDF,
} from "@react-pdf/renderer";
import { Document as ViewDoc, Page as ViewPage, pdfjs } from "react-pdf";
import { useState, useEffect } from "react";
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

const PdfCanvas = () => {
  const data = useSelector((state) => state.resume.initialresume);
  const { fullname, email, phonenumber, address, headline } = useSelector(
    (state) => state.resume.initialresume
  );
  const PdfDoc = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Resume Template Section</Text>
          <Text>{fullname}</Text>
          <Text>{headline}</Text>
          <Text>{email}</Text>
          <Text>{phonenumber}</Text>
          <Text>{address}</Text>
        </View>
      </Page>
    </Document>
  );
  const [instance, updateInstance] = usePDF({ document: PdfDoc });
  // const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }
  useEffect(() => {
    updateInstance(PdfDoc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, updateInstance]);
  return (
    <>
      <ViewDoc file={instance.url} >
        <ViewPage pageNumber={pageNumber} width={400} />
      </ViewDoc>
    </>
  );
};

export default PdfCanvas;
