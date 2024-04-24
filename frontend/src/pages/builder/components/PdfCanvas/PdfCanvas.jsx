/* eslint-disable react/prop-types */
import { usePDF, PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
// templates used for creating pdf
// import AlphaTemplate from "./templates/AlphaTemplate.jsx";
import { useSelector } from "react-redux";
// const PdfDoc = <AlphaTemplate />;
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import garamond from "src/assets/garamond-font/cormorant-garamond-v16-latin-regular.ttf";
import garamondItalic from "src/assets/garamond-font/cormorant-garamond-v16-latin-italic.ttf";
import garamondBold from "src/assets/garamond-font/cormorant-garamond-v16-latin-700.ttf";
import fontSettings from "src/assets/fontSettings";

// Register font
Font.register({
  family: "Garamond",
  fonts: [
    { src: garamond },
    { src: garamondItalic, fontStyle: "italic" },
    { src: garamondBold, fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: fontSettings.regularFont,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  summary: {
    fontSize: 12,
  },
});

const PdfCanvas = () => {
  const { fullname } = useSelector(
    (state) => state.resume.initialresume.personal
  );
  return (
    <>
      <PDFViewer height="100%" width="100%">
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Resume Template {fullname ?? ""}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default PdfCanvas;
