/* eslint-disable react/prop-types */
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  // usePDF,
} from "@react-pdf/renderer";

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

// const PdfDoc = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Resume Template Section</Text>
//       </View>
//     </Page>
//   </Document>
// );

const PdfCanvas = () => {
  return (
    <>
      <PDFViewer width="100%" height="100%">
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Resume Template Section</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
    </>
  );
};

export default PdfCanvas;
