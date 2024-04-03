import { Image, Link, StyleSheet, Text, View } from "@react-pdf/renderer";

const commonStyles = StyleSheet.create({
    bulletBlock: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 2,
      marginBottom: 2,
    },
    heading: {
      fontSize: 12,
      fontFamily: fontSettings.regularFont,
      fontWeight: 700,
      borderBottom: '0.5 solid #000',
      marginBottom: 5,
    },
    workHeaderLine: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: 12,
    },
    boldText: {
      fontSize: 12,
      fontWeight: 700,
    },
    normalTextLine: {
      fontSize: 12,
      display: 'flex',
      flexDirection: 'row',
    },
    link: {
      color: '#0a52cf',
    },
  });

const styles = StyleSheet.create({
  header: {
    borderBottom: '0.5 solid #000',
    paddingBottom: 3,
  },
  name: {
    fontSize: 24,
    fontFamily: fontSettings.regularFont,
    fontWeight: 700,
  },
  title: {
    fontSize: '12px',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    fontSize: '12px',
  },
  linksItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  icons: {
    color: '#0a52cf',
    height: 10,
    width: 10,
  }
})

function Links({ email, links }) {
  return (
    <View style={styles.links}>
      { email !== '' &&
        <Link src={ 'mailto:' + email } style={styles.linksItem}>
          <Image src={mailIcon} style={styles.icons} />
          <Text style={commonStyles.link}>{ email }</Text>
        </Link> }
      { links.web.link !== '' &&
        <Link src={ links.web.link } style={styles.linksItem}>
          <Image src={webIcon} style={styles.icons} />
          <Text style={commonStyles.link}>{ links.web.text }</Text>
        </Link> }
      { links.linkedin.link !== '' &&
        <Link src={ links.linkedin.link } style={styles.linksItem}>
          <Image src={linkedinIcon} style={styles.icons} />
          <Text style={commonStyles.link}>{ links.linkedin.text }</Text>
        </Link> }
      { links.github.link !== '' &&
        <Link src={ links.github.link } style={styles.linksItem}>
          <Image src={githubIcon} style={styles.icons} />
          <Text style={commonStyles.link}>{ links.github.text }</Text>
        </Link> }
    </View>
  )
}

function HeaderSecondLine({ phone, address }) {
  return (
    <View style={styles.links}>
      <Text>{ phone }</Text>
      <Text>{ address }</Text>
    </View>
  )
}

function Header({ personal, links }) {
  const isSecondLine = personal.phone !== '' || personal.address !== '';

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.name}>{ personal.name }</Text>
        <Text style={styles.title}>{ personal.title }</Text>
      </View>
      { isSecondLine && <HeaderSecondLine phone={personal.phone} address={personal.address} /> }
      <Links email={personal.email} links={links} />
    </View>
  )
}

export default Header;