/* eslint-disable react/prop-types */
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
import { useSelector } from "react-redux";

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

// const commonStyles = StyleSheet.create({
//   bulletBlock: {
//     display: "flex",
//     flexDirection: "column",
//     marginTop: 2,
//     marginBottom: 2,
//   },
//
//   workHeaderLine: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     fontSize: 12,
//   },
//   boldText: {
//     fontSize: 12,
//     fontWeight: 700,
//   },
//   normalTextLine: {
//     fontSize: 12,
//     display: "flex",
//     flexDirection: "row",
//   },
//   link: {
//     color: "#0a52cf",
//   },
// });

// const styles = StyleSheet.create({
//   header: {
//     borderBottom: "0.5 solid #000",
//     paddingBottom: 3,
//   },
//   name: {
//     fontSize: 24,
//     fontFamily: fontSettings.regularFont,
//     fontWeight: 700,
//   },
//   title: {
//     fontSize: "12px",
//   },
//   links: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     gap: 20,
//     fontSize: "12px",
//   },
//   linksItem: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 2,
//   },
//   icons: {
//     color: "#0a52cf",
//     height: 10,
//     width: 10,
//   },
// });

// function Links({ email, links }) {
//   return (
//     <View style={styles.links}>
//       { email !== '' &&
//         <Link src={ 'mailto:' + email } style={styles.linksItem}>
//           <Image src={mailIcon} style={styles.icons} />
//           <Text style={commonStyles.link}>{ email }</Text>
//         </Link> }
//       { links.web.link !== '' &&
//         <Link src={ links.web.link } style={styles.linksItem}>
//           <Image src={webIcon} style={styles.icons} />
//           <Text style={commonStyles.link}>{ links.web.text }</Text>
//         </Link> }
//       { links.linkedin.link !== '' &&
//         <Link src={ links.linkedin.link } style={styles.linksItem}>
//           <Image src={linkedinIcon} style={styles.icons} />
//           <Text style={commonStyles.link}>{ links.linkedin.text }</Text>
//         </Link> }
//       { links.github.link !== '' &&
//         <Link src={ links.github.link } style={styles.linksItem}>
//           <Image src={githubIcon} style={styles.icons} />
//           <Text style={commonStyles.link}>{ links.github.text }</Text>
//         </Link> }
//     </View>
//   )
// }

// function HeaderSecondLine({ phone, address }) {
//   return (
//     <View style={styles.links}>
//       <Text>{ phone }</Text>
//       <Text>{ address }</Text>
//     </View>
//   )
// }

// function Header({ personal, links }) {
//   const isSecondLine = personal.phone !== "" || personal.address !== "";
//   return (
//     <View style={styles.header}>
//       <View>
//         <Text style={styles.name}>{personal.name}</Text>
//         <Text style={styles.title}>{personal.title}</Text>
//       </View>
//       {isSecondLine && (
//         <HeaderSecondLine phone={personal.phone} address={personal.address} />
//       )}
//       <Links email={personal.email} links={links} />
//     </View>
//   );
// }

const AlphaTemplate = (props) => {
  const fullname = props.data.fullname; // Assuming 'personal' is nested inside 'data'
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>Resume Template {fullname ?? ""}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default AlphaTemplate;
