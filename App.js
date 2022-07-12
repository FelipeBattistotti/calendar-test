import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View
} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import 'moment/locale/br'

const locale = {
  name: 'br',
  config: {
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
      '_'
    ),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split(
      '_'
    ),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_Se_Te_Qa_Qi_Se_Sá'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY LT',
      LLLL: 'dddd D MMMM YYYY LT'
    },
    calendar: {
      sameDay: "[Hoje às] LT",
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [no] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: 'dddd [último a] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'une année',
      yy: '%d années'
    },
    ordinalParse: /\d{1,2}(er|ème)/,
    ordinal: function(number) {
      return number + (number === 1 ? 'er' : 'ème');
    },
    meridiemParse: /PD|MD/,
    isPM: function(input) {
      return input.charAt(0) === 'M';
    },
    // in case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example)
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */
    // },
    meridiem: function(hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  }
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container0}>
        <CalendarStrip
          scrollable
          locale={locale}
          style={{
            height:180,
            paddingTop: 30,
            paddingBottom: 10
          }}
          calendarColor={'#3343CE'}
          calendarHeaderStyle={{
            color: 'white',
            fontSize: 15
          }}
          dateNumberStyle={{
            color: 'white',
            fontSize: 14
          }}
          dateNameStyle={{
            color: 'white',
            fontSize: 14
          }}
          iconContainer={{flex: 0.1}}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container0: {
    flex: 1
  }
})
