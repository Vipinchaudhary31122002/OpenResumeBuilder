import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  // usePDF,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    flexDirection: "column",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// const PdfDoc = () => {
//   const { fullname, email, phonenumber, address, headline } = useSelector(
//     (state) => state.resume.initialresume
//   );
//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>
//             Resume Template Section
//             {fullname}
//             {headline}
//             {email}
//             {phonenumber}
//             {address}
//           </Text>
//         </View>
//       </Page>
//     </Document>
//   );
// };

const PdfCanvas = () => {
  const { fullname, email, phonenumber, address, headline } = useSelector(
    (state) => state.resume.initialresume
  );
  // const MyDoc = (
  //   <Document>
  //     <Page size="A4" style={styles.page}>
  //       <View style={styles.section}>
  //         <Text>Resume Template</Text>
  //         <Text>{fullname}</Text>
  //         <Text>{headline}</Text>
  //         <Text>{email}</Text>
  //         <Text>{phonenumber}</Text>
  //         <Text>{address}</Text>
  //       </View>
  //     </Page>
  //   </Document>
  // );
  // const [instance, updateInstance] = usePDF({ document: MyDoc });
  // updateInstance();

  return (
    <>
      <PDFViewer width="100%" height="100%">
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
      </PDFViewer>
    </>
  );

  // return (
  //   // <PDFViewer>

  //   //   {instance.url}</PDFViewer>
  //   <iframe src={instance.url} height="100%" width="100%"></iframe>
  // );
};

export default PdfCanvas;
