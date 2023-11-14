import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Colors from '../../services/constants/colors';
// define your styles
const styles = StyleSheet.create({
  input: {
    // flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    alignItems: 'center',
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    borderColor: Colors.black,
    borderWidth: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 10,
    padding: 1.7,
    opacity: 0.7,
    marginHorizontal: responsiveWidth(4),
    color: Colors.black,
    // backgroundColor: Colors.lightGrey,
  },
  icon1S: {
    left: -40,
    fontSize: responsiveFontSize(2.5),
    color: Colors.lightGrey,
  },
  searchIcon: {
    left: responsiveWidth(2),
    fontSize: responsiveFontSize(3),
    color: Colors.black,
    fontWeight: 'bold',
  },
});

export default styles;
