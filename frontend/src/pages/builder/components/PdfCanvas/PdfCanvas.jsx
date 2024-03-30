import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
// import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PdfDoc = (
  <Document
    options={{ workerSrc: "/pdf.worker.js" }}
    onLoadError={(error) => console.log("Error while loading PDF:", error)}
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Resume Template Section</Text>
      </View>
    </Page>
  </Document>
);

// const { fullname, email, phonenumber, address, headline } = useSelector(
//   (state) => state.resume.initialresume
{
  /* {fullname}
<br />
{headline}
<br />
{email}
<br />
{phonenumber}
<br />
{address} */
}
const PdfCanvas = () => {
  return (
    <>
    <PDFViewer>
      <PdfDoc/>
    </PDFViewer>
    </>
  );
};

export default PdfCanvas;
