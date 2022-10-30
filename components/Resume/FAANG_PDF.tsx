import { Document, Page, View, Text, Image, Canvas, Link as PDFLink, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({family: "Consolas", src: "./Consolas.ttf"});

const styles = StyleSheet.create({
  page: {maxWidth: "700px"},
  section: {width: '100%'},
  textCenter: {textAlign: "center"}
});

const Resume = () => {
  return(
    <Document title='LeHoang Resume' author='LeHuyHoang' creator='LeHuyHoang'>
      <Page size={"A4"} style={styles.page}>
        <View style={{...styles.section, ...styles.textCenter}}>
          <Text style={{fontFamily: "Consolas", fontSize: 30, fontWeight: "600", ...styles.textCenter}}>Lê Huy Hoàng</Text>
        </View>
      </Page>
    </Document>
  )
}

const FAANG_PDF = () => {
  return(
    <Resume/>
  )
}

export default FAANG_PDF;