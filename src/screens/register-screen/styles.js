import {StyleSheet} from 'react-native';
import Colors from '../../services/constants/colors';
import Fonts from '../../services/constants/fonts';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.screenBackground,
  },
  regTxtStyle: {
    margin: responsiveHeight(4),
    fontFamily: Fonts.proximaNovaExtraBold,
    fontWeight: 'bold',
    color: Colors.black,
    alignSelf: 'center',
    fontSize: responsiveFontSize(4),
  },
  inputStyle: {
    //     height: responsiveHeight(100),
    //     width: responsiveWidth(100),
    //     borderWidth: responsiveHeight(0.3),
    //     borderRadius: responsiveHeight(2),
    //     backgroundColor: Colors.lightGrey,
  },
  btnSaveTo: {
    margin: responsiveHeight(5),
    height: responsiveHeight(7),
    width: responsiveWidth(40),
    borderWidth: responsiveHeight(0.3),
    borderRadius: responsiveHeight(2),
    backgroundColor: Colors.lightGrey,
    borderColor: Colors.black,
  },
  btnSaveStyle: {
    margin: responsiveHeight(0.7),
    fontFamily: Fonts.proximaNovaExtraBold,
    fontWeight: '700',
    color: Colors.black,
    alignSelf: 'center',
    fontSize: responsiveFontSize(4),
  },
});
export default styles;
